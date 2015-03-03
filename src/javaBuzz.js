JavaBuzz = function () {};


JavaBuzz.prototype.isDivisibleByThree = function(number){
  return(this._isDivisibleBy(3, number));
};

JavaBuzz.prototype.isDivisibleByFive = function(number){
  return(this._isDivisibleBy(5, number));
};

JavaBuzz.prototype.isDivisibleByFiveAndThree = function(number){
  return(this.isDivisibleByFive(number) && this.isDivisibleByThree(number));
};

JavaBuzz.prototype._isDivisibleBy = function(divisor, number){
  return(number % divisor === 0);
};

JavaBuzz.prototype.say = function(number){
  if(this.isDivisibleByFiveAndThree(number)){
    return "Fizzbuzz";   
  }else if(this.isDivisibleByFive(number)){ 
    return "Buzz";
  }else if(this.isDivisibleByThree(number)){
    return "Fizz"; 
  }; 
};
