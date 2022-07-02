import Vue from 'vue'
/* 歌曲时长的过滤器 */
Vue.filter('timeFormat', function (time) {
  if (typeof time === 'undefined') return 0
  let minutes = parseInt(time / 60) // 获取时长分钟
  let seconds = parseInt(time % 60) // 获取时长秒数
  seconds = seconds < 10 ? '0' + seconds : seconds // 秒
  minutes = minutes < 10 ? '0' + minutes : minutes
  return minutes + ':' + seconds
})

/* 时间的过滤器 */
Vue.filter('dateFormat', function (time) {
  if (typeof time === 'undefined') return 0
  const t = new Date(time)
  let year = t.getFullYear()
  let mouth = t.getMonth() + 1
  let day = t.getDay()
  mouth = mouth < 10 ? '0' + mouth : mouth
  day = day < 10 ? '0' + day : day
  return year + '-' + mouth + '-' + day
})
/* 播放数量的过滤器 */
Vue.filter('countFormat', function (count) {
  if (typeof count === 'undefined') return 0
  if (count < 10000) return count
  else return Math.floor(count / 10000) + '万'
})
Vue.filter('mvTopFormat', function (index) {
  if (typeof index === 'undefined') return
  return index < 10 ? '0' + index : index
})

/* unix时间戳转换时间封装方法 */
Vue.filter('unixFormat', function (time) {
  if (typeof time === 'undefined') return 0
  const t = new Date(time)
  let year = t.getFullYear()
  let mouth = t.getMonth() + 1
  let day = t.getDate()
  mouth = mouth < 10 ? '0' + mouth : mouth
  day = day < 10 ? '0' + day : day
  return year + '-' + mouth + '-' + day
})

/* 六位数的区域代码转城市名字 */
Vue.filter('postCodeFormat', function (postCode) {
  if (typeof postCode === 'undefined') return
  let city = ''
  postCode = postCode.toString()
  switch (postCode) {
    case '110000':
      city = '北京'
      break
    case '120000':
      city = '天津'
      break
    case '130000':
      city = '河北'
      break
    case '140000':
      city = '山西'
      break

    case '150000':
      city = '内蒙古'
      break
    case '210000':
      city = '辽宁'
      break
    case '220000':
      city = '吉林'
      break
    case '230000':
      city = '黑龙江'
      break
    case '310000':
      city = '上海'
      break
    case '320000':
      city = '江苏'
      break
    case '330000':
      city = '浙江'
      break
    case '340000':
      city = '安徽'
      break
    case '350000':
      city = '福建'
      break
    case '360000':
      city = '江西'
      break
    case '370000':
      city = '山东'
      break
    case '410000':
      city = '河南'
      break
    case '420000':
      city = '湖北'
      break
    case '430000':
      city = '湖南'
      break
    case '440000':
      city = '广东'
      break
    case '450000':
      city = '广西'
      break
    case '460000':
      city = '海南'
      break
    case '500000':
      city = '重庆'
      break
    case '510000':
      city = '四川'
      break
    case '520000':
      city = '贵州'
      break
    case '530000':
      city = '云南'
      break
    case '540000':
      city = '西藏'
      break
    case '610000':
      city = '陕西'
      break
    case '620000':
      city = '甘肃'
      break
    case '630000':
      city = '青海'
      break
    case '640000':
      city = '宁夏'
      break
    case '650000':
      city = '新疆'
      break
    case '710000':
      city = '台湾'
      break
    case '810000':
      city = '香港'
      break
    case '820000':
      city = '澳门'
      break
    default:
      city = '未知'
      break
  }
  return city
})
