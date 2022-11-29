const myForm = document.querySelector('#my-form');
const expenseAmount = document.querySelector('#expenseAmount');
const expenseDescription = document.querySelector('#expenseDescription');
const expenseCategory = document.querySelector('#expenseCategory');

myForm.addEventListener('submit', addExpense);
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense(e){
    e.preventDefault();
    if(expenseAmount > 0 && expenseDescription.length > 0 && expenseCategory != "category"){
        let expense = {
            id,
            expenseAmount,
            expenseDescription,
            expenseCategory
        }
        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }
    document.getElementById("myForm").requestFullscreen();
}
const showExpenses = () => {
    const expenseTable = document.getElementById("expenseTable");
    expenseTable.innerHTML = "";
}

