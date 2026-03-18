// Example: detect price on page
const price = document.querySelector(".price")?.innerText;

if (price) {
  chrome.runtime.sendMessage({
    type: "DETECTED_EXPENSE",
    value: price
  });
}