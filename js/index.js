import { algoritmoLuhn } from "./validarTarjeta.js";
import { validarFormulario } from "./validarFormulario.js";
import { dibujarTarjeta } from "./dibujarTarjeta.js";


const $inputs = document.querySelectorAll('#form input')

$inputs.forEach(input => {
    input.addEventListener('keyup', e => {validarFormulario(e)})
    input.addEventListener('keyup', e => {dibujarTarjeta(e,input)})
})

const $btnValidar = document.getElementById('btn-validar')

$btnValidar.addEventListener('click', e => {
    e.preventDefault()
    
    let numeroTarjeta = document.getElementById('number-card').value
    let bandera = false
    document.querySelectorAll('#form input').forEach(input => {
        (input.value === '')
        ? alert('Todos los campos son obligatorios')
        : bandera = true
    })

    if(bandera) algoritmoLuhn(numeroTarjeta)
})

