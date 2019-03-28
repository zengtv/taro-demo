import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

class TabBar extends Component{
  constructor(props) {
    super(props)
    this.state={
      tabBarInfo: [
        { txt: '首页', path: '/pages/index/index', className: 'item-1'},
        { txt: '店铺', path: '/pages/shop_detail/index', className: 'item-2'},
        { txt: '', path: '/pages/wanted/index', className: 'item-3'},
        { txt: '购物车', path: '/pages/car/index', className: 'item-4'},
        { txt: '我的', path: '/pages/personal/index', className: 'item-5'}
      ]
    }
  }
  clickHandler=(index,e)=> {
    e.stopPropagation()
    Taro.redirectTo({
      url: this.state.tabBarInfo[index].path
    })
  }
  componentDidMount() {

  }
  render() {
    const tabBarItem = this.state.tabBarInfo.map((value,key)=>
      <View className={`tab-nav ${this.props.currPath  === value.txt? 'active' : ''}`}
            key={key} onClick={this.clickHandler.bind(this,key)}
      >
        <View className={`icon-wrap ${value.className}`} path={value.path}> </View>
        <Text className='txt' style={key===2?'display:none':''}>{value.txt}</Text>
      </View>
    )
    return (
      <View className={`tab-bar-wrap ${Taro.getStorageSync('isIphoneX')? 'ipx': ''}`}>
        {tabBarItem}
      </View>
    )
  }
}
export default TabBar
