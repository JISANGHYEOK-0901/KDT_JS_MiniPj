console.log("connected!")
const $circle = document.querySelector('section#circle');
const $article = $circle.querySelectorAll('article');

for( let $face of $article ) {
    $face.addEventListener('mouseenter', () =>{
        // console.log('mouse enterd!')
        $circle.setAttribute('style', 'animation-play-state: paused');
    })
    $face.addEventListener('mouseleave', () =>{
        // console.log('mouse leaved!')
        $circle.setAttribute('style', 'animation=play-state: running');
    })
}

