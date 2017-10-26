// 金钱+ 逗号

function formatCash(cash){
  const newCash = cash + '';
  if(typeof newCash !== 'string'){
    throw new Error('对不起，您的输入阁下实在无法转换为金钱字符串~');
  }
  return newCash.split('').reverse().reduce((prev, next, index) => {
    return ((index % 3)? next: next + ',') + prev;
  });
}

console.log(formatCash([123123213,'asdfs']));
