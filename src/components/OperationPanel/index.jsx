import React, { Component } from 'react'
import './index.css'

export default class OperationPanel extends Component {
  flag = false //当鼠标被按下时，为true,放开是为true
  indexs = [] //用来存放鼠标经过的单元格在整个表格的位置，鼠标按下时被初始化，
    // 鼠标按下事件
  onMouseDown =() =>{
      this.flag = true;
      this.indexs = [];
  }
  onMouseMove =  (e)=> {
    // console.log(e)
    if (this.flag)//只有鼠标被按下时，才会执行复合代码
    {   
      // console.log(this)
    
        this.indexs.push(this.search(e.target, document.getElementsByTagName("li")))
    }
 }
 onMouseUp =() =>{
    
    // 去重
    this.indexs = [...new Set(this.indexs)] 
    //去掉undefined
    this.indexs =  this.indexs.filter(item => item)
    
    this.indexs.map(ref =>{
      console.log(ref)
      this[ref].className = 'active'
    })
 }
 search =(a, A)=> {
  // console.log(a,A)
    var length = A.length;
    for (var i = 0; i < length; i++) {
        if (a === A[i]) {
            return a.id;
        }
    }
  }
  // 点击单元格切换选中状态
  timeClick = (range,i,j)=>{
    return (event)=>{
      range.active = !range.active
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
            <div className='operation-content'   key={i} onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp}>
              <div className='week-day'>
                <span className='font-css' style={{userSelect:'none'}}>{day.dayName}</span>
              </div>
              <ul className='content-right'>
                {day.rangeList.map((range,j) =>{  
                  return(
                      <li key={j} id={`cell${i}${j}`} ref={c => this[`cell${i}${j}`] = c } className={range.active?'active':''} onClick={this.timeClick(range,i,j)}></li>
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
