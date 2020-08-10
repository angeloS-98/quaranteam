import React, { Component } from 'react';
import './stylesheet/AboutContact.css'

class AboutContact extends Component{
    render(){
        return(
            <section class="pt-3 for-footer">
                <div class="container">
                    <div class="row">
                        <div class="jumbotron col-md-7 pt-4 pb-5 bg-light">
                            <h2>About</h2>
                            <hr class="my-3" />
                            <p class="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit perferendis numquam consequuntur iure quam est beatae culpa, eaque expedita velit, eius, provident quibusdam omnis aliquid minima quo laudantium voluptates illum?</p>
                        </div>

                        <div class="col-md-1"></div>

                        <div class="jumbotron col-md-4 pt-4 pb-5 bg-light">
                            <h2>Contatti</h2>
                            <hr class="my-3" />
                            <div class="row">
                                <div class="col-6 col-md-12">
                                    <h5>Telefono: <i class="fas fa-phone pl-2"></i></h5>
                                    <p>+39 3281545782</p>
                                </div>

                                <div class="col-6 col-md-12">
                                    <h5>Email: <i class="fas fa-envelope pl-4 pl-sm-3"></i></h5>
                                    <p>supporto@info.it</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="d-block row heading">
                        <h2>TEAM</h2>
                    </div>
                    <ul class="row">
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block">
                                <figure>
                                    <img src="http://www.webcoderskull.com/img/team3.png" class="img-responsive" alt="" />
                                </figure>
                                <h3>Will</h3>
                                <p>Freelance Web Developer</p>
                                <ul class="follow-us clearfix">
                                    <li><a href="#"><i class="fab fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin fa-lg" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block">
                                <figure>
                                    <img src="http://www.webcoderskull.com/img/team1.png" class="img-responsive" alt="" />
                                </figure>
                                <h3>Kappua</h3>
                                <p>Freelance Web Developer</p>
                                <ul class="follow-us clearfix">
                                    <li><a href="#"><i class="fab fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin fa-lg" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block">
                                <figure>
                                    <img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt="" /> 
                                </figure>
                                <h3>Manish</h3>
                                <p>Freelance Web Developer</p>
                                <ul class="follow-us clearfix">
                                    <li><a href="#"><i class="fab fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin fa-lg" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="col-12 col-md-6 col-lg-3">
                            <div class="cnt-block">
                                <figure>
                                    <img src="http://www.webcoderskull.com/img/team2.png" class="img-responsive" alt="" />
                                </figure>
                                <h3>Atul</h3>
                                <p>Freelance Web Developer</p>
                                <ul class="follow-us clearfix">
                                    <li><a href="#"><i class="fab fa-facebook fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram fa-lg" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin fa-lg" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default AboutContact;