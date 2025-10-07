const app = getApp();
const { getEchoes, getPreferenceGroups } = require('../../services/echoService');

const WHISPERS = [
  '静下心来聆听城市的呼吸。',
  '把心事托付给夜色守护。',
  '黎明会带来新的答案。'
];

Page({
  data: {
    slogan: '让每一次呼吸都柔软下来。',
    loading: true,
    activeEcho: null,
    echoes: [],
    preferences: [],
    editingPreferences: [],
    editingTagMap: {},
    preferenceGroups: [],
    showWhisper: true,
    activeWhisper: WHISPERS[0],
    whisperIndex: 0,
    preferencePanelVisible: false,
    favorites: [],
    favoriteSet: {},
    feedbackSheetVisible: false,
    echoAnimation: '',
    particles: [0, 1, 2, 3, 4, 5, 6, 7],
    toastMessage: '',
    showToast: false,
    emptyState: false,
    topBarTop: 60,
    contentTopPadding: 200,
    moonIcon: '🌙',
    sunIcon: '☀'
  },

  onLoad() {
    this.initTheme();
    this.restorePreferences();
    this.restoreFavorites();
    this.loadEchoes();
    this.setupWhisperLoop();
    this.registerGlobalListeners();
    this.computeSafeArea();
  },

  onShow() {
    if (this.data.showWhisper && !this.whisperTimer) {
      this.setupWhisperLoop();
    }
    const theme = app.globalData.theme || 'night';
    if (theme !== this.data.theme) {
      this.setData({ theme });
      this.loadEchoes({ tone: theme });
    }
  },

  onHide() {
    this.clearWhisperLoop();
    this.clearEchoAnimationTimers();
  },

  onUnload() {
    this.clearWhisperLoop();
    this.clearEchoAnimationTimers();
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = null;
    }
  },

  initTheme() {
    const theme = app.globalData.theme || 'night';
    this.setData({ theme });
  },

  restorePreferences() {
    const preferences = app.globalData.preferences || [];
    this.setData({
      preferences,
      editingPreferences: preferences.slice(),
      editingTagMap: this.buildTagMap(preferences)
    });
  },

  restoreFavorites() {
    const favorites = app.globalData.favorites || [];
    this.setData({
      favorites,
      favoriteSet: this.buildFavoriteMap(favorites)
    });
  },

  computeSafeArea() {
    if (!wx.getSystemInfoSync) {
      return;
    }
    const info = wx.getSystemInfoSync();
    const statusBar = info.statusBarHeight || 0;
    const menuRect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
    let topBarTop = statusBar + 20;
    let contentTopPadding = statusBar + 140;
    if (menuRect) {
      topBarTop = menuRect.top;
      contentTopPadding = menuRect.bottom + 40;
    }
    this.setData({ topBarTop, contentTopPadding });
  },
  registerGlobalListeners() {
    app.onThemeChange(theme => {
      if (theme !== this.data.theme) {
        this.setData({ theme });
        this.loadEchoes({ tone: theme });
      }
    });
    app.onPreferenceChange(preferences => {
      this.setData({
        preferences,
        editingPreferences: preferences.slice(),
        editingTagMap: this.buildTagMap(preferences)
      });
    });
    app.onFavoriteChange(favorites => {
      this.setData({
        favorites,
        favoriteSet: this.buildFavoriteMap(favorites)
      });
    });
  },

  loadEchoes(options = {}) {
    const tone = options.tone || this.data.theme;
    const tags = options.tags !== undefined ? options.tags : this.data.preferences;
    this.setData({ loading: true });
    return getEchoes({ tone: tone === 'night' ? 'night' : 'dawn', tags })
      .then(({ echoes, preferenceGroups }) => {
        const hadActiveEcho = !!(this.data.activeEcho && this.data.activeEcho.id);
        const activeEcho = this.chooseEcho(echoes);
        const nextState = {
          loading: false,
          echoes,
          emptyState: !echoes.length
        };
        if (!this.data.preferenceGroups.length && Array.isArray(preferenceGroups) && preferenceGroups.length) {
          nextState.preferenceGroups = preferenceGroups;
        }
        if (!echoes.length) {
          nextState.activeEcho = null;
        }
        this.setData(nextState, () => {
          if (activeEcho) {
            this.switchEcho(activeEcho, !hadActiveEcho);
          } else if (!echoes.length) {
            this.switchEcho(null, true);
          }
        });
        if (!echoes.length) {
          this.dismissWhisper();
        }
      })
      .catch(() => {
        this.setData({
          loading: false,
          emptyState: true
        });
      });
  },
  chooseEcho(echoes) {
    if (!Array.isArray(echoes) || !echoes.length) {
      return null;
    }
    const currentId = this.data.activeEcho && this.data.activeEcho.id;
    if (echoes.length === 1) {
      return echoes[0];
    }
    let candidate = echoes[Math.floor(Math.random() * echoes.length)];
    let guard = 0;
    while (candidate.id === currentId && guard < 10) {
      candidate = echoes[Math.floor(Math.random() * echoes.length)];
      guard += 1;
    }
    return candidate;
  },

  setupWhisperLoop() {
    this.clearWhisperLoop();
    this.whisperTimer = setInterval(() => {
      if (!this.data.showWhisper) {
        return;
      }
      const nextIndex = (this.data.whisperIndex + 1) % WHISPERS.length;
      this.setData({
        whisperIndex: nextIndex,
        activeWhisper: WHISPERS[nextIndex]
      });
    }, 5000);
  },

  clearWhisperLoop() {
    if (this.whisperTimer) {
      clearInterval(this.whisperTimer);
      this.whisperTimer = null;
    }
  },

  dismissWhisper() {
    if (this.data.showWhisper) {
      this.setData({ showWhisper: false });
    }
    this.clearWhisperLoop();
  },

  onNextEcho() {
    if (this.data.loading) {
      return;
    }
    if (!this.data.echoes.length) {
      this.loadEchoes();
      return;
    }
    const next = this.chooseEcho(this.data.echoes);
    if (next) {
      this.switchEcho(next);
    }
    this.dismissWhisper();
  },

  onOpenPreferencePanel() {
    this.ensurePreferenceGroups();
    this.setData({
      preferencePanelVisible: true,
      editingPreferences: this.data.preferences.slice(),
      editingTagMap: this.buildTagMap(this.data.preferences)
    });
    this.dismissWhisper();
  },

  onClosePreferencePanel() {
    this.setData({
      preferencePanelVisible: false,
      editingPreferences: this.data.preferences.slice(),
      editingTagMap: this.buildTagMap(this.data.preferences)
    });
  },

  onToggleTag(event) {
    const tag = event.currentTarget.dataset.tag;
    if (!tag) {
      return;
    }
    const editingPreferences = this.data.editingPreferences.slice();
    const map = Object.assign({}, this.data.editingTagMap);
    const index = editingPreferences.indexOf(tag);
    if (index > -1) {
      editingPreferences.splice(index, 1);
      delete map[tag];
    } else {
      editingPreferences.push(tag);
      map[tag] = true;
    }
    this.setData({
      editingPreferences,
      editingTagMap: map
    });
  },

  onResetEditing() {
    this.setData({
      editingPreferences: [],
      editingTagMap: {}
    });
  },

  onConfirmPreferences() {
    const selection = this.data.editingPreferences.slice();
    this.setData({ preferencePanelVisible: false });
    this.applyPreferences(selection);
    this.dismissWhisper();
  },

  onResetPreferences() {
    this.applyPreferences([]);
    this.dismissWhisper();
  },

  applyPreferences(preferences) {
    const normalized = Array.from(new Set(preferences));
    app.setPreferences(normalized);
    this.setData({
      preferences: normalized,
      editingPreferences: normalized.slice(),
      editingTagMap: this.buildTagMap(normalized)
    });
    this.loadEchoes({ tags: normalized });
  },

  buildTagMap(list) {
    const map = {};
    if (!Array.isArray(list)) {
      return map;
    }
    list.forEach(tag => {
      if (typeof tag === 'string' && tag.trim()) {
        map[tag] = true;
      }
    });
    return map;
  },

  buildFavoriteMap(ids) {
    const map = {};
    if (!Array.isArray(ids)) {
      return map;
    }
    ids.forEach(id => {
      if (id !== undefined && id !== null && id !== '') {
        map[id] = true;
      }
    });
    return map;
  },
  ensurePreferenceGroups() {
    if (this.data.preferenceGroups.length) {
      return;
    }
    getPreferenceGroups().then(groups => {
      if (Array.isArray(groups) && groups.length) {
        this.setData({ preferenceGroups: groups });
      }
    });
  },

  onToggleFavorite() {
    const current = this.data.activeEcho;
    if (!current) {
      return;
    }
    const favorites = this.data.favorites.slice();
    const map = Object.assign({}, this.data.favoriteSet);
    const index = favorites.indexOf(current.id);
    let message;
    if (index > -1) {
      favorites.splice(index, 1);
      delete map[current.id];
      message = '已移出收藏。';
    } else {
      favorites.push(current.id);
      map[current.id] = true;
      message = '已加入收藏。';
    }
    this.setData({
      favorites,
      favoriteSet: map
    });
    app.setFavorites(favorites);
    this.showToast(message);
    this.dismissWhisper();
  },

  showToast(message) {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
    this.setData({
      showToast: true,
      toastMessage: message
    });
    this.toastTimer = setTimeout(() => {
      this.setData({ showToast: false });
    }, 1600);
  },

  onToggleTheme() {
    const nextTheme = app.toggleTheme();
    if (nextTheme) {
      this.dismissWhisper();
    }
  },

  onOpenSettings() {
    wx.showActionSheet({
      itemList: ['切换主题', '查看小贴士', '发送反馈'],
      success: res => {
        if (res.tapIndex === 0) {
          this.onToggleTheme();
        } else if (res.tapIndex === 1) {
          wx.showToast({ title: '功能即将上线', icon: 'none' });
        } else if (res.tapIndex === 2) {
          this.openFeedbackSheet();
        }
      }
    });
    this.dismissWhisper();
  },

  openFeedbackSheet() {
    this.setData({ feedbackSheetVisible: true });
  },

  closeFeedbackSheet() {
    this.setData({ feedbackSheetVisible: false });
  },

  onEchoCardTap() {
    if (this._echoSwipeHandled || this.data.loading || !this.data.activeEcho) {
      this._echoSwipeHandled = false;
      return;
    }
    this.onNextEcho();
  },

  onEchoTouchStart(event) {
    if (!event.touches || !event.touches.length) {
      return;
    }
    const touch = event.touches[0];
    this._echoTouchStart = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
    this._echoSwipeHandled = false;
  },

  onEchoTouchEnd(event) {
    if (!this._echoTouchStart || !event.changedTouches || !event.changedTouches.length) {
      this._echoTouchStart = null;
      return;
    }
    const touch = event.changedTouches[0];
    const dx = touch.clientX - this._echoTouchStart.x;
    const dy = touch.clientY - this._echoTouchStart.y;
    const dt = Date.now() - this._echoTouchStart.time;
    this._echoTouchStart = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) && dt < 600) {
      this._echoSwipeHandled = true;
      this.onNextEcho();
    }
  },
  switchEcho(nextEcho, immediate = false) {
    this._echoSwipeHandled = false;
    if (!nextEcho) {
      this.clearEchoAnimationTimers();
      this.setData({ activeEcho: null, echoAnimation: '' });
      return;
    }
    this.clearEchoAnimationTimers();
    if (immediate) {
      this.setData({ activeEcho: nextEcho, echoAnimation: 'echo-enter' });
      this.echoAnimationTimer = setTimeout(() => {
        this.setData({ echoAnimation: '' });
        this.echoAnimationTimer = null;
      }, 340);
      return;
    }
    this.setData({ echoAnimation: 'echo-exit' });
    this.echoAnimationDelayTimer = setTimeout(() => {
      this.setData({ activeEcho: nextEcho, echoAnimation: 'echo-enter' });
      this.echoAnimationDelayTimer = null;
      this.echoAnimationTimer = setTimeout(() => {
        this.setData({ echoAnimation: '' });
        this.echoAnimationTimer = null;
      }, 340);
    }, 140);
  },

  clearEchoAnimationTimers() {
    if (this.echoAnimationDelayTimer) {
      clearTimeout(this.echoAnimationDelayTimer);
      this.echoAnimationDelayTimer = null;
    }
    if (this.echoAnimationTimer) {
      clearTimeout(this.echoAnimationTimer);
      this.echoAnimationTimer = null;
    }
  },

  noop() {}
});
