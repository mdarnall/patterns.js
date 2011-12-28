(function (global) {

  var Klass = function(Parent, props) {
    var Child
    , F
    , i;

    // create a constructor function
    Child = function (){
      if(Child.parent && Child.parent.hasOwnProperty('initialize')){
        Child.parent.initialize.apply(this, arguments);
      }
      if(Child.prototype.hasOwnProperty('initialize')){
        Child.prototype.initialize.apply(this, arguments);
      }
    };

    // inherit via the proxy prototype pattern
    Parent = Parent || Object;

    F = function (){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.parent = Parent.prototype;
    Child.prototype.constructor = Child;

    // copy properties
    for(i in props){
      if(props.hasOwnProperty(i)){
        Child.prototype[i] = props[i];
      }
    }

    return Child;
  };

  global.Klass = (global.module || {}).exports = Klass;

})(this);

