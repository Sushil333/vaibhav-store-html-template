let arr = [3, 5, 8, 2, 6];
let sum = 11;

let ans = [];

function subArraySum(a) {
  let windowSum = 0;
  let i = 0;
  let j = 0;

  while (i < a.length) {
    while (j < a.length && windowSum < a.length) {
      windowSum += a[j++];
    }

    if (windowSum == a.length) {
      return a.copyOfRange(a, i, j);
    }

    windowSum -= a[i++];
  }

  return null;
}

console.log(subArraySum(arr));
