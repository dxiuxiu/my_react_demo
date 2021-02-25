import {useState,useEffect,useCallback} from 'react'

// demo https://segmentfault.com/a/1190000020108840
export default function Hooks(){
    const [val, setVal] = useState("");

    // function getData() {
    //     setTimeout(()=>{
    //         setVal('new data '+ new Date().getTime());
    //     }, 500)
    // }
    const getData = useCallback(() => {
        setTimeout(() => {
            setVal("new data " + new Date().getTime());
        }, 500);
    }, []);

    // useEffect(()=>{
    //     getData();
    // }, []);

//   return  <div>{val}</div> 
return <Child val={val} getData={getData} />;
}

function Child({val, getData}) {
    useEffect(() => {
      getData();
    }, [getData]);
  
    return <div>{val}</div>;
  }