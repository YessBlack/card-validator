import { algoritmoLuhn } from "./validarTarjeta.js";

const $btnValidar = document.getElementById('btn-validar')
$btnValidar.addEventListener('click', e => {
    e.preventDefault()
    const numeroTarjeta = document.getElementById('number-card').value
    algoritmoLuhn(numeroTarjeta)
})

