import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'
import TabBar from '../../components/TabBar'
import utils from '../../utils'

class Personal extends Component {
  config = {
    navigationBarTitleText: '我的'
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
        我的
        <TabBar currPath='我的' />
      </View>
    )
  }
}

export default Personal
