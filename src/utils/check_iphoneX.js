import Taro from '@tarojs/taro'

// 返回布尔值
export default function checkIphoneX() {
  return (Taro.getSystemInfoSync()).model.search('iPhone X') !== -1
}
