/**
 * Holy Moly Smoke & Vape – simple JS helpers
 * - Age gate modal (21+ in US)
 * - Lazy add sticky bar visibility (already in HTML)
 */
(function(){
  // --- Age Gate ---
  function ageGate(){
    if(localStorage.getItem("hm-age-verified")==="yes") return;
    const gate=document.getElementById("ageGate");
    gate.style.display="flex";
    gate.querySelector(".yes").addEventListener("click",()=>{
      localStorage.setItem("hm-age-verified","yes");
      gate.remove();
    });
    gate.querySelector(".no").addEventListener("click",()=>window.location="https://www.responsibility.org/");
  }
  document.addEventListener("DOMContentLoaded",ageGate);
})();
