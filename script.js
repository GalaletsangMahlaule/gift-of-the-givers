document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  if(ham){ ham.addEventListener('click', () => nav.classList.toggle('show')); }
  document.querySelectorAll('.amount-options button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.amount-options button').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      document.getElementById('selectedAmount').value = btn.dataset.amount;
    });
  });
  document.getElementById('donateForm')?.addEventListener('submit', (e) => {
    if(!document.getElementById('selectedAmount').value){ alert('Select amount'); e.preventDefault(); return; }
    if(!document.querySelector('input[name="payment"]:checked')){ alert('Select payment method'); e.preventDefault(); return; }
    alert('Demo donation received - thank you!'); e.preventDefault();
  });
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    const n=document.getElementById('cName').value.trim(), em=document.getElementById('cEmail').value.trim(), m=document.getElementById('cMessage').value.trim();
    if(n.length<2||!em.includes('@')||m.length<10){ alert('Fill all fields correctly'); e.preventDefault(); return; }
    alert('Message sent - thank you '+n); e.preventDefault();
  });
});