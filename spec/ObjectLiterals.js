describe('Object Literals', function(){
	var dog;
	beforeEach(function(){
		dog = {
      name : 'benji',
      getName : function (){
        return this.name;
      }
    };
	});
	it('Can create an empty object', function(){
		dog.should.be.a('object');
	});

	it('Can have properties', function (){
		dog.should.have.property('name');
	});

	it('Can have methods', function(){
   dog.getName().should.equal('benji');
	});
});
