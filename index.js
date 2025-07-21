import{a as m,S as h,i as a}from"./assets/vendor-67BWzQEt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="51427214-d20a9ea979f3329601707c67f",y="https://pixabay.com/api/";function L(n){const r={key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(y,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),S=new h(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const r=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:f,downloads:p})=>`
    <li class="gallery-item">
      <a href="${s}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p>Likes: ${t}</p>
        <p>Views: ${i}</p>
        <p>Comments: ${f}</p>
        <p>Downloads: ${p}</p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",r),S.refresh()}function v(){l.innerHTML=""}function w(){u.classList.add("hidden")}function c(){u.classList.remove("hidden")}const d=document.querySelector(".form"),q=d.elements["search-text"];d.addEventListener("submit",n=>{n.preventDefault();const r=q.value.trim();if(!r){a.warning({message:"Please enter a search term!",position:"topRight"});return}v(),w(),L(r).then(o=>{if(c(),o.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{c(),a.error({message:"Oops! Something went wrong.",position:"topRight"}),console.error(o)})});
//# sourceMappingURL=index.js.map
