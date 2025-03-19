chrome.runtime.onMessage.addListener((url) => {
  chrome.tabs.create({ url });
});
