const tree = require('./tree.js');

// 深度优先遍历 - Depth-First-Search
const findPathDFS = function (node) {
  if (!node) {
    throw new Error('Empty Tree')
  }
  const stack = [];
  const result = [];
  stack.push(node);
  while (stack.length !== 0) {
    node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

console.log(findPathDFS(tree));
