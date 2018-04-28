const tree = require('./tree.js');

// 广度优先遍历 - Breadth-First-Search
const findPathBFS = function (node) {
  if (!node) {
    throw new Error('Empty Tree')
  }
  const que = [];
  const result = [];
  que.push(node);
  while (que.length !== 0) {
    node = que.shift();
    result.push(node.val);
    if (node.left) que.push(node.left);
    if (node.right) que.push(node.right);
  }
  return result;
};

console.log(findPathBFS(tree));
