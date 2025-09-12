// helper functions
// stringToArray
// arrayToString

// main function
function reverseSentence(sentence) {
  const array = stringToArray(sentence).reverse();
  console.log(arrayToString(array));
  return arrayToString(array);
}

// string tipindeki metni alıp her kelimesini ayrı ayrı bir array elemanına dönüştüren fonksiyon
function stringToArray(string) {
  const array = [];
  let word = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      if (!(word === "")) {
        array.push(word);
      }
      word = "";
    } else if (i === string.length - 1) {
      word += string[i];
      array.push(word);
      word = "";
    } else {
      word += string[i];
    }
  }

  return array;
}

// her elemanı string olan arrayi alıp aralarına space koyarak stringe dönüştüren fonksiyon
function arrayToString(array) {
  let sentence = "";
  for (let i = 0; i < array.length; i++) {
    sentence += array[i];
    if (!(i === array.length - 1)) {
      sentence += " ";
    }
  }
  return sentence;
}

reverseSentence("world hello");
reverseSentence("push commit git");
reverseSentence("npm  install  sudo");
reverseSentence("import    default   function  export");
