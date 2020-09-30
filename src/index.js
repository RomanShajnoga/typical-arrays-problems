
exports.min = function min (array) {

  
  return !array?0:
            array.reduce((acumulator,currentValue)=>{
                 if(acumulator>currentValue) 
                    acumulator=currentValue; 
                    return acumulator;},0);
}

exports.max = function max (array) {
  return !array?0:
  array.reduce((acumulator,currentValue)=>{
       if(acumulator<currentValue) 
          acumulator=currentValue; 
          return acumulator; },0);
}

exports.avg = function avg (array) {
  return !array||!array.length?0:
  array.reduce((acumulator,currentValue,array)=>{
          acumulator+=currentValue; 
          return acumulator;
          },0)
          /array.length;
}
