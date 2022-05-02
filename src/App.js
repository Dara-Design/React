import './App.css';

import React,{Component} from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

useQuery,
 gql
} from "@apollo/client";

import ProductList  from './components/ProductList';

import {LOAD_PRODUCTS} from "./GraphQL/Queries";


const{category}=LOAD_PRODUCTS;
const {products}=category;

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

class App extends Component{
  render(){
    console.log(category);
    console.log(products);
    return(

    

      <ApolloProvider  client={client}>
         
      {products.map(product =>
        (
          <ProductList
          key ={product.id}
          name ={product.name}
          picture  ={product.gallery[0]}
          price  ={product.prices[0].amount}
          sign= {product.prices[0].currency.label}
          
          ></ProductList>
        ))}
      </ApolloProvider>
     
    )
  }
}

export default App;
