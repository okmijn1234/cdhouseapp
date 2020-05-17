import React from 'react'
import ReactDOM from 'react-dom'

//1. 引入要渲染的自定义组件
import Hello from './Hello'




//2. 使用标签实例化组件即可
ReactDOM.render(<Hello></Hello>, 
    document.getElementById('root'))