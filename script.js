const btn = document.querySelector('.btn');

btn.addEventListener('mouseover',(dets)=>{
  const x = (dets.clientX - btn.offsetLeft);
  const y = (dets.clientY - btn.offsetTop);
  btn.style.setProperty('--xPos',x + 'px');
  btn.style.setProperty('--yPos',y + 'px');
})