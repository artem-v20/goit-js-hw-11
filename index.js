import{a as m,S as g,i as n}from"./assets/vendor-67BWzQEt.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="51427214-d20a9ea979f3329601707c67f",y="https://pixabay.com/api/";function v(a){const s={key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(y,{params:s}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const s=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:o,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${r}" alt="${e}" />
        </a>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">Likes</span>
            <span class="value">${t}</span>
          </div>
          <div class="info-item">
            <span class="label">Views</span>
            <span class="value">${o}</span>
          </div>
          <div class="info-item">
            <span class="label">Comments</span>
            <span class="value">${d}</span>
          </div>
          <div class="info-item">
            <span class="label">Downloads</span>
            <span class="value">${f}</span>
          </div>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",s),L.refresh()}function S(){c.innerHTML=""}function w(){u.classList.add("visible")}function q(){u.classList.remove("visible")}const p=document.querySelector(".form"),l=p.elements["search-text"];p.addEventListener("submit",a=>{a.preventDefault();const s=l.value.trim();if(!s){n.warning({message:"Please enter a search term!",position:"topRight"});return}S(),w(),v(s).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(r.hits)}).catch(r=>{n.error({message:"Oops! Something went wrong.",position:"topRight"}),console.error(r)}).finally(()=>{q(),l.value=""})});
//# sourceMappingURL=index.js.map
