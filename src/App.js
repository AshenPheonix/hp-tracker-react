import { useEffect, useState } from "react"
import { MainWindow } from "./components/Window";
import { Screen } from "./components/screen";

export const App = () =>{
  const [hp_1, setHp_1] = useState(40);
  const [hp_2, setHp_2] = useState(40);
  const [send, setSend] = useState('');
  
  useEffect(()=>{
    if(hp_1 <= 0){
      setSend('Player 1 has sent their death to the stack')
    } else if (hp_2 <= 0) {
      setSend('Player 2 has sent their death to the stack')
    }
  },[send, hp_1, hp_2])

  return (
    <>
        <MainWindow hp={hp_1} dispatch={count => console.log(count)}/>
        <Screen text={send} dispatch={()=>setSend('')} />
        <MainWindow hp={hp_2} dispatch={count => console.log(count)}/>
    </>
  )
}