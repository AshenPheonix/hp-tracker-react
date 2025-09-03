import { useEffect, useState } from "react"

export const MainWindow = (hp, dispatch) => {
    const [staged, setStaged] = useState(0)
    const [count, setCount] = useState(0)
    
    const setDirection = (dir) =>{
        if(dir === '+'){
            setStaged(staged + 1)
        } else if (dir === '-'){
            setStaged(staged-1);
        }
        setCount(60)
    }

    useEffect(()=>{
        if (count>0) {
            setCount(count-1)        
        }
        if (count === 0) {
            dispatch(true)
        }
    },[count])

    return (
        <>
            <button onClick={setDirection('-')}> - </button>
            <section> {hp} </section>
            <button onClick={setDirection('+')}> + </button>
        </>
    )
}