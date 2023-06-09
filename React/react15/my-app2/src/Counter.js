import React from "react";

export class Counter extends React.Component{
   state = {
     count: this.props.initialValue
   }
constructor(props){
    super(props)
    setInterval(()=>{
        this.setState((state)=>{
            return{
                count: state.count+this.props.incrementValue
            }
        })
    }, this.props.incrementInterval)
}

   render(){
    return(
        <div>
        <h1>Counter {this.state.count}</h1>
        </div>
    )
   }
}