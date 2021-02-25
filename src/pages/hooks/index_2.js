import {useState,useMemo} from 'react'

// demo https://segmentfault.com/a/1190000020108840
export default function App() {
    console.log('APP')

    const [name, setName] = useState('名称')
    const [content,setContent] = useState('内容')
    return (
        <>
          <button onClick={() => setName(new Date().getTime())}>{name}</button>
          <button onClick={() => setContent(new Date().getTime())}>{content}</button>
          <Button name={name}>{content}</Button>
        </>
    )
  }

function Button({ name, children }) {
    console.log('Button')
    function changeName(name) {
      console.log('11')
      return name
    }
  
  const otherName =  useMemo(()=>changeName(name),[name])
    return (
        <>
          <div>{otherName}</div>
          <div>{children}</div>
        </>
  
    )
  }
  