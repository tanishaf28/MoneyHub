chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "DETECTED_EXPENSE") {
    console.log("Detected:", msg.value);

    // store or forward
    chrome.storage.local.get("expenses").then(data => {
      const expenses = data.expenses || [];
      expenses.push({ amount: msg.value, auto: true });

      chrome.storage.local.set({ expenses });
    });
  }
});