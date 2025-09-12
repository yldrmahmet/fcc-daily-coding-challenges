function allUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}

// JavaScript'in Set veri yapısı, benzersiz elemanları tutar. String'i bir Set'e dönüştürerek karakterlerin benzersizliğini kontrol edebiliriz. Tek satırda bu problemi çözecek yöntem.
// function allUnique(str) {
//   return new Set(str).size === str.length;
// }

console.log(allUnique("ahmet"));
console.log(allUnique("freeCodeCamp"));
