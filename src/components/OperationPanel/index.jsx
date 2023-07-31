import React, { Component } from 'react'
import './index.css'

export default class OperationPanel extends Component {

  isMouseDown = false //鼠标按下为true，放开为true
  startCell //开始单元格
  endCell //结束单元格

  // 鼠标按下事件
  onMouseDown = (event) => {
    this.isMouseDown = true
    this.startCell = event.target;
    this.endCell = event.target;
  }
  // 鼠标滑动事件
  onMouseMove = (event) => {
    if (this.isMouseDown) {//鼠标被按下,开始记录经过的元素
      this.endCell = event.target;
      // 将当前cell位置ij缓存在id上 eg.cell[i][j] i一位值为:0-6; j值为:0-47
      let startI = this.startCell.id.charAt(4)
      let startJ = this.startCell.id.slice(5)
      let endI = this.endCell.id.charAt(4)
      let endJ = this.endCell.id.slice(5)
      // 确定选中区域的起始行、起始列、结束行和结束列
      const startRow = Math.min(startI, endI);
      const endRow = Math.max(startI, endI);
      const startCol = Math.min(startJ, endJ);
      const endCol = Math.max(startJ, endJ);
      // 选中区域的所有单元格添加选中样式
      for (let i = startRow; i < endRow + 1; i++) {
        for (let j = startCol; j < endCol + 1; j++) {
          let range = {
            value: this.props.selectCell(j),
            active: true
          }
          this.props.updateData(range, i, j)
        }
      }
    }
  }
  //鼠标放开事件  
  onMouseUp = () => {
    this.isMouseDown = false
  }

  // 匹配鼠标经过的元素
  search = (target, allLi) => {
    var length = allLi.length;
    for (var i = 0; i < length; i++) {
      if (target === allLi[i]) {
        return target.id
      }
    }
  }

  // 点击单元格切换选中状态
  timeClick = (range, i, j) => {
    return () => {
      range.active = !range.active
      range.value = this.props.selectCell(j)
      this.props.updateData(range, i, j)
    }
  }

  render() {
    const { week } = this.props
    return (
      <div>
        {week.map((day, i) => {
          return (
            <div className='operation-content' key={i} onMouseUp={this.onMouseUp} style={{ userSelect: 'none', userDrag: 'none' }}>
              <div className='week-day'>
                <span className='font-css'>{day.dayName}</span>
              </div>
              <ul className='content-right' onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove}>
                {day.rangeList.map((range, j) => {
                  return (
                    <li key={j} id={`cell${i}${j}`} ref={c => this[`cell${i}${j}`] = c} className={range.active ? 'active' : ''}
                      onClick={this.timeClick(range, i, j)}></li>
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
