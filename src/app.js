import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import z from './mixins'
import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    // 位置相关权限声明(仅weapp生效)
    permission: {
      'scope.userLocation': {
        desc: '用途：商家能够更好地为您提供服务'
      }
    },
  }
  // 获取当前运行环境
  _getEnvType() {
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

  componentDidMount () {
    Taro.setStorageSync('ENV_TYPE',this._getEnvType())
    z.showToast(1,'测试标题').then(res=>{
      console.log('res', res)
    })
    // 检测小程序是否有新版本更新
    // if (!Taro.canIUse('getUpdateManager')) {
    //   Taro.showModal({
    //     title: '提示',
    //     confirmColor: '#5BB53C',
    //     content: `当前${ENV_TYPE}版本过低，无法使用该功能，请升级到最新${ENV_TYPE}版本后重试。`
    //   })
    // }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
