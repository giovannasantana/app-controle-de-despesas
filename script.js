const transactionUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

let dummyTransactions =[
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},            //array
    {id: 2, name: 'Salario', amount: 300},
    {id: 3, name: 'Torta de frango', amount: 30},
    {id: 4, name: 'Violao', amount: -500}
]

const addTransactionInArray = (transactionName,transactionAmount) => {
    dummyTransactions.push({
        id:123, // esta fixo porque ainda nao tem um gerador de id
        name: transactionName,
        amount: transactionAmount
    })
}

const handleFormSubmit = event =>{
    event.preventDefault(); //para permanecer na mesma pagina, sem direcionar para tela de listagem

    if(inputTransactionName.value.trim() === '' || 
        inputTransactionAmount.value.trim() === ''){
        alert('Informe a descrição e o valor da transação');
        return;
    }

    addTransactionInArray(inputTransactionName.value, inputTransactionAmount.value);

    init();
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
    // tratamento a nivel de codigo para nao submeter toda a lista novamente
    transactionUl.innerHTML = ''; // para adicionar somento um elemento
    dummyTransactions.forEach(addTransactionIntoDOM);
}

// funcao de inicializacao do js
init();