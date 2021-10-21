import React from "react";
import Food from "./Food";
import data from "../data/data.json";


class Foods extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      active : '',
    }
  }

  handleClick = (cat)=>{
      this.setState({
         active : cat,
      });
  }

  render() {

    let category = data.reduce((acc, dish) => {
        if(!acc.includes(dish.category)){
               acc.push(dish.category);
        }
    return acc;
}, []);

let dishes= [];
if(!this.state.active){
    dishes = [...data];
}else{
    data.forEach(item=>{
        console.log(this.state.active, item.category);
        if(item.category === this.state.active)
           dishes.push(item);
          
    });
}

    return (
        
      <>
     <ul className="flex justify-center align-center ">
         <li onClick={()=>{this.handleClick('')}} className={this.state.active === '' ? 'active': ''} >All</li>
            {
            category.map(cat=>{
                return <li onClick={()=>{this.handleClick(cat)}} className={this.state.active === cat ? 'active': ''}> {cat[0].toUpperCase() + cat.slice(1, cat.length)} </li>
            })
  }
     </ul>

      <div className="cont flex justify-start align-start align-c-start flex-wrap">
        {dishes.map((dish) => {
          return (
            
              <Food key={dish.id} details={dish} />
           
          );
        })}
         </div>
      </>
    );
  }
}

export default Foods;
