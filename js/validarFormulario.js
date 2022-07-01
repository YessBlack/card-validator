import { validarCampos } from "./expRegFormularios.js";

export const validarFormulario = (e) => {        
    switch(e.target.name) {
        case 'name-user':
            if(validarCampos.expRegNombre.test(e.target.value)){
                document.getElementById('name-user').classList.add('valid')
                document.getElementById('name-user').classList.remove('invalid')
            }else{
                document.getElementById('name-user').classList.add('invalid')
                document.getElementById('name-user').classList.remove('valid')
            }
            break;  
        case 'number-card':
            if(validarCampos.expRegNumero.test(e.target.value)){
                document.getElementById('number-card').classList.add('valid')
                document.getElementById('number-card').classList.remove('invalid')
            }else{
                document.getElementById('number-card').classList.add('invalid')
                document.getElementById('number-card').classList.remove('valid')
            }
            break;
        case 'name-bank':
            if(validarCampos.expRegNombre.test(e.target.value)){
                document.getElementById('name-bank').classList.add('valid')
                document.getElementById('name-bank').classList.remove('invalid')
            }else{
                document.getElementById('name-bank').classList.add('invalid')
                document.getElementById('name-bank').classList.remove('valid')
            }
            break;
        case 'month-year':
            if(validarCampos.expRegMMAAAA.test(e.target.value)){
                document.getElementById('month-year').classList.add('valid')
                document.getElementById('month-year').classList.remove('invalid')
            }else{
                document.getElementById('month-year').classList.add('invalid')
                document.getElementById('month-year').classList.remove('valid')
            }
            break;
        case 'ccv':
            if(validarCampos.expRegCVV.test(e.target.value)){
                document.getElementById('ccv').classList.add('valid')
                document.getElementById('ccv').classList.remove('invalid')
            }else{
                document.getElementById('ccv').classList.add('invalid')
                document.getElementById('ccv').classList.remove('valid')
            }
            break;
    }
}

export const validarInputs = () => {
    bandera = false
    const $inputs = document.querySelectorAll('#form input')
    $inputs.forEach(input => {
        console.log(input.value)
        (input.validarCampos.expRegNombre.test(input.value))
        ? bandera = true
        : bandera = false
    })
}