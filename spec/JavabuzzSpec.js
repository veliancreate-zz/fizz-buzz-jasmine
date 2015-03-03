describe('javaBuzz', function(){
  var javaBuzz = new JavaBuzz

  describe('knows when a number is', function(){
    
    it('divisible by three', function(){
      expect(javaBuzz.isDivisibleByThree(3)).toBe(true)       
    });

  });

});