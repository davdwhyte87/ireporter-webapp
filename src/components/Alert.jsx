
import React from 'react'
import { isNull } from 'util';

class Alert extends React.PureComponent{
    dismiss=(e)=>{
        e.preventDefault()
        const {onDismiss}=this.props
        if(onDismiss) onDismiss()
    }
    render(){
      if(!this.props.message){
        return ('')
      }
      let errorMessages = []
      let i = 0
      for (i; i<this.props.message.length; i++){
        errorMessages.push(this.props.message[i])
    }
    if (this.props.message.length === 0) {
      return ('')
    }
        if(!this.props.success){    
          if (typeof this.props.message === 'object') {
            return (
              <div id="errf" className="alert error alert-success alert-dismissible fade show" role="alert">
                <strong></strong> 
                <ul>
                  {errorMessages.map((message, index)=> <div key={index}>{message}</div>)}
                </ul>
              </div>
            )
        }
        return(
          <div id="errf" className="alert error alert-success alert-dismissible fade show" role="alert">
            <strong>Error!</strong> {this.props.message} 
          </div>
        )
      }
      return (
        <div id="errf" className="alert success alert-success alert-dismissible fade show" role="alert">
        <strong>Error!</strong> {this.props.message} 
        </div>
      )
    }
}

export default Alert