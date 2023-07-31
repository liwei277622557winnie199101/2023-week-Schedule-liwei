import React, { Component } from 'react'
import './index.css'
import Header from '../Header'
import OperationPanel from '../OperationPanel'
import DisplayPanel from '../DisplayPanel'


export default class Schedule extends Component {
  // 初始化数据
  week = [
    { dayName: "星期一", rangeList: Array.from({ length: 47 }, () => ({ active: false })) },
    { dayName: "星期二", rangeList: Array.from({ length: 47 }, () => ({ active: false })) },
    { dayName: "星期三", rangeList: Array.from({ length: 47 }, () => ({ active: false })) },
    { dayName: "星期四", rangeList: Array.from({ length: 47 }, () => ({ active: false })) },
    { dayName: "星期五", rangeList: Array.from({ length: 47 }, () => ({ active: false })) },
    { dayName: "星期六", rangeList: Array.from({ length: 47 }, () => ({ active: false })) },
    { dayName: "星期日", rangeList: Array.from({ length: 47 }, () => ({ active: false })) }
  ]
  // 设置state存储变量
  state = {
    week: JSON.parse(JSON.stringify(this.week))
  }
  // 选择单元格，点击一个格子，生产半小时段
  selectCell = (startj) => {
    let start = startj * 1
    let end = startj * 1 + 1
    const startRange = this.getTimeRange(start)
    const endRange = this.getTimeRange(end)
    return startRange + '~' + endRange

  }
  // 根据选择单元格的位置生成时间段
  getTimeRange(index) {
    const hour = Math.floor(index / 2).toString().padStart(2, '0')
    const minute = (index % 2 === 0) ? '00' : '30'
    return hour + ':' + minute
  }
  // 更新选择后的时间范围
  updateData = (dataObj, i, j) => {
    const { week } = this.state
    week[i].rangeList[j] = dataObj
    this.setState({ week })
  }
  // 清空选择，恢复初始化状态
  clearAll = () => {
    this.setState({ week: JSON.parse(JSON.stringify(this.week)) })
  }
  // 黄金时间选择
  choosePrimeTime = (type) => {
    let week = JSON.parse(JSON.stringify(this.week))
    let minI
    let maxI
    if (type === 'weekday') { //工作日早九-晚九 i的值0-4
      minI = 0
      maxI = 5
    } else {//周末早九-晚九 i的值5-6
      minI = 5
      maxI = 7
    }
    for (let i = minI; i < maxI; i++) {
      let list = week[i].rangeList
      for (let j = 18; j < 44; j++) {
        list[j] = {
          value: this.selectCell(j),
          active: true
        }
      }
    }
    this.setState({ week: [...week] })
  }
  render() {
    const { week } = this.state
    return (
      <div className='main'>
        {/* 表头 */}
        <Header />
        {/* 操作区 */}
        <OperationPanel week={week} updateData={this.updateData} selectCell={this.selectCell} />
        {/* 已选时间段 */}
        <DisplayPanel week={week} clearAll={this.clearAll} choosePrimeTime={this.choosePrimeTime} />
      </div>
    )
  }
}
