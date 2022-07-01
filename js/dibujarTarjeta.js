export const dibujarTarjeta = (e,input) => {
    switch(e.path[0].id) {
        case 'name-user':
            document.getElementById('name-user').innerHTML = `${(input.value).toUpperCase()}`   
        break;
        case 'number-card-print':
            document.getElementById('number-card').innerHTML = `${(input.value).toUpperCase()}`   
            break;
        case 'name-bank':
            document.getElementById('name-bank').innerHTML = `${(input.value).toUpperCase()}`   
            break;
        case 'month-year':
            document.getElementById('month-year').innerHTML = `${(input.value).toUpperCase()}`   
            break;
    }
}