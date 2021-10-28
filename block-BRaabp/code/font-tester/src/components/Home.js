import Header from './Header';
import Fonts from './Fonts';
import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message :'Almost before we knew it, we had left the ground.',
            size : '36px',
            active :'',
        };
    }

    handleInput = (response)=>{
            this.setState({
                message : response,
            })
    }

    handleSize = (response)=>{
        this.setState({
            size : response,
        })
    }

    handleRes = ()=>{
        this.setState({
            message :'Almost before we knew it, we had left the ground.',
            size : '36px',
        })
    }

    handleActive = (response)=>{
        this.setState({
           active: response,
        })
    }

   render(){
       return(
           <>
            <Header specs={this.state} handleInput={(response)=>{this.handleInput(response)}} handleSize={(response)=>{this.handleSize(response)}} handleRes={()=>{this.handleRes()}} handleActive={(response)=>{this.handleActive(response)}}/>
            <Fonts  specs={this.state}/>
           </>
       );
   }
}
export default Home;