"use strict";
function filterCars() {
    const searchName = document.getElementById('search-name').value.toLowerCase();
    const searchCategory = document.getElementById('search-category').value.toLowerCase();

    const carCards = document.querySelectorAll('.card');

    carCards.forEach(card => {
        const carName = card.getAttribute('data-name').toLowerCase();
        const carCategory = card.getAttribute('data-category').toLowerCase();

        // Filtra por nombre y categoría
        if ((carName.includes(searchName) || searchName === '') && (carCategory === searchCategory || searchCategory === 'all')) {
            card.style.display = 'block';  // Muestra la tarjeta si coincide
        } else {
            card.style.display = 'none';   // Oculta la tarjeta si no coincide
        }
    });
}

function filtername() {
    const searchName = document.getElementById('search-name').value.toLowerCase();
    // const searchCategory = document.getElementById('search-category').value.toLowerCase();

    const carCards = document.querySelectorAll('.card');

    carCards.forEach(card => {
        const carName = card.getAttribute('data-name').toLowerCase();
        // const carCategory = card.getAttribute('data-category').toLowerCase();

        // Filtra por nombre 
        if (carName.includes(searchName) )  {
            card.style.display = 'block';  // Muestra la tarjeta si coincide
        } else {
            card.style.display = 'none';   // Oculta la tarjeta si no coincide
        }
    });
}

function filterCar() {
    const searchName = document.getElementById('search-name').value.toLowerCase();
    const searchCategory = document.getElementById('search-category').value.toLowerCase();
   
    const carCards = document.querySelectorAll('.car-card');
    let cont=0;

    carCards.forEach(card => {
        const carName = card.getAttribute('data-name').toLowerCase();
        const carCategory = card.getAttribute('data-category').toLowerCase();

        // Filtra por nombre y categoría
        if ((carName.includes(searchName) || searchName === '') && (carCategory === searchCategory || searchCategory === 'all')) 
            {
                cont++;
                if(cont<3){
                    card.style.width='400px'
                    card.style.display = 'block';  // Muestra la tarjeta si coincide
                }
                else{
                    card.style.display = 'block';  // Muestra la tarjeta si coincide
                }
            
           } 
        else 
        {
            card.style.display = 'none';   // Oculta la tarjeta si no coincide
        }
    });
}

function filternames() {
    const searchName = document.getElementById('search-name').value.toLowerCase();
    // const searchCategory = document.getElementById('search-category').value.toLowerCase();
    let cont=0;
    const carCards = document.querySelectorAll('.car-card');

    carCards.forEach(card => {
        const carName = card.getAttribute('data-name').toLowerCase();
        // const carCategory = card.getAttribute('data-category').toLowerCase();

        // Filtra por nombre 
        if (carName.includes(searchName) ) 
            {
                cont++;
                if(cont<3){
                    card.style.width='400px'
                    card.style.display = 'block';  // Muestra la tarjeta si coincide
                }
                else{
                    card.style.display = 'block';  // Muestra la tarjeta si coincide
                }
            
           } 
        else {
            card.style.display = 'none';   // Oculta la tarjeta si no coincide
        }
    });
}