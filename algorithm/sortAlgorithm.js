console.log('sort algorithm');

const bubbleSort = (array) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort([1, 7, 3, 4, 2]));
