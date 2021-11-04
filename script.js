const transactionUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

const dummyTransactions =[
    {id: 1, name: 'Bolo de brigadeiro', amount: -20}            //array
    {id: 2, name: 'Salario', amount: 300}
    {id: 3, name: 'Torta de frango', amount: 30}
    {id: 4, name: 'Violao', amount: -500}
]

const handleFormSubmit = event =>{
    
    if(inputTransactionName.ariaValueMax.trim() === '' || 
            inputTransactionAmount.ariaValueMax.trim() === ''){
        alert('Informe a descrição e o valor da transação');
    }
}

form.addEventListener('submit', handleFormSubmit);