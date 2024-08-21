chrome.runtime.onMessage.addListener(function(url) {
   chrome.tabs.create({ url: url });
});
