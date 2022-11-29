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
    document.getElementById("myForm").reset();
    showExpenses();
}
const showExpenses = () => {
    const expenseTable = document.getElementById("expenseTable");
    expenseTable.innerHTML = "";
    for(let i=0;i<expenses.length;i++){
        expenseTable.innerHTML += `
        <tr> 
            <td> ${expenses[i].expenseAmount} </td>
            <td> ${expenses[i].expenseDescription} </td>
            <td> ${expenses[i].expenseCategory} </td>
            <td><button onclick="editExpense(${expenses[i].id})" class="editExpense"> edit</button></td>
            <td><button onclick="deleteExpense(${expenses[i].id})" class="deleteExpense"> &#10005;</button></td>
        </tr>
        `
    }
}

