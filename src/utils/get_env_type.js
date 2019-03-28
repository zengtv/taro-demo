import Taro from "@tarojs/taro";

// 获取当前小程序运行环境
export default function getEnvType(){
  const ALIPAY = '支付宝'
  const WEAPP = '微信'
  const DEFAULT = '客户端'
  switch (Taro.getEnv()) {
    case 'ALIPAY':
      return ALIPAY
    case 'WEAPP' :
      return WEAPP
    default:
      return DEFAULT
  }
}
