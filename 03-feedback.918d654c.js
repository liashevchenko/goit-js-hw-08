!function(){var e=document.querySelector(".feedback-form"),t=e.querySelectorAll("input, textarea");e.addEventListener("input",_.throttle((function(){var e={},r=!0,a=!1,n=void 0;try{for(var l,o=t[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){var i=l.value;e[i.name]=i.value}}catch(e){a=!0,n=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),function(){var e=localStorage.getItem("feedback-form-state");if(e)try{var r=JSON.parse(e),a=!0,n=!1,l=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var u=o.value;r.hasOwnProperty(u.name)&&(u.value=r[u.name])}}catch(e){n=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(n)throw l}}}catch(e){console.log(e.message)}}(),e.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear();var r=!0,a=!1,n=void 0;try{for(var l,o=t[Symbol.iterator]();!(r=(l=o.next()).done);r=!0){l.value.value=""}}catch(e){a=!0,n=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}}))}();
//# sourceMappingURL=03-feedback.918d654c.js.map