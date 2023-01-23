import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";

function App() {
  let data = [
    {
      img: "https://news.maxabout.com/wp-content/uploads/2021/09/Apple-iPhone-13-Mini-India-jpg-1-1536x1074.jpg",
      name: "Fancy Product",
      price: "80.00",
      pricesymbol: "$",
      backslash: "-",
      oldprice: "40.00",
    },
    {
      img: "https://news.maxabout.com/wp-content/uploads/2021/09/Apple-iPhone-13-Mini-India-jpg-1-1536x1074.jpg",
      name: "Special Item",
      price: "18.00",
      pricesymbol: "$",
      backslash: "-",
      oldprice: "20.00",
    },
    {
      img: "https://news.maxabout.com/wp-content/uploads/2021/09/Apple-iPhone-13-Mini-India-jpg-1-1536x1074.jpg",
      name: "Sale Item",
      price: "25.00",
      pricesymbol: "$",
      backslash: "-",
      oldprice: "50.00",
    },
    {
      img: "https://news.maxabout.com/wp-content/uploads/2021/09/Apple-iPhone-13-Mini-India-jpg-1-1536x1074.jpg",
      name: "Popular Item",
      oldprice: "$40.00",
    },
    {
      img: "https://news.maxabout.com/wp-content/uploads/2021/09/Apple-iPhone-13-Mini-India-jpg-1-1536x1074.jpg",
      name: "Sale Item",
      price: "25.00",
      pricesymbol: "$",
      backslash: "-",
      oldprice: "50.00",
    },
    {
      img: "https://news.maxabout.com/wp-content/uploads/2021/09/Apple-iPhone-13-Mini-India-jpg-1-1536x1074.jpg",
      name: "Fancy Product",
      price: "120.00",
      pricesymbol: "$",
      backslash: "-",
      oldprice: "280.00",
    },
    {
      img: "https://news.maxabout.com/wp-content/uploads/2021/09/Apple-iPhone-13-Mini-India-jpg-1-1536x1074.jpg",
      name: "Special Item",
      price: "18.00",
      pricesymbol: "$",
      backslash: "-",
      oldprice: "20.00",
    },
    {
      img: "https://news.maxabout.com/wp-content/uploads/2021/09/Apple-iPhone-13-Mini-India-jpg-1-1536x1074.jpg",
      name: "Popular Item",
      oldprice: "$40.00",
    },
  ];

  let [cart, setcart] = useState("0")

  return (
    <div className="App">
    
      <NavDetails 
       setcart = {setcart}
      />
      <div className="container">
      {data.map((iteam,idx)=>
      (
        <CartDetails
        img = {iteam.img}
        name = {iteam.name}
        price = {iteam.price}
        pricesymbol = {iteam.pricesymbol}
        oldprice = {iteam.oldprice}
        id = {idx}
        backslash = {iteam.backslash}
        setcart = {setcart}
        />
      )
      
      )}
      </div>
      <div className="footer">
      Copyright © Your Website 2022
      </div>
    </div>
  
  );
}

export default App;

function NavDetails(props) {
  
  return (
    <div id ="key">
      <section>
        <Navbar bg="light" className="nav" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <NavDropdown title="Shop" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    All Products
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Popular Items
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    New Arrivals
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="cart"> 🛒 Cart<span className="cartvalue">{props.setcart}</span></div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <section>
        <div className="title">
          <p className="title1">Shop in style</p>
          <p className="title2">With this shop hompeage template</p>
        </div>
      </section>
    </div>
  );
}




function CartDetails(props) {

  
  let [Count, setCount] = useState(true);
  let Showclick = ()=>{
   setCount(!Count);
   cart++
   console.log(cart)

  }
  let RemoveClick = ()=>{
    setCount(!Count);
    cart--
    console.log(cart)
  }
  return (
            <Card style={{ width: "18rem" }} id = {props.id} className = "card">
              <Card.Img variant="top" src={props.img} />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                  <p>{props.star}</p>
                  <p><span>{props.pricesymbol}{props.price}</span>{props.backslash}{props.pricesymbol}{props.oldprice}</p>
                </Card.Text>
                {Count ? <button className="btn1" onClick={Showclick}>Add to Cart</button> : <button className="btn1" onClick={RemoveClick}>Remove from Cart</button>}
              </Card.Body>
            </Card>
  );
}
