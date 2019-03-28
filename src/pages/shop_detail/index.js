import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'
import TabBar from '../../components/TabBar'
import utils from '../../utils'

class ShopDetail extends Component {
  config = {
    navigationBarTitleText: '店铺详情'
  }

  componentWillMount () {

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {

  }

  componentDidHide () { }


  render () {
    return (
      <View className='index'>
        店铺详情
        <TabBar currPath='店铺' />
      </View>
    )
  }
}

export default ShopDetail
