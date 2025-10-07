App({
  globalData: {
    theme: 'night',
    preferences: [],
    favorites: []
  },
  _listeners: {
    theme: [],
    preferences: [],
    favorites: []
  },
  onLaunch() {
    this.restoreState();
  },
  restoreState() {
    const storedTheme = wx.getStorageSync('tunnel-theme');
    if (storedTheme) {
      this.globalData.theme = storedTheme;
    }
    const storedPreferences = wx.getStorageSync('tunnel-preferences');
    if (Array.isArray(storedPreferences)) {
      this.globalData.preferences = storedPreferences;
    }
    const storedFavorites = wx.getStorageSync('tunnel-favorites');
    if (Array.isArray(storedFavorites)) {
      this.globalData.favorites = storedFavorites;
    }
  },
  setTheme(theme) {
    if (!theme || this.globalData.theme === theme) {
      return;
    }
    this.globalData.theme = theme;
    wx.setStorageSync('tunnel-theme', theme);
    this._emit('theme', theme);
  },
  toggleTheme() {
    const nextTheme = this.globalData.theme === 'night' ? 'dawn' : 'night';
    this.setTheme(nextTheme);
    return nextTheme;
  },
  setPreferences(preferences) {
    const unique = Array.from(new Set(preferences || []));
    this.globalData.preferences = unique;
    wx.setStorageSync('tunnel-preferences', unique);
    this._emit('preferences', unique);
  },
  setFavorites(favorites) {
    const unique = Array.from(new Set(favorites || []));
    this.globalData.favorites = unique;
    wx.setStorageSync('tunnel-favorites', unique);
    this._emit('favorites', unique);
  },
  onThemeChange(fn) {
    this._register('theme', fn);
  },
  onPreferenceChange(fn) {
    this._register('preferences', fn);
  },
  onFavoriteChange(fn) {
    this._register('favorites', fn);
  },
  _register(channel, fn) {
    if (typeof fn === 'function' && this._listeners[channel]) {
      this._listeners[channel].push(fn);
    }
  },
  _emit(channel, payload) {
    const queue = this._listeners[channel];
    if (!queue) {
      return;
    }
    queue.forEach(listener => {
      if (typeof listener === 'function') {
        listener(payload);
      }
    });
  }
});
