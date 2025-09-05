import { MainWindow } from "./components/Window";
import { Screen } from "./components/screen";
import store from "./stores/store";
import { Provider } from "react-redux";

export const App = () =>{

  return (
    <>
      <Provider store={store} >

        <MainWindow player='p1'/>
        <Screen/>
        <MainWindow player='p2'/>
      </Provider>
    </>
  )
}