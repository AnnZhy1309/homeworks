import React from "react";
import {Todos} from "./TodoList"
import { Counter } from "./Counter";



class App extends React.Component{

  
  render(){
    return(
      <div>
         <Counter/>
      </div>
    )
  }
}

  export default App