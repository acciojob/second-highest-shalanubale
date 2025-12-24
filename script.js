function secondHighest(arr) {
  if (!arr || arr.length < 2) {
    return -Infinity;
  }

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value > max) {
      secondMax = max;
      max = value;
    } else if (value < max && value > secondMax) {
      secondMax = value;
    }
  }

  return secondMax;
}
