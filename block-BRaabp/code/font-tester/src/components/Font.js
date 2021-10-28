import React from 'react';

class Font extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message :'Almost before we knew it, we had left the ground.',
            size : '40px',
        };
    }

    render(){
        return(
            <>
            <article className='article'>
                <header className="flex justify-between align-center">
                    <div>
                    <h3>{this.props.details.family.slice(1,(this.props.details.family.indexOf(',')-1))}</h3>
                    <cite>{this.props.details.name}</cite>
                    </div>
                    <div>
                        <span>{this.props.details.styles} Styles</span>
                    </div>
                </header>
                <p style={{"font-size":this.props.specs.size, "font-family":this.props.details.family}}> {this.props.specs.message} </p>
            </article>    
            </>
        )
    }
}

export default Font;