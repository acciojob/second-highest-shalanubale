function secondHighest(arr) {
  if (!arr || arr.length < 2) {
    return -Infinity;
  }

  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let num of arr) {
    if (num > highest) {
      secondHighest = highest;
      highest = num;
    } else if (num < highest && num > secondHighest) {
      secondHighest = num;
    }
  }

  return secondHighest;
}
