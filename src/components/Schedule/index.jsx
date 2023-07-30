import React, { Component } from 'react'
import  './index.css'
import Header from '../Header'
import OperationPanel from '../OperationPanel'
import DisplayPanel from '../DisplayPanel'


export default class Schedule extends Component {
  render() {
    return (
      <div className='main'>
        {/* 表头 */}
        <Header/>  
        {/* 操作区 */}
        <OperationPanel/>
        {/* 已选时间段 */}
        <DisplayPanel/> 
      </div>
    )
  }
}
