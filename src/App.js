import { useState } from "react"
import { MainWindow } from "./components/Window";
import { Screen } from "./components/screen";

export const App = () =>{
  const [hp_1, setHp_1] = useState(40);
  const [hp_2, setHp_2] = useState(40);
  const [send, setSend] = useState('');

  return (
    <>
        <MainWindow hp={hp_1} dispatch={setHp_1}/>
        <Screen text={send}/>
        <MainWindow hp={hp_2} dispatch={setHp_2}/>
    </>
  )
}