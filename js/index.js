import { algoritmoLuhn } from "./validarTarjeta.js";
import { validarFormulario } from "./validarFormulario.js";
import { validarCampos } from "./expRegFormularios.js";
import { validarInputs } from "./validarFormulario.js";
const $inputs = document.querySelectorAll('#form input')

$inputs.forEach(input => {
    input.addEventListener('keyup', e => {validarFormulario(e)})
})

const $btnValidar = document.getElementById('btn-validar')

$btnValidar.addEventListener('click', e => {
    e.preventDefault()
    (validarInputs())
    ? algoritmoLuhn()
    : alert('Por favor, complete todos los campos')
})

