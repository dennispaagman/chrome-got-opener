const topics = document.querySelectorAll('img[title="nieuwe reacties"]');

// Create a button that looks nice
const button = document.createElement("button");
button.classList.add("ctaButton");
button.style.marginBottom = "15px";
button.textContent = "Open alle ongelezen topics";
button.disabled = topics.length === 0;

if (document.querySelector(".pagenav")) {
  const location = document.querySelector(".pagenav");

  location.style.display = "flex";
  location.style.justifyContent = "space-between";

  location.prepend(button);
} else {
  const location = document.querySelector(".listing");

  location.parentNode.insertBefore(button, location);
}

// Insert the button on top of the list of bookmarks

// When clicking the button, open all unread topics in new tabs (via background worker)
button.addEventListener("click", (event) => {
  event.preventDefault();

  topics.forEach((topic) => {
    const url = topic.parentElement.href;

    chrome.runtime.sendMessage(url);
  });
});
