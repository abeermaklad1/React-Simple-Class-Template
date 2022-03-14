import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Counter } from "./components/Counter";
import {Search} from "./components/Search";
import {lists} from "./data/lists";
import {Train} from "./components/Train";

class App extends Component {
  // let products = [
  //   { id: "1", title: "Card 1", price: "100 $", btnTitle: "Link 1" },
  //   { id: "2", title: "Card 2", price: "200 $", btnTitle: "Link 2" },
  //   { id: "3", title: "Card 3", price: "300 $", btnTitle: "Link 3" },
  //   { id: "4", title: "Card 4", price: "400 $", btnTitle: "Link 4" },
  //   { id: "5", title: "Card 5", price: "500 $", btnTitle: "Link 5" },
  //   { id: "6", title: "Card 6", price: "600 $", btnTitle: "Link 6" },
  // ];

  state = {
    inputValue: "",
  };

  holdText = (value) => {
    this.setState({
      inputValue: value
    })
  }
  searchList = () => {

  }

  render() {
    return (
      <>
        <Navbar />
        <Slider />
        {/* <div className="container bg-light my-4">
          <div className="row justify-content-center">
            {products.map((product, index) => {
              return (
                <Card
                  key={index}
                  title={product.title}
                  price={product.price}
                  btnTitle={product.btnTitle}
                />
              );
            })}
          </div>
        </div>
        <Footer /> */}
        <About />
        <Counter />
        <Train />
        {/* <Search /> */}
        <div className="container bg-light mt-4 p-4">
        <input placeholder="Search notes" className="form-control mb-5" type="text" onChange={(e) => {this.holdText(e.target.value)}} onKeyUp={this.searchList}/>
        {this.state.inputValue}
        <div className="row justify-content-center">
        {
          
           lists.map((list, index) => {
            if(list.header.toLowerCase().includes( this.state.inputValue.toLowerCase())){
              return (
                <Search
                  key={index}
                  header={list.header}
                  desc={list.desc}
                />
              );
            }
            // else {
            //    return <p className="p-5 fs-3 w-75 bg-warning m-5 rounded-2 text-center text-danger">Not Found</p>
            // }      
   

           })
           
        }
         
          </div>
        
        {/* <div className="row justify-content-center">
            {lists.map((list, index) => {
              return (
                <Search
                  key={index}
                  header={list.header}
                  desc={list.desc}
                />
              );
            })}
         </div> */}
         </div>
         <Footer /> 

         
      </>
    );
  }
  
}

export default App;




// function searchProduct(searchTerm) {
//   cartoona = ``;
//   for (var i = 0; i < productsContainer.length; i++) {
//       if (productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
//           //console.log("exsist")
//           cartoona += `<tr>
//       <td>`+ i + `</td>
//       <td>`+ productsContainer[i].name + `</td>
//       <td>`+ productsContainer[i].price + `</td>
//       <td>`+ productsContainer[i].category + `</td>
//       <td>`+ productsContainer[i].desc + `</td>
//       <td> <button class="btn btn-outline-warning">update</button></td>
//       <td> <button onClick="deleteProduct(`+ i + `)" class="btn btn-outline-danger">delete</button></td>
//   </tr>`;
//       }
//       else {
//           //console.log("not exsist")
//       }
//   }
//   document.getElementById("tableBody").innerHTML = cartoona;
// }
// <input onkeyup="searchProduct(this.value)" placeholder="search product" class="form-control w-75 m-auto" type="text" id="">
