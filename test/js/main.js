const array = [2, 4, 7, 5, 4, 3, 8];
console.log(array);
const result = array.filter(function (value, index, array) {
return array.indexOf(value) === index;
})
console.log(result);

/*if文を使用する
leapYearという関数を使用する
引数に西暦を渡す
返り値を使用する
結果はコンソールに出力する
※うるう年は以下のように定義されます。
西暦が4で割り切れるかつ100で割り切れない
西暦が400で割り切れる*/
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
const checkYear = 2020;

  if (leapYear(checkYear)) {
    console.log(checkYear + '年はうるう年です');
  } else {
    console.log(checkYear + '年はうるう年ではありません');
  }
