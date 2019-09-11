import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './main-logo.svg';
import ButtonContainer from 'q-sig-button';
import styled from 'styled-components';
import { BrowserRouter as Router } from "react-router-dom";

export default class Navbar extends Component {


    render() {

        return (
           <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
              {/*
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk
            */}
            <Router>
                <Link to='/' replace>
                    <img src={logo} alt="store" className="navbar-brand"  />
                </Link>
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link" >
                            Car Stock
                        </Link>
                    </li>
                </ul>
                {/* <Link to="/cart" className="ml-auto" replace>
                    <ButtonContainer>
                        <span className="mr-2 text-white">
                            <i className="fas fa-cart-plus"/>
                            My cart
                        </span>
                    </ButtonContainer>
                </Link> */}
            </Router>
           </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
   background: var(--mainBlue)!important;
   .nav-link {
       color: var(--mainWhite)!important;
       font-size: 1.3rem;
       text-transform: capitalize;
   }
`;