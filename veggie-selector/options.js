// Saves options to browser.storage
const saveOptions = () => {
  let veggie = document.getElementById("veggie").value;
  const promise = browser.storage.sync.set({
    preferredVeggie: veggie
  });
  promise.then(() => {
    // Update status to let user know options were saved.
    let status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(function() {
      status.textContent = "";
    }, 750);
  });
};

// Restores select box using the preferences stored in browser.storage.
const restoreOptions = () => {
  // Use default value veggie = 'sprouts'
  const promise = browser.storage.sync.get({
    preferredVeggie: "sprouts"
  });
  promise.then(items => {
    document.getElementById("veggie").value = items.preferredVeggie;
  });
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
