const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', scrolling);

function scrolling(){
    const trigger = window.innerHeight * (4/5); // 80% of height of viewport
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(trigger > boxTop){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    }) 
}