// const sourceData = [3, 5, 1, 2, 5, 7, 4, 3, 9, 2, 3, 2, 5, 6];
const sourceData = [3, 2, 4, 5, 1];
function generateStaticHTML(arr) {
  let str = '';
  arr.forEach((item) => {
    str = `${str}<div style="height: ${item * 10}%;">${item}</div>`;
  });
  return str;
}

// 选择排序
function* bubbleSort(arr) {
  let i, j, min;
  let tempArr = [...arr];
	let temp;
	for (i = 0; i < tempArr.length - 1; i++) {
		min = i;
		for (j = i + 1; j < tempArr.length; j++)
			if (tempArr[min] > tempArr[j])
				min = j;
    console.log(min, i);
    [tempArr[min], tempArr[i]] = [tempArr[i], tempArr[min]];
    yield tempArr;
	}
}

// 插入排序
// function* bubbleSort(arr) {
//   let i, j, temp;
//   const tempArr = [...arr];
//   for (i = 1; i < tempArr.length; i++) {
//     temp = tempArr[i];
//     j = i - 1;
//     for (; j >= 0 && tempArr[j] > temp; j--) {
//       tempArr[j + 1] = tempArr[j];
//     }
//     tempArr[j + 1] = temp;
//     yield tempArr;
//   }
// }

// 冒泡排序
// function* bubbleSort(arr) {
//   let i, j;
//   const tempArr = [...arr];
//   for (i = 0; i < tempArr.length - 1; i++)
//     for (j = 0; j < tempArr.length - 1 - i; j++)
// 			if (tempArr[j] > tempArr[j + 1]) {
// 				[tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
//         yield tempArr;
// 			}
// }

// 冒泡的变种
// function* bubbleSort(arr) {
//   const tempArr = [...arr];
//   for (let i = 0; i < tempArr.length; i++) {
//     for (let j = i + 1; j < tempArr.length; j++) {
//       if (tempArr[i] > tempArr[j]) {
//         [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
//         yield tempArr;
//       }
//     }
//   }
// }
window.onload = () => {
  const mainBox = document.getElementById('main');
  const strHTML = generateStaticHTML(sourceData);
  mainBox.innerHTML = strHTML;
  let genArr;
  document.addEventListener('click', (event) => {
    switch (event.target.id) {
      case 'bubblesort': {
        if (event.target.innerHTML === '冒泡排序(重置)') {
          mainBox.innerHTML = generateStaticHTML(sourceData);
          event.target.innerHTML = '冒泡排序';
          genArr = null;
          break;
        }
        if (!genArr) {
          genArr = bubbleSort(sourceData);  // 初始化生成器
        }
        const newArr = genArr.next().value;
        if (newArr) {
          event.target.innerHTML = '冒泡排序(下一步)';
          mainBox.innerHTML = generateStaticHTML(newArr);
        } else {
          event.target.innerHTML = '冒泡排序(重置)';
        }
        break;
      }
      case 'selectionsort': {
        // if (event.target.innerHTML.index('重置') '选择排序(重置)') {
        //   mainBox.innerHTML = generateStaticHTML(sourceData);
        //   event.target.innerHTML = '选择排序';
        //   genArr = null;
        //   break;
        // }
        // if (!genArr) {
        //   genArr = bubbleSort(sourceData);  // 初始化生成器
        // }
        // const newArr = genArr.next().value;
        // if (newArr) {
        //   event.target.innerHTML = '选择排序(下一步)';
        //   mainBox.innerHTML = generateStaticHTML(newArr);
        // } else {
        //   event.target.innerHTML = '选择排序(重置)';
        // }
        break;
      }
      default: break;
    }
  });
};
