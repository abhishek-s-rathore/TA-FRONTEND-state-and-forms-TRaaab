import React from 'react';

class Question extends React.Component{
   constructor(props){
       super(props);
       this.state = {
              active : null,

       };
   }

   handleClick = (incId)=>{
       this.props.setQuestion(incId)
             this.setState({
                 active : this.state.active === incId ? null : incId,

             })
       }


   render(){
        console.log(this.props, "hello")
       return(
           <>/
           <article className="question">
               <div className={ this.state.active != this.props.question  ? 'questionbox' : 'questionbox  active'}>
               <h1>{this.props.ques.Q}</h1> 
               <p>
               <span onClick={()=> this.handleClick(this.props.index)}>
                   <i class="fas fa-hand-point-down"  className={this.state.active === this.props.index ? 'fas fa-hand-point-up' : 'fas fa-hand-point-down'}></i> </span>
               </p>
               </div>
              
              {
                //    this.state.active === this.props.index &&  <p className="answerbox"> {this.props.ques.A}</p>
             this.state.active !== this.props.question ?  <p className="answerbox disable"> {this.props.ques.A}</p> :  <p className="answerbox"> {this.props.ques.A}</p> 
               }
           </article>
           </>
       );

   }
}


export default Question;

