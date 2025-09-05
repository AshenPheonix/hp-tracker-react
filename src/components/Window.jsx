import { use, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { dropHp } from "../stores/HpSlice"

export const MainWindow = (player) => {
    const hp = useSelector(state=>state.hp[player])
    const dispatcher = useDispatch()
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
            dispatcher(dropHp({
                who: player,
                damage: staged
            }))
            setStaged(0);
        }
    },[count, player, dispatcher, staged])

    return (
        <>
            <button onClick={setDirection('-')}> - </button>
            <section> {hp} </section>
            <button onClick={setDirection('+')}> + </button>
        </>
    )
}