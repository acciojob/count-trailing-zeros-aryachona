function trailingZeros(n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

function runTrailingZeros() {
  let input = prompt("Enter a non-negative integer (up to 10000):");
  if (input === null) return; // User canceled

  input = input.trim();
  if (!/^\d+$/.test(input)) {
    alert("Please enter a valid non-negative integer.");
    return;
  }

  let num = parseInt(input, 10);
  if (num > 10000) {
    alert("Please enter a number less than or equal to 10,000.");
    return;
  }

  const zeros = trailingZeros(num);
  alert(`Number of trailing zeros in ${num}! is: ${zeros}`);
}

// Attach event listener after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("calculateBtn").addEventListener("click", runTrailingZeros);
});
