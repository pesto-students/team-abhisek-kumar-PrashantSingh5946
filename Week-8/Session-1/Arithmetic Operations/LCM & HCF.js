/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function calculateHCF(a, b) {
  while (b !== 0) {
    let temp = b;
    b = b % a;
    a = temp;
  }

  return a;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function calculateLCM(a, b) {
  return (a * b) / calculateHCF(a, b);
}

function LCMIntoHCF(a, b) {
  return a * b;
}
