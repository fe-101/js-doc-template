/**
 * 检查数组排序的模块 {@link https://github.com/dcousens/is-sorted is-sorted GitHub Repo}.
 * @module is-sorted 
 */

// 默认比较器
function defaultComparator (a, b) {
    return a - b
  }
  
  
  /**
   * 检查数组排序
   * @param {array} array - 需要检查的数组
   * @param {function} [comparator] - 自定义比较器
   * @return {boolean} 排序是否正确
   */
  
  module.exports = function checksort (array, comparator) {
    comparator = comparator || defaultComparator
    
    for (var i = 1, length = array.length; i < length; ++i) {
      // 当前一个元素比较大的时候，数组不满足从小到大排序，返回 false
      if (comparator(array[i - 1], array[i]) > 0) return false
    }
  
    return true
  }