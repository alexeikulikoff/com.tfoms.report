/*!
* ext - v1.0.0
* 
* undefined
*
* Made by 
* Under ISC License
*/
var count = 3000;
function increment() {
    count += 1;
}

console.log(count); // 0
increment();
console.log(count); // 1
var elem = document.getElementById('demo');
elem.innerText = String(count);
//# sourceMappingURL=index.js.map
