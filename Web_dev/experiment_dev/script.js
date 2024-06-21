let a = document.getElementById('slide');
let b = document.getElementById('button');

a.addEventListener("click",myfun);
function myfun(){
    const c = document.createElement(b);
    
    a.appendChild(c);
    a.appendChild(c);
}