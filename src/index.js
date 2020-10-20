module.exports = function toReadable (number) {
  let twenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numReturn = '';
    strNum = String(number);

    if (number >= 1 && number <= 19) {
        numReturn = twenty[number];
    } else if (number === 0) {
        numReturn = 'zero';

    } else if ( (number >= 20 && number <= 99) && number % 10 !== 0) {    
        numReturn = `${tens[strNum[0]]} ${twenty[strNum[1]]}`;

    } else if ( (number >= 20 && number <= 99) && number % 10 === 0) {
        numReturn = tens[strNum[0]];

    } else if (number >= 100 && number <= 1000 && number % 100 === 0) {
        numReturn = `${twenty[strNum[0]]} hundred`;

    } else if (number >= 100 && number < 1000 && number % 10 === 0) {
        numReturn = `${twenty[strNum[0]]} hundred ${tens[strNum[1]]}`;

    } else if (number >= 100 && number <= 1000 && number % 100 !== 0) {

        if (strNum[1] === '0' || strNum[1] === '1') {
        let sumNum = strNum[1] + strNum[2];
        sumNum = parseInt(sumNum);
        numReturn = `${twenty[strNum[0]]} hundred ${twenty[sumNum]}`;
        } else {
            numReturn = `${twenty[strNum[0]]} hundred ${tens[strNum[1]]} ${twenty[strNum[2]]}`;
        }
    };
  return numReturn;
}
