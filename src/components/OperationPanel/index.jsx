import React, { Component } from 'react'
import './index.css'

export default class OperationPanel extends Component {
   
  timeClick = (range,i,j)=>{
    return (event)=>{
      range.active = !range.active
      // console.log(i,j,event.target,range)
      this.props.updateData(range,i,j)
    }
  }
 
  render() {
    const {week} = this.props
    // console.log(this.props)
    return (
      <div>
        {week.map((day,i) => {
          return (
            <div className='operation-content'   key={i}>
              <div className='week-day'>
                <span className='font-css'>{day.dayName}</span>
              </div>
              <ul className='content-right'>
                {day.rangeList.map((range,j) =>{
                  return(
                      <li key={j} className={range.active?'active':''} onClick={this.timeClick(range,i,j)}></li>
                  )
                })}
              </ul>
            </div>
          )
        })}

      </div>
    )
  }
}
