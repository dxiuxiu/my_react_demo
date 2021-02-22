
import React from 'react'
import './index.scss'

const withPopWindow = ()=>(WrappedComponent)=>{
    return class extends React.Component{

        wrappedComponentClick=()=>{

        }
        
        render(){
            const mapMethodToProps={
                wrappedComponentClick:this.mapMethodToProps
            }
            return (
                <div className='withPopWindow_container'>
                    <WrappedComponent {...mapMethodToProps} {...this.props} {...this.state}/>
                    WrappedComponent
                </div>
            )
        }
    }
}

export default withPopWindow