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
        let showResult = document.querySelector("#showResult") //muestra la validación de los datos ingresados.

        getForm.addEventListener('submit', function()
        {
            //get input ids
        let myTarjeta = document.querySelector('#Tarjeta').value;
            if (!/^([0-9])*$/.test(myTarjeta)){
                alert("El valor " + myTarjeta + " no es un número");
            }
                
        let myCVC =     document.querySelector('#CVC').value;
        let myMonto =   document.querySelector('#Monto').value;
        let myNombre =  document.querySelector('#Nombre').value;
        let myApellidos = document.querySelector('#Apellido').value;
        let myCiudad = document.querySelector('#Ciudad').value;
        
        let myProvincia = document.querySelector('#Provincia');
            let optionSelIndexValue = myProvincia.options[myProvincia.selectedIndex].value;
            let optionSelIndexText = myProvincia.options[myProvincia.selectedIndex].text;
                if(optionSelIndexValue == 0){
                    alert("Por favor seleccione una provincia");
                }else{
                    alert("Hecho! Usted a selecccionado:"+ optionSelIndexText);
                }
                
        let myZip = document.querySelector('#Zip');
        });
        

};



    