import React from 'react'

// demo https://segmentfault.com/a/1190000018697490?utm_source=tag-newest
export default class Com1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'name',
            content:'content'
        }
    }


    changeName=(value)=>{
        this.setState({
            name:value
        })
    }
    changeContent=(value)=>{
        this.setState({
            content:value
        })
    }
    render(){
        const {
            name,
            content
        } = this.state
        return (
            <>
              <button onClick={() => {this.changeName('名称')}}>{name}</button>
              <button onClick={() => {this.changeContent('内容')}}>{content}</button>
              <Button name={name}>123</Button>
              <div>

              </div>
            </>
        )
    }
}

class Button extends React.Component{

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.name===this.props.name){
            return false
        }
        return true
    }
    render(){
        console.log('Button','=====')
        const {name} = this.props
        return (
            <>
              <div>{name}</div>
              {/* <div>{children}</div> */}
            </>
      
        )
    }
  }