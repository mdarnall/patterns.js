describe('Objects', function(){
	var dog;
	beforeEach(function(){
		dog = {
      name : 'benji',
      getName : function (){
        return this.name;
      }
    };
	});
	
	it('Can be created by a literal', function(){
		var obj = {};
		obj.should.be.a('object');
	});

	it('Can have properties', function (){
		dog.should.have.property('name');
		// properties can be accessed both ways
		dog['name'].should.equal('benji');
	});

	it('Can have methods', function(){
   dog.getName().should.equal('benji');
	});

	describe('creation patterns', function(){
		
		it('custom constructors can create private members', function(){
			function Toy (name){
				var name = name;
				this.getName = function(){
					return name;
				};
			}

			var toy = new Toy('car');
			toy.should.not.have.property('name');
			toy.getName().should.equal('car');
		});

		it('custom constructors can have private prototype members', function (){
			
			function iPad () {
			}
			iPad.prototype = (function(){
				var name = 'ipad';
				return {
					getName : function(){
						return name;
					}
				}
			})();

			var ipad = new iPad();
			ipad.should.not.have.property('name');
		});

		it('object literals can have private members', function(){
			var toy = (function(){
				var name = 'ipod';
				return {
					getName : function(){
						return name;
					}
				};
			})();

			toy.should.not.have.property('name');
			toy.getName().should.equal('ipod');
		});

		
	});

	it('can have static members', function(){
		var Toy = function (){};
		Toy.isSafe = function () {
			return true;
		};

		Toy.isSafe().should.be.true;
	});

	it('can have private static members',  function () {
		var Toy = (function () {
			var id = 0,NewToy;
			NewToy = function(){
				id += 1;
			};

			NewToy.prototype = {
				getLastId : function (){
					return id;
				}
			};
			return NewToy;
		}());

		var toy_one = new Toy();
		toy_one.getLastId().should.equal(1);
		var toy_two = new Toy();
		toy_two.getLastId().should.equal(2);

	});
});
