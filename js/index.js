import { algoritmoLuhn } from "./validarTarjeta.js";
import { validarCampos } from "./validarInformacion.js";
const $form = document.getElementById('form')
const $inputs = document.querySelectorAll('#form input')

const validarFormulario = (e) => {
    switch(e.target.name) {
        case 'name-user':
            if(validarCampos.expRegNombre.test(e.target.value)){
                console.log('buena')
            }else{
                console.log('fallo')
            }

            break;
        case 'number-card':
            break;
        case 'name-bank':
            break;
        case 'month-year':
            break;
        case 'ccv':
            break;
    }
}

$inputs.forEach(input => {
    input.addEventListener('keyup', validarFormulario)
    //input.addEventListener('blur')
})

const $btnValidar = document.getElementById('btn-validar')
$btnValidar.addEventListener('click', e => {
    e.preventDefault()
    
    const numeroTarjeta = document.getElementById('number-card').value
    algoritmoLuhn(numeroTarjeta)
})

