export const dibujarTarjeta = (e,input) => {
    switch(e.path[0].id) {
        case 'name-user':
            document.getElementById('name-user').textContent = `${(input.value).toUpperCase()}`   
        break;
        case 'number-card-print':
            document.getElementById('number-card').textContent = `${(input.value).toUpperCase()}`   
            break;
        case 'name-bank':
            document.getElementById('name-bank').textContent = `${(input.value).toUpperCase()}`   
            break;
        case 'month-year':
            document.getElementById('month-year').textContent = `${(input.value).toUpperCase()}`   
            break;
    }
}