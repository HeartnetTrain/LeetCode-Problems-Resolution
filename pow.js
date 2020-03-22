var myPow = function(x, n) {
  if (n == 0) return 1;
  if (n == 1) return x;
  if (n == 2) return x * x;
  if (n < 0) return myPow(1 / x, -1 * n);
  let half = Math.floor(n / 2);
  if (n % 2 === 0) return myPow(myPow(x, half), 2);
  else return x * myPow(myPow(x, half), 2);
};

console.log(myPow(0.5, -2));

/* x = 2.0 & n = 10*/
/* x = 0.5 & n = -2 */
