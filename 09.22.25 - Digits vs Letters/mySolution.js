function digitsOrLetters(str) {
  let digitNumber = 0;
  let letterNumber = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) >= 47 && str[i].charCodeAt(0) <= 57) digitNumber++;
    else if (
      (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) ||
      (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)
    )
      letterNumber++;
  }

  console.log(digitNumber, letterNumber);

  return digitNumber === letterNumber
    ? "tie"
    : digitNumber >= letterNumber
    ? "digits"
    : "letters";
}
digitsOrLetters("abc123");
