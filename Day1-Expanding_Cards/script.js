const cards = document.querySelectorAll('.cards');

cards.forEach( card => {
    card.addEventListener('click',() =>{
        removeActiveClasses()
        card.classList.add('active');
    })
})

function removeActiveClasses(){
    cards.forEach(card => {
        card.classList.remove('active')       
    });
}