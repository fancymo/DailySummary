/**
 * 前端跨域之JSONP的原理及简单实现
 * https://xxxgitone.github.io/2017/07/12/%E5%89%8D%E7%AB%AF%E8%B7%A8%E5%9F%9F%E4%B9%8BJSONP%E7%9A%84%E5%8E%9F%E7%90%86%E5%8F%8A%E7%AE%80%E5%8D%95%E5%AE%9E%E7%8E%B0/
 * 可以兼容老版本，但只支持 get 请求
 */
/**
 * 获取随机字符串,用于拼接
 * @param {string} prefix [前导名字]
 * @param {number} num  [字符串长度]
 */
function getRandomName(prefix, num) {
  return prefix + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, num)
}
/**
 * 创建script标签
 * @param {请求路径} url
 */
function createScript(url) {
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', url)
  script.async = true
  return script
}
/**
 * 实现请求
 * @param {路径} url
 */
function jsonp(url) {
  return new Promise((resolve, reject) => {
    const cbName = getRandomName('callback')
    window[cbName] = function (data) {
      resolve(data)
    }
    url += url.indexOf('?') > -1 ? '&' : '?'
    const script = createScript(`${url}callback=${cbName}`)
    script.onload = function () {
      script.onload = null
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      window[cbName] = null
    }
    script.onerror = function () {
      reject()
    }
    document.getElementsByTagName('head')[0].appendChild(script)
  })
}

jsonp('http://localhost:3000').then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})
