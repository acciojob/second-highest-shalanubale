function secondHighest(arr) {
  if (arr.length < 2) return -Infinity; // Less than 2 elements

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second;
}

// ---- Test Cases ----
console.log(secondHighest([5, 1, 2, 3, 4]));       // 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // -2
console.log(secondHighest([]));
