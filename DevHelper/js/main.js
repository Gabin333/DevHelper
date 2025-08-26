// Copy button
document.querySelectorAll('.copy-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const code = btn.closest('.template-card').querySelector('.template-preview').textContent;
    navigator.clipboard.writeText(code);
    btn.textContent = '✅ Copié !';
    setTimeout(()=>btn.textContent='📋 Copier',1000);
  });
});

// Tags filter
document.querySelectorAll('.tag').forEach(tag=>{
  tag.addEventListener('click',()=>{
    document.querySelectorAll('.tag').forEach(t=>t.classList.remove('active'));
    tag.classList.add('active');
    const type = tag.textContent.trim();
    document.querySelectorAll('.template-card').forEach(card=>{
      if(card.classList.contains(type.toLowerCase()+'-template')){
        card.style.display='block';
      } else {
        card.style.display='none';
      }
    });
  });
});
// Search input filter
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase().trim();

  // Si rien n'est tapé, afficher tous les templates
  if (keyword === "") {
    document.querySelectorAll('.template-card').forEach(card => {
      card.style.display = 'block';
    });
    return;
  }

  document.querySelectorAll('.template-card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const code = card.querySelector('.template-preview').textContent.toLowerCase();

    // Vérifie si le mot-clé est dans le titre ou dans le code
    if (title.includes(keyword) || code.includes(keyword)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
