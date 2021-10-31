import React from "react";

class ShippingAdd extends React.Component{
    constructor(props){
        super(props);

    }

    handleChange=({target})=>{
        let {name, value} = target;
        this.props.handleInput(name, value);
    }

    
    render(){
        return(
            <>
            <form>
                <legend className='shLeg'>Shipping Address</legend>

                <label htmlFor="address">Address </label>
                <input value={this.props.shippingAdd.address} onChange={this.handleChange} name='address' id='address'  placeholder="e.g. Vasant Bihar"/>

                <label htmlFor="zip">ZIP/PIN Code</label>
                <input value={this.props.shippingAdd.zip} onChange={this.handleChange} name='zip' id='zip'  placeholder="e.g. 123456"/>

                <label htmlFor="city">City</label>
                <input value={this.props.shippingAdd.city} onChange={this.handleChange} name='city' id='city'  placeholder="e.g. Delhi"/>

                <label htmlFor="country">Country</label>
                <input value={this.props.shippingAdd.country} onChange={this.handleChange} name='country' id='country'  placeholder="e.g. India"/>
            </form>
            </>
        );
    }
} 


export default ShippingAdd;