export const algoritmoLuhn = (numeroTarjeta) => { 
       
    let arrIndicePar = numeroTarjeta.split('').filter((x,y) => (y % 2 === 0)).map(x => x * 2)
    let arrIndiceImpar = numeroTarjeta.split('').filter((x,y) => (y % 2 !== 0)).map(x => x * 1)

    arrIndicePar = sumarDosDigitos(arrIndicePar)
    arrIndiceImpar = sumarDosDigitos(arrIndiceImpar)
    
    let sumaTotal = arrIndicePar.reduce((acc,el) => acc + el,0) + arrIndiceImpar.reduce((acc,el) => acc + el,0)

    anunciarNumeroValido(sumaTotal)
}

const numeroDigitos = (numero) => { return numero.toString().length }

const sumarDosDigitos = (arr) => {
    const arrSuma = []
    arr.map(e => {          
        (numeroDigitos(e) > 1) 
        ? arrSuma.push(e.toString().split('').map(x => Number(x)).reduce((acc,el) => acc + el,0))
        : arrSuma.push(e)
    });
    return arrSuma
}

const anunciarNumeroValido = (numero) => {
    (numero % 10 === 0)
    ? alert('El número de tarjeta es válido')
    : alert('El número de tarjeta no es válido')
}