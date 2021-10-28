import React from 'react';

class Header extends React.Component{
      constructor(props){
               super(props);
      }

      handleSearch = (event)=>{
        this.props.handleActive(event.target.value);
    }

       handleSentence= (event)=>{
        this.props.handleInput(event.target.value);
    }

       handleRange= (event)=>{
        this.props.handleSize(`${event.target.value}px`);
    }

    handleReset = ()=>{
           this.props.handleRes();
    }



    render(){
        return(
            <>
             <header className="container">
            < div className=" header flex justify-between align-center"> 
              <div className="search flex justify-start align-center">
              
              <label htmlFor='search'><i className="fas fa-search"></i></label>
                  <input onChange={(event)=>{this.handleSearch(event)}} id="search" type="text" name="search" />
                  </div> 
              <div className="sentence flex justify-start align-center">
              <label  htmlFor='sentence'>Sentence</label>
                  <input value={this.props.specs.message}  onChange={(event)=>{this.handleSentence(event)}} id="sentence" type="text" name="sentence" />
                  </div> 
              <div className="size flex justify-start align-center">
                  <label htmlFor='range'>{this.props.specs.size}</label>
                  <input value={this.props.specs.size.slice(0, (this.props.specs.size.indexOf('p')))} onChange={(event)=>{this.handleRange(event)}} id="range" type="range" name="range" min="0" max="100" />
                  </div> 
              <div className="reset flex justify-center align-center">
                  <i onClick={()=>{this.handleReset()}} className="fas fa-redo"></i></div> 
            </div>    
             </header>    
            </>
        )
    }
}

export default Header;

/*
font-family: 'Anton', sans-serif;
font-family: 'Bonheur Royale', cursive;
font-family: 'Cairo', sans-serif;
font-family: 'Carattere', cursive;
font-family: 'Fleur De Leah', cursive;
font-family: 'Karla', sans-serif;
font-family: 'Nunito', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Rubik', sans-serif;
font-family: 'Rubik Beastly', cursive;
*/