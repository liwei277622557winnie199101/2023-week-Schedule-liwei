import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
    render() {
        const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

        return (
            <div >
                {/* 表头 */}
                <div className='header'>
                    <div className='main-header header-row1' style={{height:40+'px'}}>
                        <div className='header-legend'>
                            <span className='choose-status choose-color'></span>
                            <span className='status-text'>已选</span>
                        </div>
                        <div className='header-legend'>
                            <span className='choose-status'></span>
                            <span className='status-text'>可选</span>
                        </div>
                    </div>
                    <div className='main-header'>
                        <div className='row2-column1'>
                            <span className='font-css'>星期/时间</span>
                        </div>
                        <div className='row2-column row2-column2'>
                            <div className='time-range'>00:00 - 12:00</div>
                            <ul>
                                {
                                    list.map(n => {
                                        return <li>{n}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='row2-column'>
                            <div className='time-range'>12:00 - 24:00</div>
                            <ul>
                                {
                                    list.map(n => {
                                        return <li>{n + 12}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
