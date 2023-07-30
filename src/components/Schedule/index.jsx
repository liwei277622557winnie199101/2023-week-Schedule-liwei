import React, { Component } from 'react'
import  './index.css'
import Header from '../Header'
import OperationPanel from '../OperationPanel'
import DisplayPanel from '../DisplayPanel'


export default class Schedule extends Component {
  // 定义数据源
  timeRange = [
    '00:00~00:30', '00:30~01:00',
    '01:00~01:30', '01:30~02:00',
    '02:00~02:30', '02:30~03:00',
    '03:00~03:30', '03:30~04:00',
    '04:00~04:30', '04:30~05:00',
    '05:00~05:30', '05:30~06:00',
    '06:00~06:30', '06:30~07:00',
    '07:00~07:30', '07:30~08:00',
    '08:00~08:30', '08:30~09:00',
    '09:00~09:30', '09:30~10:00',
    '10:00~10:30', '10:30~11:00',
    '11:00~11:30', '11:30~12:00',
    '12:00~12:30', '12:30~13:00',
    '13:00~13:30', '13:30~14:00',
    '14:00~14:30', '14:30~15:00',
    '15:00~15:30', '15:30~16:00',
    '16:00~16:30', '16:30~17:00',
    '17:00~17:30', '17:30~18:00',
    '18:00~18:30', '18:30~19:00',
    '19:00~19:30', '19:30~20:00',
    '20:00~20:30', '20:30~21:00',
    '21:00~21:30', '21:30~22:00',
    '22:00~22:30', '22:30~23:00',
    '23:00~23:30', '23:30~24:00'
  ]
  // 加上active状态
  addStatus = ()=>{
    let timeRangeList = this.timeRange.map( item =>{
      return {
        value:item,
        active:false
      }
    })
    return timeRangeList
  }
  week = [
    { dayName: "星期一", rangeList:this.addStatus() },
    { dayName: "星期二", rangeList:this.addStatus() },
    { dayName: "星期三", rangeList:this.addStatus() },
    { dayName: "星期四", rangeList:this.addStatus() },
    { dayName: "星期五", rangeList:this.addStatus() },
    { dayName: "星期六", rangeList:this.addStatus() },
    { dayName: "星期日", rangeList:this.addStatus() }
  ]
  // 设置state存储变量
  state = {
    week:JSON.parse(JSON.stringify(this.week))
  } 
  // 更新选择后的时间范围
  updateData = (dataObj,i,j) =>{
    const {week} =this.state
    week[i].rangeList[j] = dataObj
    this.setState({week})
  }
  // 清空选择，恢复初始化状态
  clearAll = () =>{
    console.log(this.week)
    this.setState({week:[...this.week]})
  }
  render() {
    const {week} =this.state
    return (
      <div className='main'>
        {/* 表头 */}
        <Header/>  
        {/* 操作区 */}
        <OperationPanel week={week} updateData={this.updateData}/>
        {/* 已选时间段 */}
        <DisplayPanel week={week} clearAll={this.clearAll}/> 
      </div>
    )
  }
}
