const express = require("express");

const app = express();
const port = 2000;

let arr = [
  0, 966, 969, 9, 5566, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
  610, 987,
];
const valueToSearch = 13;

app.get("/binary-search", (req, res) => {
  function binarySearch(arr, l, r, x) {
    if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);

      if (arr[mid] == x) return mid;

      if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
      return binarySearch(arr, mid + 1, r, x);
    }
    return -1;
  }

  const result = binarySearch(arr, valueToSearch);
  console.log(result);
  res.send(`Binary search result: ${result}`);
});

app.get("/bubble-sort", (req, res) => {
  function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }

  function bubbleSort(arr, n) {
    var i, j;
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  }

  function printArray(arr, size) {
    console.log(
      "============================ :bubbleSort: ============================"
    );
    var i;
    for (i = 0; i < size; i++) {
      arr[i] && console.log(arr[i] + " ");
    }
    console.log("\n");
    console.log(
      "============================ :bubbleSort: ============================"
    );
  }

  bubbleSort(arr, valueToSearch);
  printArray(arr, valueToSearch);

  res.send(`Bubble sort result: `);
});

app.listen(port, () => {
  console.log("listening for request on port 2000");
});
