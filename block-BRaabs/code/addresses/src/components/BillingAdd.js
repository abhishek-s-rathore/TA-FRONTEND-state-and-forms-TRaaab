import React from "react";

class BillingAdd extends React.Component{
    constructor(props){
        super(props);
    }

    handleChange=({target})=>{
        let {name, value} = target;
        this.props.handleInput2(name, value);
    }

    handleCheck =()=>{
        this.props.handleCheckBox();
    }

    render(){
        return(
            <>
             <form>
                <legend className='blLeg'>Billing Address</legend>
                
                <div className='flex justify-start align-center'>
                <input value={this.props.check} onChange={this.handleCheck} name="same" type='checkbox' id="same" />
                <label className='same' htmlFor="same">Same As Shipping Address</label>
                </div>

                <label htmlFor="address">Address </label>
                <input value={this.props.billingAdd.address} onChange={this.handleChange} name='address' id='address'  placeholder="e.g. Vasant Bihar"/>

                <label htmlFor="zip">ZIP/PIN Code</label>
                <input value={this.props.billingAdd.zip} onChange={this.handleChange} name='zip' id='zip'  placeholder="e.g. 123456"/>

                <label htmlFor="city">City</label>
                <input value={this.props.billingAdd.city} onChange={this.handleChange} name='city' id='city'  placeholder="e.g. Delhi"/>

                <label htmlFor="country">Country</label>
                <input value={this.props.billingAdd.country} onChange={this.handleChange} name='country' id='country'  placeholder="e.g. India"/>
            </form>
            </>
        );
    }

} 


export default BillingAdd;