(()=>{"use strict";document.getElementById("demo-page1").innerText="Page1 + hello";var e=document.getElementById("toolbar"),n=document.createElement("button");n.innerText="Get Person",n.onclick=function(){("http://localhost:8080/getPerson",fetch("http://localhost:8080/getPerson").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){return e}))).then((function(e){console.log(e)})),console.log("click this button ")},e.appendChild(n);var t=document.createElement("button");t.innerText="Save Person",t.onclick=function(){var e,n,t;e={name:"Semaeon",surname:"Delavara"},n=function(e){return console.log(e)},(t=new XMLHttpRequest).open("POST","http://localhost:8080/savePerson",!0),n&&(t.onload=function(){n(JSON.parse(this.responseText))}),null!=e?(t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e))):t.send(),console.log("Save Person ")},e.appendChild(t),console.log("Hello World!")})();