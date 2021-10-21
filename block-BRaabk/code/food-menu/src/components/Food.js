function Food(props){
   return (
       <article className="flex justify-between align-start">
         <div  className="flex-38 img-container">
             <img className="full-width" src={`./assets/images/` + props.details.img} />
         </div>
         <div className="flex-60 details">

             <span>$ {props.details.price}</span>
           <h2>{props.details.title}</h2>
           <h3> {
           props.details.category[0].toUpperCase() + props.details.category.slice(1, props.details.category.length)
           }</h3>
            <p>
            {
            props.details.desc[0].toUpperCase() + props.details.desc.slice(1, props.details.desc.length)
            }
            </p>
         </div>
       </article>
   );
}

export default Food;