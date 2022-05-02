import React,{Component} from "react";
import{ useQuery,qql} from "@apollo/client";
import { graphql } from "graphql";

class ProductList extends Component{
render(){
  const data =this.props;
 
  
    return(
     
<div className="divMain">
      <div className="header"></div>
      <h1>Category</h1>
       <div className="components">
          <div className="component">
            <div className="picture">{data.picture}</div>
            <div className="title">{data.name}</div>
            <div className="price">{data.price}{data.sign}</div>
          </div> 
    
      
         </div>
</div>  
    )

    
}
}

export default ProductList;