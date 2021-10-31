import BillingAdd from './BillingAdd';
import ShippingAdd from './ShippingAdd'; 
import Header from './Header';
import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
         shippingAdd:{
            address: '',
            zip: '',
            city: '',
            country: '',
         },
         billingAdd:{
            address: '',
            zip: '',
            city: '',
            country: '',
         },
         check: false,
        }
    }

    handleInput = (name, value)=>{
           
        let  newShippingAdd = {
            address: this.state.shippingAdd.address,
            zip: this.state.shippingAdd.zip,
            city: this.state.shippingAdd.city,
            country: this.state.shippingAdd.country,
        };
           for(let key in newShippingAdd){
                    if(key === name){
                        newShippingAdd[name] = value;
                    }
           }

            this.setState({
                shippingAdd : newShippingAdd,
            });
    }

    handleInput2 = (name, value)=>{
        let  newBillingAdd = {
            address: this.state.billingAdd.address,
            zip:  this.state.billingAdd.zip,
            city:  this.state.billingAdd.city,
            country: this.state.billingAdd.country,
        };

        for(let key in newBillingAdd){
            if(key === name){
                newBillingAdd[name] = value;
            }
   }

        this.setState({
            billingAdd : newBillingAdd,
        });
} 


handleUpdate = () =>{
  let  newBillingAdd = {
        address:this.state.check ? this.state.shippingAdd.address : '',
        zip: this.state.check ? this.state.shippingAdd.zip : '',
        city: this.state.check ? this.state.shippingAdd.city : '',
        country: this.state.check ? this.state.shippingAdd.country : '',
    };
    this.setState({
        billingAdd:newBillingAdd,
    })
}

handleCheckBox = async ()=>{
    await this.setState({
        check : this.state.check === true ? false : true,
    });
    this.handleUpdate();
}

    render(){
        return(
            <>
            <Header />
            <div className="div flex justify-between align-start">
            <ShippingAdd {...this.state} handleInput={(name, value)=>{this.handleInput(name, value)}} />
            <BillingAdd  {...this.state} handleInput2={(name, value)=>{this.handleInput2(name, value)}} handleCheckBox={()=>{this.handleCheckBox()}}/>
            </div>
           
            </>
        );
    }

} 


export default Home;