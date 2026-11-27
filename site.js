if(!location.search.includes('still')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js');
addEventListener('DOMContentLoaded',()=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting||!document.documentElement.classList.contains("js"))return;const el=e.target;el.classList.add("in");
    el.querySelectorAll('[data-count]').forEach(n=>{const end=+n.dataset.count,pre=n.dataset.pre||'',suf=n.dataset.suf||'';let t0=null;
      const tick=t=>{t0=t0||t;const k=Math.min(1,(t-t0)/1200);n.textContent=pre+Math.round(end*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)});
    io.unobserve(el)}),{threshold:.15});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  const nav=document.querySelector('nav'),btn=nav&&nav.querySelector('.menu-btn'),menu=nav&&nav.querySelector('.menu .wrap');
  if(btn&&menu){
    nav.querySelectorAll('.links a:not(.pill)').forEach((a,i)=>{const c=a.cloneNode(true);c.insertAdjacentHTML('afterbegin','<span class="mono">0'+(i+1)+'</span>');menu.appendChild(c)});
    const set=o=>{nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Menu')};
    btn.addEventListener('click',()=>set(!nav.classList.contains('open')));
    menu.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
    addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){set(false);btn.focus()}});
    document.addEventListener('click',e=>{if(!nav.contains(e.target))set(false)});
    matchMedia('(min-width:861px)').addEventListener('change',e=>{if(e.matches)set(false)});
  }
  document.querySelectorAll('[data-yt]').forEach(b=>b.addEventListener('click',()=>{
    const q=new URLSearchParams({autoplay:1,rel:0});if(b.dataset.start)q.set('start',b.dataset.start);if(b.dataset.end)q.set('end',b.dataset.end);
    const m=document.createElement('div');m.className='modal';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');
    m.innerHTML='<div class="modal-box"><button class="modal-x" aria-label="Close video">×</button><iframe src="https://www.youtube-nocookie.com/embed/'+b.dataset.yt+'?'+q+'" title="Does your software know its purpose?" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>';
    const x=()=>m.querySelector('.modal-x');const keep=()=>setTimeout(()=>{if(document.activeElement&&document.activeElement.tagName==='IFRAME')x().focus()},0);
    const close=()=>{m.remove();document.body.style.overflow='';removeEventListener('keydown',esc);removeEventListener('blur',keep);b.focus()};
    const esc=e=>{if(e.key==='Escape')close()};
    m.addEventListener('click',e=>{if(e.target===m||e.target.classList.contains('modal-x'))close()});
    addEventListener('keydown',esc);addEventListener('blur',keep);document.body.style.overflow='hidden';document.body.appendChild(m);m.querySelector('.modal-x').focus()}));
});
