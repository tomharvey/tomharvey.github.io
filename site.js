if(!location.search.includes('still')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js');
addEventListener('DOMContentLoaded',()=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting||!document.documentElement.classList.contains("js"))return;const el=e.target;el.classList.add("in");
    el.querySelectorAll('[data-count]').forEach(n=>{const end=+n.dataset.count,pre=n.dataset.pre||'',suf=n.dataset.suf||'';let t0=null;
      const tick=t=>{t0=t0||t;const k=Math.min(1,(t-t0)/1200);n.textContent=pre+Math.round(end*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)});
    io.unobserve(el)}),{threshold:.15});
  document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  document.querySelectorAll('[data-yt]').forEach(b=>b.addEventListener('click',()=>{
    const q=new URLSearchParams({autoplay:1,rel:0});if(b.dataset.start)q.set('start',b.dataset.start);if(b.dataset.end)q.set('end',b.dataset.end);
    b.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+b.dataset.yt+'?'+q+'" title="Does your software know its purpose?" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';b.style.cursor='default'},{once:true}));
});
