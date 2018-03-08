/**
 * 全局函数 变量的定义
 * @param {*} Vue
 * @param {*} options
 */
export default function (Vue, options) {
    // 处理图片路径
  Vue.filter('filterImg', (img) => {
    if (typeof img !== 'string' || img.length < 1) return 'xxx.png'
    return '/src/assets/images/' + img
  })
}
