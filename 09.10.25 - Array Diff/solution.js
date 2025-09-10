function arrayDiff(arr1, arr2) {
  const arr4 = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr4.push(arr1[i]);
      }
    }
  }

  const arr5 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr4.includes(arr1[i])) {
      arr5.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr4.includes(arr2[i])) {
      arr5.push(arr2[i]);
    }
  }

  return arr5.sort();
}

arrayDiff(
  ["two", "four", "five", "eight"],
  ["one", "two", "three", "four", "seven", "eight"]
);
// should return ["five", "one", "seven", "three"].
