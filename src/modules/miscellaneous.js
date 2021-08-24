export const stringLeftPad = (num, padString = '0', padLeft = -2) => {
  return `${padString}${num.toString()}`.slice(padLeft)
}
