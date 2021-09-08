import { count, increment } from './incrementer';

console.log(count); // 0
increment();
console.log(count); // 1

const elem : HTMLElement= document.getElementById('demo');
elem.innerText = String( count );

