var Animal = function (name) {
    this.name = name || 'none';
};

Animal.prototype = {
    say: function () {
        return "Hi, my name is " + this.name;
    }
};

describe('Pseudoclassical Inheritance', function () {
    // set the prototype to a new instance of the parent
    var Dog = function () {
    };
    Dog.prototype = new Animal();

    it('gives you own properties', function () {
        var fido = new Dog();
        fido.name.should.equal('none');
    });

    it('gives you prototype properties', function () {
        var fido = new Dog();
        fido.say().should.equal('Hi, my name is none');
    });

    it("doesn't give you the ability to pass parameters", function () {
        var fido = new Dog('fido');
        fido.name.should.equal('none');
    });

});

describe('Prototype Inheritence rent and set', function () {

    var Cat = function (name) {
        Animal.apply(this, [name]);
    };
    Cat.prototype = new Animal();

    it('allows you to pass parameters', function () {
        var kitty = new Cat('whiskers');
        kitty.name.should.equal('whiskers');
    });

    it('copies parents own properties', function () {
        var cat = new Cat('mitty');
        cat.say().should.equal('Hi, my name is mitty');

        delete cat.name;
        cat.should.have.property('name');
        cat.name.should.equal('none');
    });

});

describe('Proxy constructor pattern', function () {

    var inherit = (function () {
        var F = function () {
        };
        return function (C, P) {
            F.prototype = P.prototype;
            C.prototype = new F();
            C.parent = P.prototype;
            C.prototype.constructor = C;
        };
    })();

    var Cat = function () {
        this.weight = 8;
    };
    inherit(Cat, Animal);

    it('inherits the prototype chain', function () {
        var cat = new Cat();
        cat.should.have.property('say');
    });

    it('doesnt have the parents own properties', function () {
        var cat = new Cat();
        cat.should.not.have.property('name');
    });

    it('can have access to the parent', function () {
        Cat.prototype.talk = function () {
            var say = Cat.parent.say.call(this);
            return say + ".";
        };

        var cat = new Cat();
        cat.talk().should.equal("Hi, my name is undefined.");
    });

    describe('Klass sugar for proxy contructor pattern', function () {
        var Klass = require('../../src/Klass').Klass;

        var Man = Klass(null, {

            initialize: function (name) {
                this.name = name;
            },
            getName: function () {
                return this.name;
            }
        });

        var SuperHuman = Klass(Man, {
            initialize: function () {
            },
            getName: function () {
                var name = SuperHuman.parent.getName.call(this);
                return "I am " + name;
            }
        });

        it('inherits from object if no parent is passed', function () {
            var man = new Man('Adam');
            man.should.be.an.instanceof(Object);
        });
        it('inherits from objects', function () {
            var superAdam = new SuperHuman('Adam');
            superAdam.should.be.an.instanceof(Man)
                .and.an.instanceof(SuperHuman);
        });
        it('can have overriden methods', function () {
            var superHuman = new SuperHuman('Adam');
            superHuman.getName().should.equal('I am Adam');
        });

    });
});
