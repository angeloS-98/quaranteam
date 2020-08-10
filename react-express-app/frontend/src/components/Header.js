import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './stylesheet/Header.css';

class Header extends Component{
    render(){
        return (
          <header class="fixed-top">
            <nav class="navbar navbar-dark navbar-expand-sm">
              <a class="d-none d-sm-inline-block navbar-brand" href="/">
                <i class="fas fa-hotel fa-lg"></i>
              </a>
              <span class="d-inline-block d-sm-none navbar-text text-white name-brand">
                <a href="/" style={{ textDecoration: "none" }}>
                  <strong>QuaranteamB&B</strong>
                </a>
              </span>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerBase"
                aria-controls="navbarTogglerBase"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse row mt-3 mt-sm-0"
                id="navbarTogglerBase"
              >
                <div class="col-3 col-lg-4"></div>
                <span class="d-none d-sm-flex justify-content-center navbar-text text-white col-5 col-lg-4 px-0 pr-lg-5 pl-md-4 pl-sm-3 name-brand">
                  <strong>QuaranteamB&B</strong>
                </span>

                <div class="d-flex col-12 col-sm-4 justify-content-end">
                  <Button
                    variant="outline-light" 
                    size="sm" 
                    name="sign-up_btn"
                    href="/registration"
                  >
                    Registrati
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="ml-2"
                    name="sign-in_btn"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </nav>
          </header>
        );
    }
}

export default Header;
