// [Smooth scroll for same-page links]
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if(target){
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

// [Dropdown toggle (Portfolio Hub)]
document.querySelectorAll('.dropdown .dropdown-toggle').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const parent = btn.closest('.dropdown');
    const wasOpen = parent.classList.contains('open');
    document.querySelectorAll('.dropdown').forEach(d=>d.classList.remove('open'));
    if(!wasOpen) parent.classList.add('open');
  });
});

// [Click outside to close dropdowns]
document.addEventListener('click', (e)=>{
  if(!e.target.closest('.dropdown')){
    document.querySelectorAll('.dropdown').forEach(d=>d.classList.remove('open'));
  }
});
