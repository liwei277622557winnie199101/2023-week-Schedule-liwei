import React, { Component } from 'react'
import './index.css'

export default class DisplayPanel extends Component {
  clearAll=(event)=>{
    console.log(event,this.props)
    this.props.clearAll()
  }
  render() {
    let chooseList = []
    const {week} = this.props
    // 过滤出已选时间段
    // todo:如何连续展示时间段
    week.map(day =>{
      let rangeList = day.rangeList.filter(item => item.active)
      if(rangeList.length){
        chooseList.push( {
          dayName:day.dayName,
          rangeList
        })
      }
    })
    if(!chooseList.length){
      return (
        <div>
           <div className='display-row1'>
          <div className='font-css'>可拖动鼠标选择时间段</div>
        </div>
        </div>  
      )
    }else{
      return (
        <div>
          <div className='display-row1'>
            <div className='font-css'>已选择时间段</div>
            <div className='row1-btn'>
              <a>工作日黄金时间</a>
              <a>休息日黄金时间</a>
              <a onClick={this.clearAll}>清空</a>
            </div>
          </div>
          <div className='display-row2'>
            {
              chooseList.map((day, i) => {
                return (
                  <div className='display-content' key={i}>
                    <div style={{width:10+'%'}}>
                      <span className='font-css'>{day.dayName}</span>
                    </div>
                    <div className='row2-right'>
                      {day.rangeList.map((range, j) => {
                        return (
                          <span key={j}>
                            {range.value}
                            <span style={{display:day.rangeList.length-1 === j?'none':'inline'}}>、</span>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }

  }
}
