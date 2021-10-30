import React from 'react'

class MultipleInputs extends React.Component{
    constructor(props){
            super(props);
            this.fileInput = React.createRef();
            this.state = {
                textInput: '',
                dateInput: '',
                fileInput: '',
                passwordInput: '',
                readonlyInput:'This is for reading only.',
                disabledInput: '',
                textarea: '',
                disabledTextarea: '',
            }
    }


    handleInput = ({target})=>{
        let{name, value} = target;
        this.setState({[name]: value});
    };

    handleSubmit = ()=>{
        alert(this.state.textInput + ' ' + this.state.textInput + ' ' + this.fileInput.current.files[0].name + ' ' + this.state.passwordInput + ' ' + this.state.textarea) ;
    }

    render(){
        return(
            <>
            <h1> Handling Multiple Inputs</h1>         
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="textInput">Text Input</label>
                <input value={this.state.textInput} onChange={this.handleInput} type='text' name="textInput" id="textInput" />

                <label htmlFor="dateInput">Date Input</label>
                <input value={this.state.dateInput} onChange={this.handleInput} type='date' name="dateInput" id="dateInput" />

                <label htmlFor="fileInput">File Input</label>
                <input  ref={this.fileInput} type='file' name="fileInput" id="fileInput" />

                <label htmlFor="passwordInput">Password Input</label>
                <input value={this.state.passwordInput} onChange={this.handleInput} type='password' name="passwordInput" id="passwordInput" />

                <label htmlFor="readonlyInput">Read-Only Input</label>
                <input value={this.state.readonlyInput} type='text' name="readonlyInput" id="readonlyInput"/>
                
                <label htmlFor="disabledInput">Disabled Input</label>
                <input value={this.state.disabledInput} type='text' name="disabledInput" id="disabledInput" disabled />

                <label htmlFor="textarea">Textarea</label>
                <textarea value={this.state.textarea}  onChange={this.handleInput} name="textarea" id="textarea" rows='4' ></textarea>

                <label htmlFor="disabledTextarea">Textarea Disabled</label>
                <textarea value={this.state.disabledTextarea}  onChange={this.handleInput} name="disabledTextarea" id="disabledTextarea" rows='4' disabled></textarea>

                <input value='Submit'type='submit'/>
            </form>
            </>
        );
    }
};
export default MultipleInputs;