/*
  isEven
  This function takes a number and returns true or false
  based on whether the number is even or not
*/
const isEven = (number) => {
  return number % 2 == 0;
}

/*
  isOdd
  This function takes a number and returns true or false
  based on whether the number is odd or not
*/
const isOdd = (number) => {
  return number % 2 != 0;
}


/*
  square
  This function takes a number and returns the mathematical square
  of that number
*/
const getSquare = (number) => {
  return number * number;
}


/*
  cube
  This function takes a number and returns the mathematical cube
  of that number
*/
const getCube = (number) => {
  return number * number * number;
}


/*
  gcd
  This function returns the greatest common divisor of any two numbers
*/
const gcd = function (fNum, sNum) {
  if (!fNum) {
    return sNum;
  }

  return gcd(fNum, sNum % fNum);
};

/*
  lcm
  This function returns the least common multiple of any two numbers
*/
const lcm = function(fNum, sNum){
  return ((fNum * sNum)/ gcd(fNum,sNum));
}



/*
  simpleInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest(in that order)
*/
const getSimpleInterest = (principal,rate,time)=>{
  return (principal * rate * time) / 100;
}

/*
  compoundInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest annually(in that order)
*/
const getCompoundInterest = function (principle, noOfYears, rate, compFreq) {
  compFreq = (compFreq) ? compFreq : 1;
  let comp = Math.floor(noOfYears * compFreq);
  return principle * Math.pow(((100 + rate / compFreq) / 100), comp) - principle;
};

/*
  greatestOf
  This function returns the greatest of three numbers
*/

/*
  averageOf
  This function returns the average of three numbers
*/
const averageOf = (fNum,sNum,tNum)=>{
  return (fNum + sNum + tNum) / 3;
}


exports.isEven=isEven;
exports.isOdd=isOdd;
exports.square=square;
exports.cube=cube;
exports.gcd=gcd;
exports.lcm=lcm;
exports.simpleInterest=simpleInterest;
exports.compoundInterest=compoundInterest;
exports.greatestOf=greatestOf;
exports.averageOf=averageOf;
