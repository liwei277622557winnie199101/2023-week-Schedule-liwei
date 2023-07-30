import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    let chooseList = [
      { dayName: '星期一', rangeList: [ '00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00']},
      { dayName: '星期一', rangeList: [ '00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00']},
      { dayName: '星期一', rangeList: [ '00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00']},
      { dayName: '星期一', rangeList: [ '00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00','00:00~00:30', '00:30~01:00'] }
    ]
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
              <a>清空</a>
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
                            {range}
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
