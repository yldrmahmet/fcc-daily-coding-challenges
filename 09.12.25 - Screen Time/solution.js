function tooMuchScreenTime(hours) {
  console.log(hours);

  let sum7Days = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= 10) {
      // herhangi bir gün 10 saati bulmuşsa
      return true;
    }

    sum7Days += hours[i];
  }
  console.log(sum7Days);
  let avg7Days = sum7Days / hours.length;
  console.log(avg7Days);

  if (avg7Days >= 6) {
    // hafta ortalaması 6+ saat
    return true;
  }

  let i = 0;
  let j = i + 1;
  let k = j + 1;
  while (i < hours.length - 2) {
    let avg3Days = (hours[i] + hours[j] + hours[k]) / 3;
    console.log(avg3Days);
    // ardarda 3 günün ortalaması 8+ saat
    if (avg3Days >= 8) {
      return true;
    }
    i++, j++, k++;
  }

  return false;
}

tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]);
tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]);
tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]);
tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]);
tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]);
tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]);
tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]);
