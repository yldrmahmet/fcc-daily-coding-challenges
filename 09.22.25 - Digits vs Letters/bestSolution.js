function digitsOrLetters(str) {
  let digitCount = 0;
  let letterCount = 0;

  for (const char of str) {
    // Rakam kontrolü (0-9)
    if (char >= "0" && char <= "9") {
      digitCount++;
    }
    // Harf kontrolü (a-z, A-Z)
    else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      letterCount++;
    }
    // Diğer karakterler göz ardı edilir
  }

  // Sonuç belirleme
  if (digitCount > letterCount) {
    return "digits";
  } else if (letterCount > digitCount) {
    return "letters";
  } else {
    return "tie";
  }
}

// Alternatif: Regex kullanarak daha kısa çözüm
function digitsOrLettersRegex(str) {
  const digitCount = (str.match(/\d/g) || []).length;
  const letterCount = (str.match(/[a-zA-Z]/g) || []).length;

  if (digitCount > letterCount) return "digits";
  if (letterCount > digitCount) return "letters";
  return "tie";
}

// Test örnekleri
console.log(digitsOrLetters("abc123")); // "tie"
console.log(digitsOrLetters("a1b2c3d")); // "letters"
console.log(digitsOrLetters("1a2b3c4")); // "digits"
console.log(digitsOrLetters("abc123!@#DEF")); // "letters"
console.log(digitsOrLetters("H3110 W0R1D")); // "digits"
console.log(digitsOrLetters("P455W0RD")); // "tie"
