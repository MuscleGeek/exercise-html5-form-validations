/*function formValidator(){

    if(document.myForm.ntarjeta.value == ""){
            alert("Por favor ingrese tu nombre");
            document.myForm.ntarjeta.focus();
            return false;
    }

    if(document.myForm.nCVC.value == "")
    {
        alert("Por favor ingrese el CVC de la tarjeta!");
        document.myForm.nCVC.focus();
    }
    if(document.myForm.nMonto.value == ""){

    }
}
*/
window.onload = () => {
        let getForm = document.querySelector('#myForm'); //id formulario
        let showResult = document.querySelector("#showResult"); //muestra la validación de los datos ingresados.

        getForm.addEventListener('submit', function()
        {
                            /******FORM => BUTTON => SUBMIT */

        /****************INPUT CARD */
        let myTarjeta = document.querySelector('#tarjeta').value;
            let cardRegex = !/^([0-9])*$/;
            if (!cardRegex.test(myTarjeta)){
                alert("El valor " + myTarjeta + " no es un número");
                document.querySelector(myTarjeta).focus();
            }else
            {
                alert('La tarjeta ingresada es valida');
            }

         /***************INPUT CVC */       
        let myCVC = document.querySelector('#cvc').value;
            let regex = /^[0-9]{3,4}$/;
            if(!regex.test(myCVC)){
                alert('El CVC ingresado no es valido!')
                document.querySelector('#cvc').focus();
            }else{
                alert('El CVC ingresado es valido');
            }
        /****************INPUT MOUNT */

        let myMount =   document.querySelector('#monto').value;
        /****************INPUT NAME */
            let mountRegex = /^[1-9]\d*(?:\.\d{9,2})?$/;
            if(!mountRegex.test(myMount)){
                alert('El monto ingresado es invalido');
                document.querySelector('#monto').focus();
            }else
                alert('El monto a sido validado');

        let myName =  document.querySelector('#nombre').value;
            let nameVal = /^[a-zA-Z]+ [a-zA-Z]+$/;
            if(!nameVal.test(myName)){
                alert('El nombre suministrado no es valido!');
                document.querySelector('#nombre').focus();
            }else
            {
                alert('Su nombre es valido!');
            }

        /*****************INPUT LASTNAME */
        let myApellido = document.querySelector('#apellido').value;
            let lastnameVal = /^[a-zA-Z]+ [a-zA-Z]+$/;
            if(!lastnameVal.test(myApellido)){
                alert('Los apellidos intresados no son validos!');
                document.querySelector('#apellido').focus;
            }else
            {
                alert('Los apellidos ingresados son validos!');
            }
        /****************INPUT CITY */    
        let myCiudad = document.querySelector('#Ciudad').value;
            let ciudadRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
            if(!ciudadRegex.test('myCiudad')){
                alert('El dato ingresado es invalido');
                document.querySelector('#ciudad').focus();
            }else
            {
                alert('El dato ingresado es valido');
            }
        
        let myProvincia = document.querySelector('#Provincia');
            let optionSelIndexValue = myProvincia.options[myProvincia.selectedIndex].value;
            let optionSelIndexText = myProvincia.options[myProvincia.selectedIndex].text;
                if(optionSelIndexValue == 0){
                    alert("Por favor seleccione una provincia");
                }else{
                    alert("Hecho! Usted a selecccionado:"+ optionSelIndexText);
                }
        /****************INPUT ZIPCODE */        
        let myZip = document.querySelector('#zip');
            let zipRegex = /^[0-9]+$/;
            if(myZip.length  == 5 && !zipRegex.test(myZip)){
                alert('El dato suministrado es invalido')
                document.querySelector('#zip').focus()
            }else{
                alert('El dato ingresado es valido');
            }
        });
        

};



    