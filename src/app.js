import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import appIdObj from './app_config'
import utils from './utils'
// import z from './mixins'
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
      'pages/index/index',
      'pages/car/index',
      'pages/wanted/index',
      'pages/personal/index',
      'pages/shop_detail/index'
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
  // 遍历参数 同步存储
  _mapSetStorageSync(arr) {
    arr.forEach((item)=>{
      Taro.setStorageSync(Object.keys(item)[0],item[Object.keys(item)[0]])
    })
  }
  componentDidMount () {
    const storageInfo = [
      {ENV_TYPE: utils.getEnvType()},  // 当前运行环境 （微信/支付宝）
      {isIphoneX: utils.checkIphoneX()}
    ]
    // 检测是否是第三方
    if (typeof(Taro.getExtConfigSync())==='undefined' || !Object.keys(Taro.getExtConfigSync()).length) {
      storageInfo.push({appId: appIdObj[Taro.getEnv()]['current']}, {isExt: false})
    }else {
      const {appId, shopId, isQuickCreate} = Taro.getExtConfigSync().extConfig
      storageInfo.push({appId}, {shopId}, {isQuickCreate}, {isExt: true})
    }
    this._mapSetStorageSync(storageInfo)
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
