

const ulElement = document.querySelector('ul');

for ( let index = 0 ; index < 10 ; index = index + 1){
    const liElement = document.createElement('li');
    liElement.innerHTML = index;

    ulElement.appendChild(liElement);
}







