/*!
* ext - v1.0.0
* 
* undefined
*
* Made by 
* Under ISC License
*/
let count = 81;

function increment() {
  count += 1;

   const elem = document.getElementById("demo")	;
   elem.innerText = count;
}

console.log(count); // 0
increment();
console.log(count); // 1
//# sourceMappingURL=index.js.map
