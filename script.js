const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

function wireForm(id){
  const form = document.getElementById(id);
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      alert("Email invalide. Merci de vérifier.");
      return;
    }
    try{
      // TODO: Remplacer par votre webhook (Typeform/Tally/Airtable/Netlify)
      const existing = JSON.parse(localStorage.getItem('autorepurpose_waitlist')||'[]');
      if(!existing.includes(email)){
        existing.push(email);
        localStorage.setItem('autorepurpose_waitlist', JSON.stringify(existing));
      }
      form.innerHTML = '<span class="ok">Merci ! Vous êtes inscrit(e). Nous vous contacterons très vite.</span>';
    }catch(err){
      console.error(err);
      alert("Une erreur est survenue. Réessayez plus tard.");
    }
  });
}
wireForm('lead-form');
wireForm('lead-form-cta');
