import React from "react";

class Validation extends React.Component{
    constructor(props){
            super(props);
            this.state = {
                 values: { 
                    name: '',
                    username: '',
                    email:'',
                    password:'',
                    confirmPassword:'',
            },
            errors: {  
            name: '',
            username: '',
            email:'',
            password:'',
            confirmPassword:'',
    },
    }
    }

    validateEmail = (email)=> {
        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
      }

    validatePassword = (password)=>{
        const reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return reg.test(password);
    }

    validateUsername = (username)=>{
        const reg = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
        return reg.test(username);
    }

    validateConfirmPassword = ()=>{
        return (this.state.values.confirmPassword === this.state.values.password);
    }

    handleChange = ({target})=>{
            let {name, value} = target;
            let errors = this.state.errors;
            let values = this.state.values

            this.setState({
                errors,
                values,
            });

            switch(name){
                case 'name': 
                    values.name = value;
                    errors.name = value.length < 3 ? 'Name can not be smaller than 3 characters.': '';
                    break;

                    case 'username': 
                    values.username = value;
                    errors.username = this.validateUsername(value) ? '': 'Username can contain alphabets, numbers and underscore only,and it must have minimum length 8.';
                    break;    

                case 'email': 
                values.email = value;
                    errors.email = this.validateEmail(value) ? '': 'Email must contain @ and the company name.';
                    break;
                
                case 'password':
                    values.password = value;
                    errors.password = this.validatePassword(value) ? '': 'Password must contain letter, number, special charecter, and minimum length must be 8.';
                    break;
                
                case 'confirmPassword':
                    values.confirmPassword = value;
                    errors.confirmPassword = this.validateConfirmPassword() ? '':'Password must be same as above.'
                   
                    break;

                default:
                    break;
            }


            this.setState({
                values,
                errors,
            });
         
    }


    handleSubmit = ()=>{
        alert('Hey'+ " " + `${this.state.values.name} (${this.state.values.username})`  + "! " + 'You have been registered successfully!');
    }

    render(){
        let {name, username, email, password, confirmPassword} = this.state.errors;
        return(
        <>
                <form onSubmit={this.handleSubmit}>
    
                <h1>Register with us!</h1>
                
                <label htmlFor="name">Name</label>
                <input value={this.state.values.name} onChange={this.handleChange} type='text' name="name" id="name" className={name && 'error' }/>
                <span>{name}</span>

                <label htmlFor="username">Username</label>
                <input value={this.state.values.username} onChange={this.handleChange} type='text' name="username" id="username"  className={username && 'error'}/>
                <span>{username}</span>

                <label htmlFor="email">Email</label>
                <input value={this.state.values.email} onChange={this.handleChange} type='text' name="email" id="email" className={email && 'error'} />
                <span>{email}</span>

                <label htmlFor="password">Password</label>
                <input value={this.state.values.password} onChange={this.handleChange} type='password' name="password" id="password" className={password && 'error'} />
                <span>{password}</span>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input value={this.state.values.confirmPassword} onChange={this.handleChange} type='password' name="confirmPassword" id="confirmPassword" className={confirmPassword && 'error'}/>
                <span>{confirmPassword}</span>
                
                <input type='submit' value='Submit'/>
            </form>
        </>
        );
    }
}

export default Validation;