function curry(func , thisArg){
  if ( !Array.isArray(thisArg) ) {
    thisArg = [];
  }
  return function(){
    // Array like
    let args = Array.prototype.slice.call(arguments);
    if ( (args.length + thisArg.length) < func.length ) {
      return curry(func , thisArg.concat(args));
    }
    return func.apply(this , thisArg.concat(args));
  };
}

var add = function(x, y, z){
  return x + y + z;
}

var plus = curry(add);

console.log(plus()(4));
