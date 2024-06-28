//Appends a section in which a ul is appended in which a li is appended (this is nested) 
let fragment=document.createDocumentFragment();
let li =fragment.appendChild(document.createElement('section')).appendChild(document.createElement('ul')).appendChild(document.createElement('li'));
li.textContent='Hello!';
document.body.append(fragment);

//appends a list in ul 
let el=document.querySelector('ul');
el.style.listStyleType = 'lower-alpha'
let fruits = ['apple','banana','mango','pineapple','tomato'];
let bgcolor = ['green','blue','yellow','purple','orange'];
let idx=0;
let fragment_2=document.createDocumentFragment();
fruits.forEach((fruit)=>{
    let li=document.createElement('li');
    li.textContent=fruit;
    li.style.backgroundColor = bgcolor[idx];
    fragment_2.appendChild(li);
    idx++;
});
el.append(fragment_2);

//appends a paragraph and sets/displays its attributes such as class,id
let p = document.createElement('p');
p.setAttribute('class','paragraph');
p.setAttribute('id','paragraph');
console.log(p.getAttribute('id'));
p.textContent='This is a paragraph';
el.after(p);

//appendChild returns a value and only accepts objects. Only one object can be appended at once
//appends doesn't return a value and accepts both objects and strings. Many objects/strings can be appended at once