var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click', removeAllItems);

//Adds the text on the input as a todo
function addItem(){
    //Get the text from the input
    var item = document.getElementById('input').value;
    var textNode = document.createTextNode(item);

    //If they haven't entered anything, give a prompt
    if(item === ''){
        var print = document.createElement('p');
        var value = document.createTextNode('Enter your todo');
        print.appendChild(value);
        document.querySelector('p').appendChild(print);
        return false;
    }
    //Else create a list item
    else{
        //Make the list item a checkbox
        li = document.createElement('li');
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //Create the label
        var label = document.createElement('label');
        label.setAttribute('for', 'item');  //Optional (does nothing?)

        //Add checkbox to webpage
        li.appendChild(checkbox);
        //Put the textNode into the label
        label.appendChild(textNode);
        li.appendChild(label);
        //Insert the new todo at the top of the list
        ul.insertBefore(li, ul.childNodes[0]);
        
        // setTimeout(() => {
        //     li.className = 'visual';
        // }, 10000);

        //Clear the input
        document.getElementById('input').value = '';
    }
}

//Removes all checked todos
function removeItem(){
    li = ul.children;
    //loop through all todos
    for(let i = 0; i < li.length; i++){
        //Remove only the ones which are checked
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i]);
        }
    }
}

//Removes all todos
function removeAllItems(){
    li = ul.children
    //loop through all todos
    for(let i = 0; i < li.length; i++){
        //Remove all
        while(li[i]){
            ul.removeChild(li[i]);
        }
    }
}