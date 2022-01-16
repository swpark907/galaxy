const moon = document.querySelector('.moon');
const body = document.querySelector('body');
moon.onclick = () => {
  body.classList.toggle('day');
  moon.classList.toggle('sun')
}
function galaxy() {
  let amountMeteor = 30;
  let amountStar = 200;
  let body = document.querySelector('body');
  let i = 0;
  let j = 0;
  while(i < amountMeteor){
    let drop = document.createElement('i');
    let size = Math.random() * 4 + 0.5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 6 + 1;

    drop.style.width = size + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = duration + 's';
    body.appendChild(drop);
    i++;
  }

  while(j < amountStar){
    let drop = document.createElement('j');
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);        
    let posY = Math.floor(Math.random() * window.innerHeight);

    drop.style.width = size + 'px';
    drop.style.height = size + 'px';
    drop.style.left = posX + 'px';
    drop.style.top = posY * 0.8 + 'px';
    
    body.appendChild(drop);
    j++;
  }
}

galaxy();