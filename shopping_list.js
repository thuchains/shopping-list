
const listForm = document.querySelector('.list-form')
const itemInput = document.querySelector('#item-input')
const shoppingList = document.querySelector('#shopping-list')

const spanTotalCount = document.getElementById('total-count')
const spanCompletedCount = document.getElementById('completed-count')
const spanRemainingCount = document.getElementById('remaining-count')
const inputError = document.getElementById('input-error')

let totalCount = 0;
let completedCount = 0;

listForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const value = itemInput.value.trim();
    if(!value) {
        inputError.textContent = "Please enter an item";
        itemInput.focus();
        return;
    }

    inputError.textContent = '';

    const newItem = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    label.appendChild(checkbox);
    label.append(' ', value);
    newItem.appendChild(label);
    shoppingList.appendChild(newItem);

    totalCount ++;
    updateStats();

    itemInput.value='';
    itemInput.focus();
})

shoppingList.addEventListener('change', (event) => {
    if (event.target && event.target.matches('input[type="checkbox"]')) {
        if (event.target.checked) {
            completedCount++;
        } else {
            completedCount --;
        }
        updateStats();
    }
})


function updateStats() {
    const remainingCount = totalCount - completedCount;
    spanTotalCount.textContent = `Total Count: ${totalCount}`;
    spanCompletedCount.textContent = `Completed Count: ${completedCount}`;
    spanRemainingCount.textContent = `Remaining Count: ${remainingCount}`;
}

updateStats();

const clearItems = document.getElementById('clear-btn')
clearItems.addEventListener('click', (event) => {
    shoppingList.textContent = ''
    totalCount = 0;
    completedCount = 0;
    updateStats()
})
