const container = document.querySelector('.hearts-container');
for (let i = 0; i < 50; i++){
    const heart = document.createElement('span');
    heart.classList.add('falling-heart1');
    heart.innerHTML = '&#128151';
      heart.style.left= Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 10) + 's';
    heart.style.fontsize = (Math.random() * 20 + 12) + 'px';

    container.appendChild(heart);
}

const containerr = document.querySelector('.hearts-container');
for (let i = 0; i < 50; i++){
    const heart = document.createElement('span');
    heart.classList.add('falling-heart2');
    heart.innerHTML = '&#128149';
  

    heart.style.left= Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.fontsize = (Math.random() * 20 + 12) + 'px';

    container.appendChild(heart);
}
  
const containerrr = document.querySelector('.hearts-container');
for (let i = 0; i < 50; i++){
    const heart = document.createElement('span');
   heart.classList.add('falling-heart3');
    heart.innerHTML = '&#128150' 
  

    heart.style.left= Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 15) + 's';
    heart.style.fontsize = (Math.random() * 20 + 12) + 'px';

    container.appendChild(heart);
}
