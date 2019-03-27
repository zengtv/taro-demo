import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps () {

  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>

      </View>
    )
  }
}

export default Index
