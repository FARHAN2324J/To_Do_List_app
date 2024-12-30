const btn_Add = document.getElementById('btn1');
const Input = document.getElementById('input');
const Item_container = document.getElementById('item-container');



// Add function
function addNewElement() {
    // Get Text
    const input_text = Input.value.trim();

    if (input_text) {
        const inputText = Input.value;

        // Create Element 
        const newDiv = document.createElement('div');
        newDiv.classList = "DIV";
        newDiv.classList.add('check-box-container');
       
        // Create Element
        const newElement = document.createElement('p');
        newElement.textContent = inputText;

        // Create Element
        const newCheckBox = document.createElement('input');
        newCheckBox.classList = "checkBox";
        newCheckBox.type = 'checkbox';

        // Create Element
        const newIcon = document.createElement('i');
        newIcon.classList.add('fas', 'fa-trash-alt');
        newIcon.style.color = 'darkred'
        newIcon.style.fontSize = '1.1em';
        newIcon.style.cursor = 'pointer';

        // Create Element
        const newEmoji = document.createElement('i');
        newEmoji.classList.add('far', 'fa-frown');
        
        // click Change Color
        newEmoji.addEventListener('click', function () {
            this.classList.toggle('icon-red');
        });
        
        
        // Create Element
        const newEmoji2 = document.createElement('i');
        newEmoji2.classList.add('far', 'fa-meh', 'custom-emoji2');
        
        // click Change Color
        newEmoji2.addEventListener('click', function () {
            this.classList.toggle('icon-yellow');
        });


        // Create Element
        const newEmoji3 = document.createElement('i');
        newEmoji3.classList.add('far', 'fa-smile', 'custom-emoji3');

        // click Change Color
        newEmoji3.addEventListener('click', function () {
            this.classList.toggle('icon-green');
        });

        // Element Add to newDiv
        newDiv.appendChild(newElement); 
        newDiv.appendChild(newCheckBox); 
        newDiv.appendChild(newIcon);
        newDiv.appendChild(newEmoji);
        newDiv.appendChild(newEmoji2);
        newDiv.appendChild(newEmoji3);

        // Clear TextInput
        Input.value = '';

        // Text decoration
        newCheckBox.addEventListener('change', () => {
            if (newCheckBox.checked) {
                newElement.classList.add('line-through');
            } else {
                newElement.classList.remove('line-through');
            }
        });

        // Remove Item
        newIcon.addEventListener('click', () => {
            newDiv.remove();
        });

        // Add newElement Delete
        /*Input.addEventListener('keydown', function(event) {
            if (event.key === 'Delete') {
                newDiv.remove();
            }
        })*/
        
        // newDiv Add to Item_container
        Item_container.appendChild(newDiv)

    } else {
        Input.classList.add('border-red');
    }
}

// Add newElement click
btn_Add.addEventListener('click', addNewElement);

// Add newElement Keyboard (Enter)
Input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addNewElement();
    }
})




// Remove Border red
Input.addEventListener('keyup', () => {
    if (Input.value.trim()) {
        Input.classList.remove('border-red');
    }
});



// Change Theme
const container = document.querySelector('.container');
const body = document.querySelector('body')

let light_theme = 'theme-light';
let dark_theme = 'theme-dark';


document.getElementById(dark_theme).addEventListener('click', () => {
    if (dark_theme === 'theme-dark')  {
        container.classList.remove('container-light-theme');
        body.classList.remove('container-light-theme');
        container.classList.add('container-dark-theme');
        body.classList.add('container-dark-theme');
        Input.classList.remove('Div-theme');
    }
})


document.getElementById(light_theme).addEventListener('click', () => {
    if (light_theme === 'theme-light') {
        container.classList.add('container-light-theme');
        body.classList.add('container-light-theme');
        container.classList.remove('container-dark-theme');
        body.classList.remove('container-dark-theme');
        Input.classList.add('Div-theme');
        
    }
});