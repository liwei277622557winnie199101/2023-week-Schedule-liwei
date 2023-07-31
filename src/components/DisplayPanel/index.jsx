import React, { Component } from 'react'
import './index.css'

export default class DisplayPanel extends Component {
  // 黄金时间选择
  choosePrimeTime = (type) => {
    this.props.choosePrimeTime(type)
  }
  // 清空
  clearAll = (event) => {
    this.props.clearAll()
  }
  // 合并时间段
  mergeSelectionRanges = (sortedRanges) => {
    const mergedRanges = []
    let start = sortedRanges[0].start
    let end = sortedRanges[0].end

    for (let i = 1; i < sortedRanges.length; i++) {
      if (sortedRanges[i].start === end) {
        end = sortedRanges[i].end
      } else {
        mergedRanges.push({ start, end })
        start = sortedRanges[i].start
        end = sortedRanges[i].end
      }
    }
    mergedRanges.push({ start, end })
    return mergedRanges
  }
  render() {
    let chooseList = []
    const { week } = this.props
    // 过滤出已选时间段
    week.map(day => {
      let rangeList = day.rangeList.filter(item => item.active)
      if (rangeList.length) {
        let list = rangeList.map(rl => {
          let arr = rl.value.split('~')
          return {
            start: arr[0],
            end: arr[1]
          }
        })
        chooseList.push({
          dayName: day.dayName,
          rangeList: this.mergeSelectionRanges(list)
        })
      }
    })

    if (!chooseList.length) {
      return (
        <div>
          <div className='display-row1'>
            <div className='font-css'>可拖动鼠标选择时间段</div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='display-row1'>
            <div className='font-css'>已选择时间段</div>
            <div className='row1-btn'>
              <a onClick={() => this.choosePrimeTime('weekday')}>工作日黄金时间</a>
              <a onClick={() => this.choosePrimeTime('weekend')}>休息日黄金时间</a>
              <a onClick={this.clearAll}>清空</a>
            </div>
          </div>
          <div className='display-row2'>
            {
              chooseList.map((day, i) => {
                return (
                  <div className='display-content' key={i}>
                    <div style={{ width: 10 + '%' }}>
                      <span className='font-css'>{day.dayName}</span>
                    </div>
                    <div className='row2-right'>
                      {day.rangeList.map((range, j) => {
                        return (
                          <span key={j}>
                            {range.start}~{range.end}
                            <span style={{ display: day.rangeList.length - 1 === j ? 'none' : 'inline' }}>、</span>
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
