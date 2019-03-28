import Taro from '@tarojs/taro'
//
export default function showModal(showCancel,content) {
  const TITLE = '提示'
  const CONFIRM_COLOR = '#5BB53C'
  return Taro.showModal({
    title: TITLE,
    confirmColor: CONFIRM_COLOR,
    content,
    showCancel,
  })
}
