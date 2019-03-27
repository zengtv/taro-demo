import Taro from '@tarojs/taro'
// isShortTime: 0/1 === 长提示/短提示
export default function showToast(isShortTime,title) {
  const SHORT_TIME = 1500
  const LONG_TIME = 3000
  return Taro.showToast({
    title,
    icon: 'none',
    duration: isShortTime ? SHORT_TIME : LONG_TIME,
    mask: true
  })
}
