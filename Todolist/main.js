const lists = ['First', 'Second', 'Third'];
const text = document.querySelector('#text');
const inputname = document.querySelector('#input1');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
inputname.addEventListener('submit', onSubmit);
let i = 0;

for (i = 0; i < lists.length; i++) {
    console.log(` lists ${i + 1}: ${lists[i]}`);
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "check";
    const li = document.createElement('li');
    const li1 = document.createElement('li');
    li.id = i;
    const deletebutton = document.createElement('button');
    deletebutton.type = "button";
    // deletebutton.name = "name";
    deletebutton.value = lists[i];
    deletebutton.id = i;
    deletebutton.className = "dbtn";
    deletebutton.appendChild(document.createTextNode(`X`));
    li1.appendChild(document.createTextNode(`${lists[i]}`));
    li.appendChild(li1);
    li.appendChild(checkbox);
    li.appendChild(deletebutton)
    // userList.appendChild(checkbox);
    userList.appendChild(li);
    // userList.appendChild(deletebutton);
    deletebutton.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById(deletebutton.id).remove();
        Index=lists.indexOf(deletebutton.value);
        lists.splice(Index,1);
        console.log(lists);
       });
    
}
let id = i;
function onSubmit(e) {
    e.preventDefault();

    if (text.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter the field';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        console.log(text.value);
        // Create new list item with user
        const li = document.createElement('li');
        const li1 = document.createElement('li');
        li.id = i;
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";
        const deletebutton = document.createElement('button');
        deletebutton.type = "button";
        // deletebutton.name = "name";
        deletebutton.value = text.value;
        deletebutton.id = i;
        deletebutton.className = "dbtn";
        lists.push(text.value);
        // Add text node with input values
        li1.appendChild(document.createTextNode(`${text.value}`));
        deletebutton.appendChild(document.createTextNode(`X`));
        li.appendChild(li1);
        console.log(` lists : ${lists}`);
        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
        deletebutton.addEventListener('click', e => {
            e.preventDefault();
            document.getElementById(deletebutton.id).remove();
            Index=lists.indexOf(deletebutton.value);
            lists.splice(Index,1);
            console.log(lists);
            // document.querySelector('li').remove();
            // document.querySelector('input').remove();
            // document.querySelector('button').remove();
            // document.getElementById('my-form').style.background = '#ccc';
            // document.querySelector('body').classList.add('bg-dark');
            // ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
        });
        
        // Append to ul
        li.appendChild(checkbox);
        li.appendChild(deletebutton);
        userList.appendChild(li);
        ++i;
        // Clear fields
        text.value = '';
    }
}
