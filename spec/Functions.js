describe('Functions', function(){

  it('can be a named expressions', function(){
    var add = function add(a,b){
      return a+b;
    };

    add.name.should.equal('add');
  });

  it('can be a anonymous', function(){
    var add = function (a,b){
      return a+b;
    };
    add.name.should.equal('');
  });

  it('can be a declaration', function(){
    function add (a, b){
      return a+b;
    }
    add.name.should.equal('add');
  });

  describe('scope', function(){
    it('is created by functions', function(){
      (function(){
        var today = new Date();
      })();
      global.should.not.have.property('today');

    });
  });

  describe('Invocation', function(){
		describe('Apply', function(){
		
			var add = function(a,b){
				return a+b;
			};
			it('can be applied', function(){
				var result = add.apply(null, [1,2]);
				result.should.equal(3);
			});
			it('can be called', function  () {
				var result = add.call(null,1,2);
				result.should.equal(3);
			});
		});
    describe('method', function (){
      var counter = {
        value : 0, 
        increment : function () { 
          this.value += 1;
        }
      };

      it('has a reference to the object', function (){
        counter.increment();
        counter.value.should.equal(1);
      });
    
    });
  });
  
});
