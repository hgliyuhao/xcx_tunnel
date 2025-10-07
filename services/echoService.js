const { echoes, preferenceGroups } = require('../data/echoes');

function getEchoes(options = {}) {
  const { tone, tags, useRemote, remoteFetcher } = options;
  if (useRemote && typeof remoteFetcher === 'function') {
    return remoteFetcher(options);
  }
  let result = echoes.slice();
  if (tone) {
    result = result.filter(item => item.tone === tone);
  }
  if (Array.isArray(tags) && tags.length) {
    const tagSet = new Set(tags);
    result = result.filter(item => item.tags.some(tag => tagSet.has(tag)));
  }
  return Promise.resolve({
    echoes: result,
    preferenceGroups
  });
}

function getPreferenceGroups(options = {}) {
  if (options.useRemote && typeof options.remoteFetcher === 'function') {
    return options.remoteFetcher(options);
  }
  return Promise.resolve(preferenceGroups);
}

module.exports = {
  getEchoes,
  getPreferenceGroups
};
