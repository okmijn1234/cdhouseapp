// React启动入口文件
import React from 'react'   //React核心模块
import ReactDOM from 'react-dom'    //React提供的顶级DOM操作

var name = '张三'

//快速构建UI视图
//参数1： 要渲染的节点   参数2： 目标DOM容器
ReactDOM.render(<h1>姓名：{ name }</h1>, document.getElementById('root'))
// 所有JSX都需要先进行转译   
{/* <h1>xxx</h1> === React.createElement('h1',{},'xxx') */}

// //虚拟DOM： React创造的虚拟节点
// let ReactH1 = React.createElement('h1')   //虚拟DOM节点(此节点是由React创造的！！不是以前的DOM节点) 
// // 7个属性
// //DOM：传统的document对象创造的真实DOM节点
// let DomH1 = document.createElement('h1')    //创造DOM节点  289个属性

// let count = 0
// for(let key in ReactH1){
//     count++
// }
// console.log(count)
// debugger

//JSX: 在JS文件中的一个HTML标记，就是一个JSX（是一个语法糖，底层需要进行转译才能识别）