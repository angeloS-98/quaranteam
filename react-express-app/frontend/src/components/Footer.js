import React, { Component } from 'react';

import './stylesheet/Footer.css'

class Footer extends Component{
    render(){
        return (
          <footer className="container-fluid pt-4 px-0 mt-5 text-white">
            <div className="container-fluid text-center" id="link">
              <div className="row footer-row">
                <div className="col-md-7 mt-0">
                  <h5 className="text-uppercase">Quaranteam Project</h5>
                  <p>Tante belle cose</p>
                </div>

                <div className="col-md-3 mb-0" style={{ minHeight: "120px" }}>
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a className="footer-link" href="/about_contact">
                        Chi siamo
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="/about_contact">
                        Contatti
                      </a>
                    </li>
                    <li>
                      <a className="footer-link" href="/faq">
                        F.A.Q
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container-fluid text-center px-0" id="bg">
              <div className="row footer-row">
                <div className="col-md-5 text-md-right py-3" id="copyright">
                  © 2020 Copyright:&nbsp;
                  <a className="footer-link" href="#">
                    Quaranteam
                  </a>
                </div>

                <div className="col-md-7 py-3 px-0" id="social">
                  <div className="text-center flex-center" id="icon-box">
                    <a className="fb-ic footer-icon" href="#">
                      <i className="fab fa-facebook fa-lg white-text mr-3 mr-sm-4 mr-md-5 fa-2x">
                        {" "}
                      </i>
                    </a>

                    <a className="tw-ic footer-icon" href="#">
                      <i className="fab fa-twitter fa-lg white-text mr-3 mr-sm-4 mr-md-5 fa-2x">
                        {" "}
                      </i>
                    </a>

                    <a className="li-ic footer-icon" href="#">
                      <i className="fab fa-linkedin fa-lg white-text mr-3 mr-sm-4 mr-md-5 fa-2x">
                        {" "}
                      </i>
                    </a>

                    <a className="ins-ic footer-icon" href="#">
                      <i className="fab fa-instagram fa-lg white-text fa-2x">
                        {" "}
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;