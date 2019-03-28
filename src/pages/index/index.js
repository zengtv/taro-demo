import Taro, {Component} from '@tarojs/taro'
import {View, Button, Text} from '@tarojs/components'
import './index.less'
import TabBar from '../../components/TabBar'
import utils from '../../utils'

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  btnClickHandler = () => {
    Taro.redirectTo({
      url: '/pages/car/index'
    })
  }

  componentWillMount() {
    ``
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
    Taro.getLocation().then(res => {
      console.log('location', res)
      const amapFile = require('../../utils/amap')
      let myAmapFun = new amapFile.AMapWX()
      myAmapFun.getRegeo({
        success: data => {
          console.log('locationData', data)
        }
      })
    }).catch(err => {
      console.log('定位失败', err)
    })
  }

  componentDidHide() {
  }


  render() {
    return (
      <View className='index'>
        首页
        <Button onClick={this.btnClickHandler}>按钮</Button>
        <TabBar currPath='首页'/>
      </View>
    )
  }
}

export default Index
