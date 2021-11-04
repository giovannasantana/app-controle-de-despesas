const transactionUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

const dummyTransactions =[
    {id: 1, name: 'Bolo de brigadeiro', amount: -20}            //array
]

const handleFormSubmit = event =>{
    
    if(inputTransactionName.ariaValueMax.trim() === '' || 
            inputTransactionAmount.ariaValueMax.trim() === ''){
        alert('Informe a descrição e o valor da transação');
    }
}

form.addEventListener('submit', handleFormSubmit);