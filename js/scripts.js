// Modal view and simple interactions for local images
document.querySelectorAll('.btn-view').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const img = e.currentTarget.dataset.img;
    const title = e.currentTarget.dataset.title;
    const price = e.currentTarget.dataset.price;
    document.getElementById('modalImg').src = img;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalPrice').textContent = '$' + price + ' USD';
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
  });
});

document.querySelectorAll('.btn-buy').forEach(b=>b.addEventListener('click', ()=>{
  alert('Añadido al carrito (demo)');
}));

// navbar scroll effect and back to top
const nav = document.getElementById('mainNav');
const back = document.getElementById('backTop');
window.addEventListener('scroll', ()=>{
  if(window.scrollY>60) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
  if(window.scrollY>300) back.style.display='block'; else back.style.display='none';
});
back.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

// contact form demo
document.getElementById('contactForm').addEventListener('submit', e=>{ e.preventDefault(); alert('Gracias, mensaje enviado (demo).'); });
