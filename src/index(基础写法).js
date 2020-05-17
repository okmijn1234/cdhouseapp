import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'    //加载CSS文件


let obj = { name: '张三', age: 30, sex: '男' }
let titleStr = 'xasxsaxsaxssaxasxxaasxsa'

//快速构建用户界面
//参数1： 要渲染的虚拟DOM节点  参数2： 目标容器DOM节点
ReactDOM.render(
    <div className='title'>
        <li style={{ color: 'yellow', fontSize: '25px' }}>{obj.name}</li>
        <li title={titleStr} >{obj.age}</li>
        <li>{obj.sex}</li>
        <button onMouseMove={clickBtn} >点我</button>
    </div>, document.getElementById('root'))

function clickBtn() {
    console.log('触发此函数')
}

    //vue的template和react的JSX不能放置2个兄弟元素，只能以父子的形式存在？
        //答案：因为React,Vue是模仿DOM的careateElement函数创造虚拟DOM，而此函数只支持创造一个根节点！
    // React.createElement('li',{}, 子元素)