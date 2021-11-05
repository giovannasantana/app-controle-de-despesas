const transactionUl = document.querySelector('#transactions');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');
const balanceDisplay = document.querySelector('#balance');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');


let dummyTransactions =[
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},            //array
    {id: 2, name: 'Salario', amount: 300},
    {id: 3, name: 'Torta de frango', amount: 30},
    {id: 4, name: 'Violao', amount: -500}
]

// gerador de id aleatorio
const geradorID = () => Math.round(Math.random * 1000);

const addTransactionInArray = (transactionName,transactionAmount) => {
    dummyTransactions.push({
        id: geradorID, 
        name: transactionName,
        amount: Number(transactionAmount)
    })
}

const handleFormSubmit = event =>{
    event.preventDefault(); //para permanecer na mesma pagina, sem direcionar para tela de listagem

    if(inputTransactionName.value.trim() === '' || 
        inputTransactionAmount.value.trim() === ''){
        alert('Informe a descrição e o valor da transação');
        return;
    }

    addTransactionInArray(inputTransactionName.value, inputTransactionAmount.value)

    init();
}

form.addEventListener('submit', handleFormSubmit);

                        // é o parametro da funcao
const addTransactionIntoDOM = transaction =>{
    const li = document.createElement('li')

    li.innerHTML = `${transaction.name} ${transaction.amount}`
    //atribuindo um nó para o li
    transactionUl.append(li);
}

// metodo que ira separar os valores de total, receitas e despesas
const updateBalanceValues = () => {

    //pega todos os valores de cada linha do array
    const transationsAmounts = dummyTransactions.map(({amount}) => amount)
    console.log('Soma dos valores: ' + transationsAmounts); 

    //totalizador
    const total = transationsAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Soma dos valores: ' + total)

    //somente as receitaas
    const income = transationsAmounts.filter(value => value > 0)
                                    .reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente os valores positivos: ' + income);

    //somente as desesas
    const expenses = transationsAmounts.filter(value => value < 0)
                                    .reduce((accumulator, transaction) => accumulator + transaction, 0);
    console.log('Somente os valores negativos: ' + expenses)

    balanceDisplay.textContent = `R$ ${total}`;
    incomeDisplay.textContent = `R$ ${income}`;
    expenseDisplay.textContent = `R$ ${expenses}`;
}




const init = () => {
    // tratamento a nivel de codigo para nao submeter toda a lista novamente
    transactionUl.innerHTML = ''; // para adicionar somento um elemento
    dummyTransactions.forEach(addTransactionIntoDOM);
    updateBalanceValues();
}

// funcao de inicializacao do js
init();