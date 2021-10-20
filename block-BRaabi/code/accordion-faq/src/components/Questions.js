import data from "../data/data.json";
import Question from "./Question";
import React from "react";

class Questions extends React.Component{
    constructor(props){
        super(props);
        this.state={
            question:null
        }
    }
    setQuestion = (response) =>{
        this.setState({question:response})
    }
    render(){
       return(
           <>
            <h2>AltCampus FAQs</h2>
            {
                data.questions.map((ques, index) => {
                return <>
                <Question key={ques.id}  ques={ques} index={index} {...this.state} setQuestion = {(response)=>this.setQuestion(response)} />
                </>
                }
                )
            }
           </>
       );
    }
};

export default Questions;