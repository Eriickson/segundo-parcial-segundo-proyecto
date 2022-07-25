function binarySearch(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] == x) return mid;

    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);
    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
}

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

const valueToSearch = 144;
let arr = [13, 0, 1, 1, 2, 3, 5, 8, 21, 34, 55, 89, 144, 233, 377, 610, 987];

bubbleSort(arr, valueToSearch);
printArray(arr, valueToSearch);

console.table({
  binarySearchResult: binarySearch(arr, 0, arr.length - 1, valueToSearch),
});
