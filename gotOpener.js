const topics = document.querySelectorAll('img[title="nieuwe reacties"]');

// Create a button that looks nice
const button = document.createElement("button");
button.classList.add("ctaButton");
button.style = "margin-bottom: 15px;";
button.textContent = "Open alle ongelezen topics";
button.disabled = topics.length === 0;

// Insert the button on top of the list of bookmarks
const listing = document.querySelector(".listing");
listing.parentNode.insertBefore(button, listing);

// When clicking the button, open all unread topics in new tabs (via background worker)
button.addEventListener("click", (event) => {
  event.preventDefault();

  topics.forEach((topic) => {
    const url = topic.parentElement.href;

    chrome.runtime.sendMessage(url);
  });
});
