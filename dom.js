/*parentElement
lastelementchild
lastchild
createchild
firstelementchild
firstchild
nextsibling
nextelementsibling
previoussibling
previouselementsibling
createelement
setAttribute
createtesxtnode
appendchild
*/

 //parentNode
 var itemList= document.querySelector('#items');
 //console.log(itemList.parentNode);
 //itemList.parentNode.style.backgroundColor = 'pink';
 //itemList.parentNode.parentNode.style.backgroundColor= 'teal';

 //parentElement
 //console.log(itemList.parentElement);
 //itemList.parentElement.style.backgroundColor = 'pink';
 //itemList.parentNode.parentNode.style.backgroundColor= 'teal';

 //childNodes
 //console.log(itemList.childNodes);

 //firstChild
 //console.log(itemList.firstChild);

 //firstElementChild
 //console.log(itemList.firstElementChild);
 //console.log(itemList.firstElementChild.textContent= 'HEY');

 //lastChild
 //console.log(itemList.lastChild);

  //lastElementChild
 //console.log(itemList.lastElementChild);
 //console.log(itemList.lastElementChild.textContent= 'HELLOO');

 //nextSibling
 //console.log(itemList.nextSibling);
 //console.log(itemList.nextSibling.textContent= 'SIBLING');


 //nextElementSibling
 //console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

//previouselementSibling
//console.log(itemList.previouselementSibling);

//createElement
var newDiv= document.createElement('div');

//Add Class
newDiv.className= 'helloclass';

//Add id
newDiv.id= 'helloid';

//Add attribute
newDiv.setAttribute('title', 'Hello Div' );

//create text node
var newDivtext = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivtext);

var container = document.querySelector('header .container');
var h1= document.querySelector('header h1') ;
console.log(newDiv);

newDiv.style.fontSize= '30px' ;
container.insertBefore(newDiv, h1);

