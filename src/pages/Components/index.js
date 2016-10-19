import React from 'react'
import '../../styles/common.less'
import './index.less'
import Navigation from '../../components/navigation/Navigation'
import InfiniteScroll from '../../components/InfiniteScroll'
import SliderMove from '../../components/Slider/touchMove'
import ImageCard from '../../components/Slider/imageCard'
//import {ImageCard, SliderMove} from 'bdwm_components'
//alert(1111111111);

const Components = React.createClass({
  getInitialState() {
    return {
      current: '1',
    };
  },
    updateCurrent(value) {
        this.setState({current: value});
    },
  getRightContent() {
    const me = this;
    switch(me.state.current) {
        case '1':        
        let config = {
            loop: true,
            sliderWidth: '200', //document.body.clientWidth
            move: true,
            reset: this.state.isFromRefresh,
            cb: this.onlyShowShop
        };        
        if (true) {
            config.loop = true;
            config.offset = true;
            config.useButton = true;
            config.preBtnClass = 'prev-btn';
            config.nextBtnClass = 'next-btn';
            config.navigator = true;
            config.navigatorClass = 'slider-pagination';
        } else {
            config.useButton = true;
            config.preBtnClass = 'prev-btn';
            config.nextBtnClass = 'next-btn';
            config.navigator = true;
            config.navigatorClass = 'slider-pagination';
            config.move = false;
        }                   
        let mockData = [
            {image: 'https://img.waimai.baidu.com/pb/d398fd7aaff4dd6ad2fdf498cc0ebe77b2@w_750,q_75,f_webp'},
            {image: 'https://img.waimai.baidu.com/pb/d398fd7aaff4dd6ad2fdf498cc0ebe77b2@w_750,q_75,f_webp'},
            {image: 'https://img.waimai.baidu.com/pb/d398fd7aaff4dd6ad2fdf498cc0ebe77b2@w_750,q_75,f_webp'}
        ];
            return <SliderMove {...config}>
                {
                    mockData.map((item, index) => {
                        return <ImageCard item={item} key={index} index={index}/>;
                    })
                }
            </SliderMove>; break;
        case '2': return (<div><InfiniteScroll /></div>); break;
    }
  },
  render() {
    return (
        <div id="bdwm_tool">
            <div className="left">
                <Navigation getRightContent={this.updateCurrent} />
            </div>
            <div className="right">
                {this.getRightContent('1')}
            </div>
        </div>
      
    );
  }
})

export default Components