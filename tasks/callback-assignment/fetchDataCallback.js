
function fetchDataWithCallback(callback) {
  setTimeout(function () {
    try {
      // Simulate error condition
      let error = Math.random() < 0.5; // 50% chance of failure

      if (error) {
        throw new Error("Fetch failed");
      }

      // If no error, call the callback with success message
      callback("Data fetched");
    } catch (err) {
      console.error("Error:", err.message);
    }
  }, 2000);
}

// Example usage:
fetchDataWithCallback(function (result) {
  console.log(result);
});

// PR marker: change on callback-assignment only
