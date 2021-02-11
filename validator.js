'use strict';
window.addEventListener('load', function () {

    let showResult = document.querySelector('#showValidationData'); //muestra la validación de los datos ingresados.
    showResult.style.display = "none";
    let advicemsg = document.querySelector('#advice') //advice validation area
    advicemsg.style.display = "none";
    let getForm = document.querySelector('#myForm'); //id formulario
    getForm.addEventListener('submit', function () {
        /******FORM => BUTTON => SUBMIT */

        /****************INPUT CARD */
        let myCard = document.querySelector('#tarjeta').value;
        let cardRegex = !/^([0-9])*$/;
        if (!cardRegex.test(myCard)) {
            alert("El valor " + myCard + " no es un número");
            document.querySelector('#advice').innerHTML = "La tarjeta es invalida";
            console.log("Tarjeta invalida");
            advicemsg.style.display = "block";
        } else {
            let vCard = document.querySelector('#vCard span');
            vCard.innerHTML = myTarjeta;
        }

        /***************INPUT CVC */
        let myCVC = document.querySelector('#cvc').value;
        let regex = /^[0-9]{3,4}$/;
        if (!regex.test(myCVC)) {
            alert('El CVC ingresado no es valido!')
            document.querySelector('#advice').innerHTML = 'Dato Invalido';
            console.log("tarjeta invalida");
            advicemsg.style.display = "block";
        } else {
            let vCVC = document.querySelector('#vCVC span');
            vCVC.innerHTML = myCVC;
        }
        /****************INPUT MOUNT */

        let myMount = document.querySelector('#monto').value;
        let mountRegex = /^[1-9]\d*(?:\.\d{9,2})?$/;
        if (!mountRegex.test(myMount)) {
            alert('El monto ingresado es invalido');
            document.querySelector('#advice').innerHTML = "Monto invalido";
            console.log("CVC incorrecto");
            advicemsg.style.display = "block";
        } else
            let vMount = document.querySelector('#vMount span');
        vMount.innerHTML = myMount;

        /****************INPUT NAME */
        let myName = document.querySelector('#nombre').value;
        let nameVal = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (!nameVal.test(myName)) {
            alert('El nombre suministrado no es valido!');
            document.querySelector('#advice').innerHTML = "Nombre Invalido";
            console.log("Nombre invalido");
            advice.style.display = "block";
        } else {
            let vName = document.querySelector('#vName span');
            vName.innerHTML = myName;

        }

        /*****************INPUT LASTNAME */
        let myLastName = document.querySelector('#apellido').value;
        let lastnameVal = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (!lastnameVal.test(myLastName)) {
            alert('Los apellidos intresados no son validos!');
            document.querySelector('#advice span').innerHTML = "Apellido Invalido";
            console.log("Nombre invalido");
            advice.style.display = "block"
        } else {
            let vLastName = document.querySelector("#vLastName span");
            vLastName.innerHTML = myLastName;
        }
        /****************INPUT CITY */
        let myCiudad = document.querySelector('#ciudad').value;
        let ciudadRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (!ciudadRegex.test('myCiudad')) {
            alert('El dato ingresado es invalido');
            document.querySelector('#advice').innerHTML = "Dato incorrecto";
            console.log("Dato suministrado incorrectamente");
            advice.style.display = "block";
        } else {
            let vCity = document.querySelector('#vCity span');
            vCity.innerHTML = myCiudad;
        }
        /*********INPUT STATE */
        let myState = document.querySelector("#state");
        let selectedValue = parseInt(myState.options[myState.selectedIndex].value);
        const vState = document.querySelector('#vState span');
        switch (selectedValue) {
            case 1:
                vState.innerHTML = "Alajuela";
                break;
            case 2:
                vState.innerHTML = "Heredia";
                break;
            case 3:
                vState.innerHTML = "Guanacaste";
                break;
            case 4:
                vState.innerHTML = "San Jose";
                break;
            case 5:
                vState.innerHTML = "Limon";
                break;
            case 6:
                vState.innerHTML = "Puntarenas";
                break;
            case 7:
                vState.innerHTML = "Cartago";
                break;
            default:
                alert('Por favor seleccione una provincia');
                break;
        }

        /****************INPUT ZIPCODE */
        let myZip = document.querySelector('#zip');
        let zipRegex = /^[0-9]+$/;
        if (myZip.length == 5 && !zipRegex.test(myZip)) {
            alert('El dato suministrado es invalido')
            document.querySelector('#advice').innerHTML = "Datos invalidos";
            console.log('Codigo Zip erroneo');
            advice.style.display = "block";
        } else {
            let vZip = document.querySelector("#vZip span");
            vZip.innerHTML = myZip;
        }

        /******CARD RADIO SELECTOR */
        const vCardSelector = document.querySelector('#vCardSelector span');
        if (document.myForm.radio1.checked) {
            vCardSelector.innerHTML = "MasterCard";
        } else if (document.myForm.radio2.checked) {
            vCardSelector.innerHTML = "Visa";
        } else if (document.myForm.radio3.checked) {
            vCardSelector.innerHTML = "Dinners";
        } else if (document.myForm.radio4.checked) {
            vCardSelector.innerHTML = "ApplePay";
        }
        /*****MESSAGE TEXT-AREA */
        let myMsgArea = document.querySelector('#messageText').value;
        let msgRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (!msgRegex.test('myMsgArea')) {
            alert('El dato ingresado es invalido');
            document.querySelector('advice').innerHTML = "Dato suministrado incorrecto";
            console.log("Dato suministrado incorrectamente");
            advice.style.display = "block";
        } else {
            let vMsgArea = document.querySelector('vMsgArea span');
            vMsgArea.innerHTML = myMsgArea;
        }

        console.log("Usuario:" + myName + " " + myLastName);
        showResult.style.display = "none";
    });

});



