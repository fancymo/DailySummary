const render = function (str, data) {
  // 模板技术，其实就是特标签替换技术
  // RegExp: ? 紧跟在任何量词 *、 +、? 或 {} 的后面，将会使量词变为非贪婪
  let tpl = str.replace(/<%=([\s\S]+?)%>/g, (match, code) => {
    return `' + obj.${code}+ '`;
  });
  console.log(tpl);
  tpl = `var tpl = '${tpl}'\nreturn tpl;`;
  console.log(tpl);
  const complied = new Function('obj', tpl);
  console.log(complied.toString());
  return complied(data);
};

// with
const renderWith = function (str, data) {
  // 模板技术，其实就是特标签替换技术
  // RegExp: ? 紧跟在任何量词 *、 +、? 或 {} 的后面，将会使量词变为非贪婪
  let tpl = str.replace(/<%=([\s\S]+?)%>/g, (match, code) => {
    return `' + ${code}+ '`;
  });
  console.log(tpl);
  tpl = `tpl = '${tpl}'`;
  tpl = `var tpl = '';\nwith(obj) {${tpl}}\nreturn tpl;`;
  console.log(tpl);
  const complied = new Function('obj', tpl);

  return complied(data);
};
const tpl = 'hello, <%=name%>!<%=age%>';
console.log(renderWith(tpl, { name: 'mxl2r', age: 1 }));
