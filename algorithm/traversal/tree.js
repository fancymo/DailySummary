const a = { val: 'a', left: null, right: null };
const b = { val: 'b', left: null, right: null };
const c = { val: 'c', left: null, right: null };
const d = { val: 'd', left: null, right: null };
const e = { val: 'e', left: null, right: null };
const f = { val: 'f', left: null, right: null };

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

module.exports = a;
