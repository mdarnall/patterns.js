describe('Contructor functions', function () {
  
  it('should create an instance', function(){
    var Person = function(name){
      this.name = name;
    };

    var matt = new Person('matt');
    matt.should.be.an.instanceof(Person);

  });

});
