var reverse = function(x) {
  var res = 0;
  var inter = Math.abs(x);
  const validInterval = [Math.pow(-2, 31), Math.pow(2, 31) - 1];
  while (inter > 0) {
    let mod = inter % 10;
    inter = Math.floor(inter / 10);
    res = res * 10 + mod;
  }
  if (x < 0) res *= -1;
  if (res >= validInterval[0] && res <= validInterval[1]) return res;
  else return 0;
};
