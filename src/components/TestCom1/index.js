import React from 'react'
import withPopWindow from '@/components/hocs/withPopWindow'
import './index.less'

function TestCom1(){
    return (
        <div className='TestCom1_container'>
           TestCom1 
        </div>
    )
}

export default withPopWindow()(TestCom1)