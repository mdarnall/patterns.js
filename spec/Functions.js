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

  describe('Immediate Functions', function(){
    
    it('create local scope', function(){
      (function(){
        var today = new Date();
        console.log(today.toString());
      })();
      global.should.not.have.property('today');

    });

  });
});