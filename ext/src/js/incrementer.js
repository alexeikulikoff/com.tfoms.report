export let count = 81;

export function increment() {
  count += 1;

   const elem = document.getElementById("demo")	;
   elem.innerText = count;
}
