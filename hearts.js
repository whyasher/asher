const container = document.querySelector('.hearts-container');
for (let i = 0; i < 40; i++){
    const heart = document.createElement('span');
    heart.classList.add('falling-heart1');
    heart.innerHTML = '&#128151';

    heart.style.left= Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontsize = (Math.random() * 20 + 12) + 'px';

    container.appendChild(heart);
}