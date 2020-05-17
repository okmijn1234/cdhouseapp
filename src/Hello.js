// 自定义组件创建
// 1. 引入核心模块
// 2. 使用class创建组件
// 3. 暴露组件给别人使用
import React from 'react'




//2. 使用class创建并继承React组件类，那么此类就变成了React的自定义组件
class Hello extends React.Component {

    //组件状态：组件内部的动态数据 (vue的data函数就类似它)
    // 完整版（比较复杂，所以后面官方推出了下面简化版）
    // constructor(){
    //     super()
    //     this.state = {

    //     }
    // }
    //简化版
    state = {
        //数据
        //key状态名： value值
        name: '张三',
        age: 18
    }



    //定义组件立马定义组件视图
    render() {
        var { name, age } = this.state

        //return的jsx就是组件的视图
        return <div>
            <label>{name}</label>
            <p>{age}</p>
            {/* 其实就是想要让函数内的this固定为我想要的this */}
            {/* 怎么办！方法1： 把函数改为箭头函数，固化this为当时的this，不乱指 */}
            {/*        方法2： 改变函数内部this指向，call， apply， bind 
                        call和apply改变this的同时会立即调用一次此函数
                            call(newthis, 参数1, 参数2, 参数3, 参数4...)
                            apply(newthis, [参数1,参数2,参数3....])
                        bind，改变this指向，不会立即调用此函数
                            bind(newthis, 参数1)
            */}
            <button onClick={this.clickFuc.bind(this)}>点我</button>
        </div>
    }

    //点击事件函数
    clickFuc(){
        //react所有状态改变，使用的都是setState函数
        //setState函数做了两件事，1： 修改state中的值   2： 通知视图重绘
        this.setState({
            //key 要修改的状态名： value 新的值
            name: '李四'
        })
        // this.state.name = '李四'

        //改变state的值！！！！ 让界面自动更新
        // console.log(this) //this为什么是Undefined？？？  this，谁调用我，我就指向谁！！
        // 实际是JS引擎监听的用户事件，调用此函数，所以在这里this指向的就是undefined
    }

}


//3. 暴露
export default Hello