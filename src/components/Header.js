import React from 'react';
import './Header.css';
import {Nav,Navbar,Form,FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/logo.svg';


const Header = () => {

    return(
        <>
        
  <Navbar className="navbar" >
    <img
        src="logo.svg"
        width="70px"
        height="70px"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <Navbar.Brand href="#home">Centerl Rostering Department</Navbar.Brand>
    <Nav inline>
      <Nav.Link className="headerLink" href="#home">Roster</Nav.Link>
    </Nav>

  </Navbar>
</>
    ) 
        
}

export default Header;
