var atoi = function(str) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(-2, 31);
  var atoi = parseInt(str.trim().split(" ")[0]);
  return Number.isInteger(atoi)
    ? Math.max(INT_MIN, Math.min(atoi, INT_MAX))
    : 0;
};
