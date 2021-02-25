import React from 'react'

// demo https://segmentfault.com/a/1190000020108840
export default class Com1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            val:''
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        setTimeout(()=>{
            this.setState({
                val:new Date().getTime()
            })
        }, 500)
    }
    

//   return  <div>{val}</div> 
    render(){
        const {val} = this.state
        return <Child val={val} getData={this.getData} />;
    }
}

class Child extends React.Component{
    
    
    
  
    render(){
        const {val} = this.props
        return <div>{val}</div>;
    }
  }