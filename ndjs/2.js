Function.prototype.curry = function(...args){
  const ctx = this;
  return function(...innerArgs){
    return ctx.apply(this, args.concat(innerArgs));
  };
}

function add(num1, num2){
  return num1 + num2;
}

console.log(add.curry(2)(3));

arr = [2,2,2,2,2,2,3,5,5]
console.time('arr');
w = [...new Set(arr)]
console.timeEnd('arr');

function rmDul(arr){
  const map = new Map();
  const aLen = arr.length;
  for(let i = 0; i < aLen; i++){
    if(!map.get(arr[i])){
      map.set(arr[i], true);
    }
  }
  const result = [...map.keys()];
  return result;
}
console.time('map');
console.log(rmDul(arr));
console.timeEnd('map');
console.log(w);

function calc(str){
  const result = {};
  let max = 0,
    char = null;
  for(const char of str){
    result[char]? (result[char] += 1): (result[char] = 1);
  }
  for(const key in result){
    if(result[key] > max){
      max = result[key];
      char = key;
    }
  }
  return char;
}
console.time('map');
console.log(calc('aaaabbaaaabbcccccccc'));
console.timeEnd('map');


let a = 3;
let b = 4;

// [a,b] = [b,a];

a = [b, b = a][0];

console.log(a,b);


function getMinus(arr){
  const result = arr.reduce((prev, next) => {
    if(next > prev.max){
      prev.max = next;
    }
    if(next < prev.min){
      prev.min = next;
    }
    return prev;
  },{min: arr[0], max: arr[0]});
  return result;
}
console.time('max');
console.log(getMinus([12,3,6,2,3,432,6]));
console.timeEnd('max');

function getM(arr){
  return Math.max(...arr) - Math.min(...arr);
}
console.time('max');
console.log(getM([12,3,6,2,3,432,6]));
console.timeEnd('max');

function mul(num){
  let result = 1;
  const helper = function(num){
    if(num){
      result *= num;
    }
    return helper;
  }
  helper.valueOf = function(){
    return result;
  }
  return helper;
}

console.log(mul(2)(4)(10).valueOf());
