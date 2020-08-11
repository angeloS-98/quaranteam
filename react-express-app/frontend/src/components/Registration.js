import React, { Component } from 'react';
import $ from 'jquery';
import './stylesheet/Registration.css'

class Registration extends Component{
    componentDidMount = () => {
        $(document).ready(function(){
            let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,16})");
            let date = new Date();

            /* --- Controllo forza password --- */
            $('#inputPassword').on('keyup', function(){
                let pass = $(this).val();

                if(pass == ""){
                    $('.meter-block').css('display', 'none');
                    $('.meter-text').css('display', 'inline');
                }
                else if(regex.test(pass)){
                    if(pass.length > 12){
                        $('.strength').css('background-color', 'green');
                        $('.strength-text').html('Forte').css('color', 'green');
                    }
                    else if(pass.length > 8){
                        $('.strength').first().css('background-color', 'gold')
                        .next().css('background-color', 'gold')
                        .next().css('background-color', 'white');
                        $('.strength-text').html('Media').css('color', 'gold');
                    }
                    else if(pass.length >= 6){
                        $('.strength').first().css('background-color', 'darkorange')
                        .next().css('background-color', 'white')
                        .next().css('background-color', 'white');
                        $('.strength-text').html('Debole').css('color', 'darkorange');
                    }
                }
                else{
                    $('.meter-block').css('display', 'inline');
                    $('.meter-text').css('display', 'none');
                    $('.strength').css('background-color', 'white');
                    $('.strength-text').html('Password non valida').css('color', 'red');
                }
            });

            /* --- Visualizza/nascondi messaggio password non coincidenti --- */
            $('#inputConfirmPassword').on('keyup', function(){
                if($('#inputPassword').val() != $(this).val()){
                    $('.check').first().removeAttr('hidden');
                }
                else{
                    $('.check').first().attr('hidden', 'hidden');
                }
            });

            /* --- Visualizza/nascondi password --- */
            $('#showPass a').click(function (e) {
                e.preventDefault();
                if ($('#showPass input').attr('type') == 'text') {
                    $('#showPass input').attr('type', 'password');
                    $('#showPass i').removeClass('fa-eye');
                    $('#showPass i').addClass('fa-eye-slash');
                }
                else if ($('#showPass input').attr('type') == 'password') {
                    $('#showPass input').attr('type', 'text');
                    $('#showPass i').removeClass('fa-eye-slash');
                    $('#showPass i').addClass('fa-eye');
                }
            });

            /* --- Visualizza/nascondi conferma password --- */
            $('#showConfirm a').click(function (e) {
                e.preventDefault();
                if ($('#showConfirm input').attr('type') == 'text') {
                    $('#showConfirm input').attr('type', 'password');
                    $('#showConfirm i').removeClass('fa-eye');
                    $('#showConfirm i').addClass('fa-eye-slash');
                }
                else if ($('#showConfirm input').attr('type') == 'password') {
                    $('#showConfirm input').attr('type', 'text');
                    $('#showConfirm i').removeClass('fa-eye-slash');
                    $('#showConfirm i').addClass('fa-eye');
                }
            });

            /* --- Submit non valido in caso di password non coincidenti --- */
            $('button[type="submit"]').click(function(e){
                if($('#inputPassword').val() != $('#inputConfirmPassword').val()){
                    e.preventDefault();
                    $('#inputConfirmPassword').focus();
                    return false;
                }
                return true;
            });

            /* --- Visualizza form di registrazione host e impostazione valori obbligatori --- */
            $('button[name="host_form"]').click(function(){
                $('form').attr('action', 'host/registrazioneHost');

                $('#buttonContainer').hide("normal");

                $('#hostReg').removeAttr('hidden');
                $('#inputCity').focus();
                
                window.scrollTo({
                    top: 500,
                    left: 0,
                    behavior: 'smooth'
                });

                $('#hostReg input').attr('required', 'required');

                /* --- Minimo anno di scadenza consentito: anno corrente --- */
                let min = date.getFullYear().toString();
                $('#inputCardExpirationYear').attr('min', min);
            });

            /* --- Check sulla data di scadenza in caso di anno in corso (campo input anno) --- */
            $('#inputCardExpirationYear').change(function () {
                if($(this).val() > date.getFullYear()){
                    $('.check').last().attr('hidden', 'hidden');
                }
                else{
                    if($('#inputCardExpirationMonth').val() < parseInt(date.getMonth() + 1)) {
                        $('.check').last().removeAttr('hidden');
                    }
                }
            });

            /* --- Check sulla data di scadenza in caso di anno in corso (campo input mese) --- */
            $('#inputCardExpirationMonth').change(function () {
                if($('#inputCardExpirationYear').val() == date.getFullYear()){
                    if ($(this).val() < parseInt(date.getMonth() + 1)) {
                        $('.check').last().removeAttr('hidden');
                    }
                    else{
                        $('.check').last().attr('hidden', 'hidden');
                    }
                }
                else{
                    $('.check').last().attr('hidden', 'hidden');
                }
            });

            $('button[name="host_btn"]').click(function (e) {
                if($('.check').last().attr('hidden') != "hidden"){
                    e.preventDefault();
                    $('#inputCardExpirationMonth').focus();
                    return false;
                }
                return true;
            });

        });
    }

    render(){
        return(
            <div class="container pt-3 col-lg-8 col-md-9 col-sm-10">
                <form action="client/registrazioneClient">
            
                    <fieldset class="text-center pb-3">
                        <h1>Registrati!</h1>
                    </fieldset>
                    
                    <div class="form-group row">
                        <label for="inputName" class="col-sm-3 col-form-label">Nome *</label>
                        
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="inputName" name="name" placeholder="Mario" required />
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="inputSurname" class="col-sm-3 col-form-label">Cognome *</label>
                        
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="inputSurname" name="surname" placeholder="Rossi" required />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputEmail" class="col-sm-3 col-form-label">Email *</label>
                        
                        <div class="col-sm-9 input-group">
                            <input type="email" class="form-control" id="inputEmail" placeholder="mario.rossi@gmail.com" 
                                pattern="^[a-zA-Z][a-zA-Z0-9\.]*@[a-zA-Z\.]*\.[a-z]{2,4}" name="email" required />
                            
                            <div class="input-group-addon">
                                <span class="input-group-text h-100"><i class="fas fa-at"></i></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-3 col-form-label">Password *</label>
                        
                        <div class="col-sm-9 input-group" id="showPass">
                            <input type="password" class="form-control" id="inputPassword" minlength="6" maxlength="16" 
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{6,16}" name="password" required 
                                title="almeno una lettera, una maiusola, un numero, un carattere speciale (8-16)" />
                            
                            <div class="input-group-addon">
                                <span class="input-group-text">
                                    <a tabindex="-1" href="">
                                        <i class="fa fa-eye-slash"  title="Visualizza/nascondi password"></i>
                                    </a>
                                </span>
                            </div>
                            
                            <div class="col-sm-12 meter">
                                <div class="meter meter-block col-sm-4">
                                    <span class="strength"></span><span class="strength"></span><span class="strength"></span>
                                    
                                    <span class="strength-text">Password non valida</span>
                                </div>

                                <div class="meter meter-text col-sm-12">Deve contenere almeno una lettera, una maiuscola, un numero e un carattere speciale (6-16 caratteri)</div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputConfrimPassword" class="col-sm-3 col-form-label">Conferma password *</label>
                        
                        <div class="col-sm-9 input-group my-auto" id="showConfirm">
                            <input type="password" class="form-control" id="inputConfirmPassword" minlength="6" maxlength="16" 
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{6,16}" required />
                            
                            <div class="input-group-addon">
                                <span class="input-group-text">
                                    <a tabindex="-1" href="" title="Visualizza/nascondi password">
                                        <i class="fa fa-eye-slash"></i>
                                    </a>
                                </span>
                            </div>

                            <span class="col-sm-12 check px-0" hidden>Password non corrispondenti!</span>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" required />
                                
                                <label class="form-check-label" for="gridCheck">
                                    Accetto <a href="#" target="_blank">termini e condizioni d'uso</a> *
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">(*) Campi obbligatori</div>
                    
                    <div class="d-flex justify-content-center">
                        <div class="form-row col-12 mt-3" id="buttonContainer">
                            <div class="d-flex justify-content-center col-sm-6 col-12 mb-3 mb-sm-0">
                                <button type="submit" class="btn btn-primary" name="client_btn" value="client">Registrati come cliente</button>
                            </div>

                            <div class="d-flex justify-content-center col-sm-6 col-12 mb-3 mb-sm-0">
                                <button type="button" class="btn btn-primary" name="host_form">Registrati come host</button>
                            </div>
                        </div>
                    </div>

                    <div class=" my-3" id="hostReg" hidden>
                        <fieldset class="text-center pb-3">
                            <h2>Inserisci gli ulteriori dati richiesti..</h2>
                        </fieldset>
                        
                        <div class="form-group row">
                            <label for="inputCity" class="col-sm-3 col-form-label">Città *</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="inputCity" name="city" placeholder="Roma" />
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <label for="inputAddress" class="col-sm-3 col-form-label">Indirizzo di residenza *</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="inputAddress" name="residentialAddress" placeholder="Via Garibaldi, 23" />
                            </div>
                        </div>
                        
                        <fieldset class="text-center pb-2">
                            <h5><strong>Carta di credito</strong></h5>
                        </fieldset>
                        
                        <div class="form-group row">
                            <label for="inputCardHolder" class="col-sm-3 col-form-label">Titolare *</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="inputCardHolder"  name="cardHolder" placeholder="Mario Rossi" />
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <label for="inputCardNumber" class="col-sm-3 col-form-label">Numero carta *</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="inputCardNumber" name="cardNumber" placeholder="3200451212566993" 
                                    minlength="16" maxlength="19" pattern="[0-9]{16,19}" />
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <label for="inputCardExpirationMonth" class="col-sm-3 col-form-label">Data di scadenza *</label>
                            <div class="col-sm-9 row pr-0">
                                <div class="col-6 pr-0">
                                    <input type="number" class="form-control" id="inputCardExpirationMonth" name="cardExpirationMonth" min="1" max="12" placeholder="mese" />
                                </div>
                        
                                <div class="col-6 pr-0">
                                    <input type="number" class="form-control" id="inputCardExpirationYear" name="cardExpirationYear" placeholder="anno" />
                                </div>
                        
                                <span class="col-sm-12 check" hidden>Carta di credito scaduta!</span>
                            </div>
                        </div>

                        <div class="form-group mb-3">(*) Campi obbligatori</div>
                        
                        <div class="d-flex justify-content-center mt-3">
                            <button type="submit" class="btn btn-primary" name="host_btn" value="host">Avanti</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }             
}

export default Registration;