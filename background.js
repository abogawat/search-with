chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { message: "get_search_text" }, (response) => {
    if (response && response.searchText) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(response.searchText)}`;
      chrome.tabs.create({ url: searchUrl });
    } else {
      console.log("No text found in the search field.");
    }
  });
});
