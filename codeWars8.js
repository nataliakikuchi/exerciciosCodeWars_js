//https://www.codewars.com/kata/twice-as-old/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  var doubleSon = sonYearsOld * 2;
  var oldDad = dadYearsOld - doubleSon;
  return Math.abs(oldDad);
}
