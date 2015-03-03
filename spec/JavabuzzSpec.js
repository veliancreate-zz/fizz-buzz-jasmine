describe('javaBuzz', function() {
  var javaBuzz = new JavaBuzz

  describe('knows when a number is', function() {
    
    it('divisible by three', function() {
      expect(javaBuzz.isDivisibleByThree(3)).toBe(true);       
    });

    it('divisible by five', function() {
      expect(javaBuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('not divisible by three', function() {
      expect(javaBuzz.isDivisibleByThree(4)).toBe(false);       
    });

    it('divisible by five', function() {
      expect(javaBuzz.isDivisibleByFive(2)).toBe(false);
    });

    it('is divisible by five and three', function() {
      expect(javaBuzz.isDivisibleByFiveAndThree(43)).toBe(false);
    });

  });

  describe('says', function(){

    it('fizz when a number is divisible by three', function(){
      expect(javaBuzz.say(3)).toEqual('Fizz');
    });
    it('buzz when a number is divisible by five', function(){
      expect(javaBuzz.say(5)).toEqual('Buzz');
    });
    it('fizzbuzz when a number is divisible by five and three', function(){
      expect(javaBuzz.say(15)).toEqual('Fizzbuzz')
    });

  });

});