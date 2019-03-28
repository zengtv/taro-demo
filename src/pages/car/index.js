import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'
import TabBar from '../../components/TabBar'
import utils from '../../utils'

class Car extends Component {
  config = {
    navigationBarTitleText: '购物车'
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
        购物车
        <TabBar currPath='购物车' />
      </View>
    )
  }
}

export default Car
