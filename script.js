const transactionUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

const dummyTransactions =[
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},            //array
    {id: 2, name: 'Salario', amount: 300},
    {id: 3, name: 'Torta de frango', amount: 30},
    {id: 4, name: 'Violao', amount: -500}
]

const handleFormSubmit = event =>{
    
    if(inputTransactionName.value.trim() === '' && 
            inputTransactionAmount.value.trim() === ''){
        alert('Informe a descrição e o valor da transação');
    }
}

form.addEventListener('submit', handleFormSubmit);

                        // é o parametro da funcao
const addTransactionIntoDOM = transaction =>{
    const li = document.createElement('li')

    li.innerHTML = `${transaction.name}`
    //atribuindo um nó para o li
    transactionUl.append(li);
}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM);
}

// funcao de inicializacao do js
init();