import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.less'
import TabBar from '../../components/TabBar'
import utils from '../../utils'

class Wanted extends Component {
  config = {
    navigationBarTitleText: '发布需求'
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
        发布需求
        <TabBar currPath='发布需求' />
      </View>
    )
  }
}

export default Wanted
