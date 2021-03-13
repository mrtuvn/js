// Reduce example

const sumReduce = (numberList) => {
    return numberList.reduce((sum, number) => sum + number, 0);
}

console.log(sumReduce([1,2,3]));

console.log(!(0 < 0));

let awesome = !(0 < 0);
  if (awesome) {
      console.log('You\'re awesome too!');
  }
