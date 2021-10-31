import Font from './Font';
import React from 'react';
import data from '../data/data';

class Fonts extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let arr = [];
        data.forEach(elem=>{
            if(this.props.specs.active === ""){
                arr = [...data];
            }else if(elem.family.toLocaleLowerCase().includes(this.props.specs.active)){
                arr.push(elem);
            }
        });
        return(
            <>
            <div className="container flex justify-start align-center flex-wrap-yes box">
                {arr.map(font=>{
                    console.log(font);
                   return  <Font specs={this.props.specs} key={font['family']} details={font}/>   
                })}
            </div>
            </>
        )
    }
}

export default Fonts;