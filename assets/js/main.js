/* Rica Bouso Theme — Main JS */
(function(){
'use strict';
var rd=window.matchMedia('(prefers-reduced-motion:reduce)').matches;

function initReveal(){
  var els=document.querySelectorAll('[data-reveal]');
  if(!els.length)return;
  if(rd){els.forEach(function(e){e.classList.add('revealed')});return}
  var o=new IntersectionObserver(function(en){
    en.forEach(function(e){
      if(e.isIntersecting){
        var d=e.target.getAttribute('data-reveal-delay');
        if(d)e.target.style.transitionDelay=(parseInt(d,10)*100)+'ms';
        e.target.classList.add('revealed');o.unobserve(e.target);
      }
    });
  },{threshold:.15,rootMargin:'0px 0px -48px 0px'});
  els.forEach(function(e){o.observe(e)});
}

function initHero(){
  var h=document.getElementById('hero-headline');
  if(!h||rd)return;
  var t=h.textContent.trim(),w=t.split(/\s+/);
  h.innerHTML='';h.setAttribute('aria-label',t);
  w.forEach(function(word,i){
    var s=document.createElement('span');
    s.className='hero__word';s.textContent=word;
    s.style.animationDelay=(200+i*80)+'ms';
    s.setAttribute('aria-hidden','true');
    h.appendChild(s);
    if(i<w.length-1)h.appendChild(document.createTextNode(' '));
  });
}

function initHeader(){
  var hdr=document.querySelector('.header');
  if(!hdr)return;var tk=false;
  window.addEventListener('scroll',function(){
    if(!tk){requestAnimationFrame(function(){
      hdr.classList.toggle('header--scrolled',window.scrollY>100);tk=false;
    });tk=true;}
  },{passive:true});
}

function initMenu(){
  var btn=document.getElementById('menu-toggle'),ov=document.getElementById('nav-overlay');
  if(!btn||!ov)return;var op=false,sel='a[href],button:not([disabled])';
  function show(){op=true;ov.classList.add('menu--open');btn.setAttribute('aria-expanded','true');btn.setAttribute('aria-label','Close menu');document.body.style.overflow='hidden';var f=ov.querySelector(sel);if(f)f.focus()}
  function hide(){op=false;ov.classList.remove('menu--open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Menu');document.body.style.overflow='';btn.focus()}
  btn.addEventListener('click',function(){op?hide():show()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&op)hide()});
  ov.addEventListener('keydown',function(e){
    if(e.key!=='Tab'||!op)return;
    var f=ov.querySelectorAll(sel);if(!f.length)return;
    if(e.shiftKey&&document.activeElement===f[0]){e.preventDefault();f[f.length-1].focus()}
    else if(!e.shiftKey&&document.activeElement===f[f.length-1]){e.preventDefault();f[0].focus()}
  });
  ov.querySelectorAll('a').forEach(function(a){a.addEventListener('click',hide)});
}

function initDark(){
  var btn=document.getElementById('theme-toggle');
  if(!btn)return;
  btn.addEventListener('click',function(){
    var c=document.documentElement.getAttribute('data-theme');
    var n=(c==='dark')?'light':'dark';
    document.documentElement.setAttribute('data-theme',n);
    localStorage.setItem('rica-theme',n);
  });
}

function initSmooth(){
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="#"]');
    if(!a)return;var id=a.getAttribute('href');if(id==='#')return;
    var t=document.querySelector(id);if(!t)return;
    e.preventDefault();
    window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-72,behavior:rd?'auto':'smooth'});
    t.setAttribute('tabindex','-1');t.focus({preventScroll:true});
  });
}

function initCue(){
  var c=document.querySelector('.hero__scroll-cue');
  if(!c)return;var h=false;
  window.addEventListener('scroll',function(){if(!h&&window.scrollY>80){c.classList.add('hero__scroll-cue--hidden');h=true}},{passive:true});
}

document.addEventListener('DOMContentLoaded',function(){
  initHero();initReveal();initHeader();initMenu();initDark();initSmooth();initCue();
});
})();
