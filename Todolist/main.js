const lists = ['first', 'second', 'third'];
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
    li.id = i;
    const deletebutton = document.createElement('button');
    deletebutton.type = "button";
    // deletebutton.name = "name";
    deletebutton.value = "button";
    deletebutton.id = i;
    deletebutton.className = "btn";
    deletebutton.appendChild(document.createTextNode(`Delete`));
    li.appendChild(document.createTextNode(`${lists[i]}`));
    li.appendChild(checkbox);
    li.appendChild(deletebutton)
    // userList.appendChild(checkbox);
    userList.appendChild(li);
    // userList.appendChild(deletebutton);
    deletebutton.addEventListener('click', e => {
        e.preventDefault();
        console.log(userList);
        document.getElementById(deletebutton.id).remove();
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
        li.id = i;
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";
        const deletebutton = document.createElement('button');
        deletebutton.type = "button";
        // deletebutton.name = "name";
        deletebutton.value = "button";
        deletebutton.id = i;
        deletebutton.className = "btn";
        lists.push(text.value);
        // Add text node with input values
        li.appendChild(document.createTextNode(`${text.value}`));
        deletebutton.appendChild(document.createTextNode(`Delete`));
        console.log(` lists : ${lists}`);
        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
        deletebutton.addEventListener('click', e => {
            e.preventDefault();
            console.log(e.target.className);
            e.preventDefault();
            console.log(userList);
            document.getElementById(deletebutton.id).remove();
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