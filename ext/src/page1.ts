
import _ from 'lodash';
import { Person } from './types'


function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then(data => { /* <-- data inferred as { data: T }*/
	  
      return data;
    })
}

function httpCall(method: string, url:string, data:any, callback:(result:any)=>any) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (callback) xhr.onload = function() { callback(JSON.parse(this['responseText'])); };
    if (data != null) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }
    else xhr.send();
}


const elem : HTMLElement= document.getElementById('demo-page1');
elem.innerText = 'Page1 + hello';


const toolbar : HTMLElement= document.getElementById('toolbar');
const buttonGetPerson = document.createElement('button');  
buttonGetPerson.innerText = "Get Person";  
buttonGetPerson.onclick = function() {
	
	api<Person>('http://localhost:8080/getPerson').then(resp=>{
		console.log(resp);
	});   
	
	console.log('click this button ');
	
} 
toolbar.appendChild(buttonGetPerson);

const buttonSavePerson = document.createElement('button');  
buttonSavePerson.innerText = "Save Person";  
buttonSavePerson.onclick = function() {
	
	
	const person: Person = {name:'Semaeon', surname: 'Delavara'}
	
	httpCall('POST', 'http://localhost:8080/savePerson', person,(s)=> console.log(s) )
	
	console.log('Save Person ');
	
} 
toolbar.appendChild(buttonSavePerson);


console.log("Hello World!");
