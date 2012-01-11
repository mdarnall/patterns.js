describe('Prototypal Inheritance', function (){
	var mammal = {
		name : 'Matt', 
		getName : function (){
			return this.name;
		}
	};

	var Reptile = function (){
		this.name = 'Sammy';
	};
	Reptile.prototype = {
		getName : function (){
			return this.name;
		}
	};
	it('can create a new object based on an existing one', function (){	
		var cat = Object.create(mammal);
		cat.should.have.property('getName');	
	});

	it('can create a new object with properties', function (){
		var cat = Object.create(mammal, {
			age : {
					value : 5
			}
		});

		cat.should.have.property('age');
	});

	it('can create a new object with the prototype chain', function (){
		var snake = Object.create(new Reptile());
		snake.should.have.property('getName');
	});

	it('can take just the prototype as an argument to not inherit own properties', function (){
		var snake = Object.create(Reptile.prototype);
		snake.should.not.have.property('name');
	});
});
