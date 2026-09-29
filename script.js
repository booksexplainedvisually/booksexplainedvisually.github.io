document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('[data-event]').forEach(el=>el.addEventListener('click',()=>{if(typeof gtag==='function'){gtag('event',el.dataset.event,{link_label:el.dataset.label||'',link_url:el.href||''});}}));
