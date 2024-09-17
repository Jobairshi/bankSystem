let userinfo = [

    {
        id: 1001,
        name: 'jobair uddin jesan',
        money: 23000
    },
    {
        id: 1002,
        name: 'durjoy barua',
        money: 2000
    }
]; // acc,totalmon

let transactionHistory = [
    {
        senderId: 1001,
        recvId: 10002,
        ammount: 2000
    }
]
if (localStorage.getItem('userinfo')) {

}
else
    localStorage.setItem('userinfo', JSON.stringify(userinfo))

if (localStorage.getItem('trans')) {

}
else {
    localStorage.setItem('trans', JSON.stringify(transactionHistory))
}
function depositDivPage() {
    const depositDivMain = document.createElement('div');
    depositDivMain.innerText = 'Enter account number and deposit amount';
    depositDivMain.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col', 'gap-5', 'p-10', 'rounded-2xl')

    const accountinput = document.createElement('input');
    accountinput.placeholder = 'enter account number';
    accountinput.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2')

    const money = document.createElement('input');
    money.placeholder = 'enter total ammout';
    money.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2')


    const submit = document.createElement('button')
    submit.innerText = 'submit'
    submit.classList.add('border-2', 'bg-blue-200', 'p-3')





    submit.onclick = () => {

        const acc = accountinput.value;
        const mon = money.value;


        const useinfo = JSON.parse(localStorage.getItem('userinfo'));
        const find = useinfo.findIndex((elem) => {
            console.log(acc, elem.id)
            if (acc == elem.id) {
                return true;
            }
            return false;
        })

        if (find !== -1) {
            useinfo[find].money += Number(mon);
            console.log(useinfo);
            
            alert('data updated');
            localStorage.setItem('userinfo', JSON.stringify(useinfo));

            const transc = JSON.parse(localStorage.getItem('trans'))
            transc.push({
                senderId: acc,
                ammount: mon
            })
            console.log(transc);
            localStorage.setItem('trans', JSON.stringify(transc))
        }
        else {
            alert('user not found')
        }
        // console.log(acc,mon)
        // alert(mon)
    }


    depositDivMain.append(accountinput)
    depositDivMain.append(money)
    depositDivMain.append(submit)
    return depositDivMain;
}

function withDrawDivPage() {
    const withDrawDivMain = document.createElement('div');
    withDrawDivMain.innerText = 'this is withDraw div';
    withDrawDivMain.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col', 'gap-5', 'p-10', 'rounded-2xl')

    const accountinput = document.createElement('input');
    accountinput.placeholder = 'enter account number';
    accountinput.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2')

    const money = document.createElement('input');
    money.placeholder = 'enter total ammout';
    money.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2')


    const submit = document.createElement('button')
    submit.innerText = 'submit'
    submit.classList.add('border-2', 'bg-blue-200', 'p-3')








    submit.onclick = () => {

        const acc = accountinput.value;
        const mon = money.value;
        const useinfo = JSON.parse(localStorage.getItem('userinfo'));
        //    const useinfo =localStorage.getItem('userinfo');
        const find = useinfo.findIndex((elem) => {
            console.log(acc, elem.id)
            if (acc == elem.id) {
                return true;
            }
            return false;
        })

        if (find !== -1) {
            if (useinfo[find].money < mon) {
                alert('not enough money');
            }
            else {
                useinfo[find].money -= Number(mon);
                console.log(useinfo);
                localStorage.setItem('userinfo', JSON.stringify(useinfo))
                alert('data updated');
                const transc = JSON.parse(localStorage.getItem('trans'))
                transc.push({
                    senderId: acc,
                    ammount: mon,
                    bank:true
                })
                console.log(transc);
                localStorage.setItem('trans', JSON.stringify(transc))
            }
            //localStorage.setItem('userinfo', useinfo);
        }
        else {
            alert('user not found')
        }
        // console.log(acc,mon)
        // alert(mon)
    }


    withDrawDivMain.append(accountinput)
    withDrawDivMain.append(money)
    withDrawDivMain.append(submit)


    return withDrawDivMain;
}

function transferDivPage() {
    const transferDivMain = document.createElement('div');
    transferDivMain.innerText = 'this is transfer div';


    transferDivMain.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col', 'gap-5', 'p-10', 'rounded-2xl')

    const accountinput = document.createElement('input');
    accountinput.placeholder = 'enter account number';
    accountinput.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2')


    const recepInput = document.createElement('input');
    recepInput.placeholder = 'enter reciver account number';
    recepInput.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2')

    const money = document.createElement('input');
    money.placeholder = 'enter total ammout';
    money.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2')


    const submit = document.createElement('button')
    submit.innerText = 'submit'
    submit.classList.add('border-2', 'bg-blue-200', 'p-3')





    submit.onclick = () => {

        const acc = accountinput.value;
        const mon = money.value;

        const rcv = recepInput.value;
        const useinfo = JSON.parse(localStorage.getItem('userinfo'));
        const findSend = useinfo.findIndex((elem) => {
            console.log(acc, elem.id)
            if (acc == elem.id) {
                return true;
            }
            return false;
        })

        const findRcv = useinfo.findIndex((elem) => {
            console.log(acc, elem.id)
            if (rcv == elem.id) {
                return true;
            }
            return false;
        })

        if (findSend !== -1 && findRcv !== -1) {
            //   const taka =userinfo[findSend].money - Number(mon);
            //  console.log(userinfo[findSend].money, mon)
            if (useinfo[findSend].money < Number(mon)) {
                alert('not enough money to send')
            }
            else {
                useinfo[findSend].money -= Number(mon);
                useinfo[findRcv].money += Number(mon);
                console.log(useinfo);
                localStorage.setItem('userinfo', JSON.stringify(useinfo));

                const transc = JSON.parse(localStorage.getItem('trans'))
               transc.push({
                senderId: acc,
                recvId:rcv,
                ammount: mon
            })

            transc.push({
                senderId:rcv,
                recvId:acc,
                ammount:mon,
                recived:true
            })
            console.log(transc);
            localStorage.setItem('trans', JSON.stringify(transc))
                alert('data updated');
            }
            //localStorage.setItem('userinfo', useinfo);
        }
        else {
            alert('user or recver not found')
        }
        // console.log(acc,mon)
        // alert(mon)
    }


    transferDivMain.append(accountinput)
    transferDivMain.append(recepInput);
    transferDivMain.append(money)
    transferDivMain.append(submit)

    return transferDivMain;
}


function userCard(props) {
    const { id, name, money } = props;
    console.log(id, name, money);
    const userDiv = document.createElement('div');

    userDiv.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col', 'gap-2', 'p-10', 'rounded-2xl', 'hover:bg-green-500')

    const nameTitle = document.createElement('h1');
    nameTitle.innerText = "User Name       : " + name;

    const accTitle = document.createElement('h1');
    accTitle.innerText = "Account No.      : " + id;
    const moneyTitle = document.createElement('h1');
    moneyTitle.innerText = "Total Money      : " + String(money);


    userDiv.append(accTitle)
    userDiv.append(nameTitle);
    userDiv.append(moneyTitle)
    return userDiv;

}
function accountsDivPage() {
    const accountsDivMain = document.createElement('div');

    const head = document.createElement('h1');

    head.innerText = 'All user info';

    head.classList.add('font-bold', 'text-4xl')

    const accnDIv = document.createElement('div');

    accnDIv.classList.add('mt-10', 'grid', 'grid-cols-3', 'gap-10');



    const useinfo = JSON.parse(localStorage.getItem('userinfo'));
    useinfo.map((user) => {
        accnDIv.append(userCard(user))
    })


    accountsDivMain.append(head);
    accountsDivMain.append(accnDIv)
    return accountsDivMain;
}


function CreateAccDivPage() {
    const createAccDivDivMain = document.createElement('div');
    createAccDivDivMain.innerText = 'this is Create Acccount div';
    createAccDivDivMain.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col', 'gap-5', 'p-10', 'rounded-2xl')



    const nameinput = document.createElement('input');
    nameinput.placeholder = 'enter user name';
    nameinput.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2')

    const money = document.createElement('input');
    money.placeholder = 'enter total ammout';
    money.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2')


    const submit = document.createElement('button')
    submit.innerText = 'submit'
    submit.classList.add('border-2', 'bg-blue-200', 'p-3')

    const useinfo = JSON.parse(localStorage.getItem('userinfo'));
    submit.onclick = () => {
        useinfo.push({
            id: 1000 + userinfo.length + 1,
            name: nameinput.value,
            money: Number(money.value)
        })
        alert('account created')
        localStorage.setItem('userinfo', JSON.stringify(useinfo));
    }






    createAccDivDivMain.append(nameinput)
    createAccDivDivMain.append(money)
    createAccDivDivMain.append(submit)


    return createAccDivDivMain;
}


function perTrans(props) {

    const {senderId,recvId = null,bank = false,recived= false, ammount } = props;

    console.log(senderId)
    const  per = document.createElement('div');
    per.classList.add('flex','flex-col', 'gap-2','items-start','bg-yellow-400','rounded-lg','p-3')

    const h1 = document.createElement('h1');
    h1.innerText ='send account no. ' + " " +  senderId;
    
    const h2 = document.createElement('h1');
    h2.innerText =  recvId?'reciver account no. ' + " " + recvId:' Deposited to bank ';
    if(bank)
    {
        h2.innerText ='withdrawn from bank';
    }
    const h3 = document.createElement('h1');
    h3.innerText ='transfered ammount : ' + "  "  + ammount;
    

    if(recived)
    {
        h1.innerText ='send account no. ' + " " + recvId;
        h2.innerText = 'recived money '
    }


    per.append(h1);
    per.append(h2)
    per.append(h3)
    
    return per;
}


function transactionPage()
{
    const transMainDiv   = document.createElement('div');
    transMainDiv.innerText = 'this is transaction page';
    transMainDiv.classList.add('bg-yellow-200','rounded-2xl', 'font-bold', 'text-xl','p-10')


    const flexDiv =document.createElement('div');
    flexDiv.classList.add('flex', 'flex-row','p-4', 'gap-3')  
    const searchBox = document.createElement('input');
    searchBox.placeholder  = 'enter account no.';
    searchBox.classList.add('border-2','border-black','rounded-lg','p-2')
    const submit = document.createElement('button');
    submit.innerText = 'search';
    submit.classList.add('p-2', 'bg-green-200', 'hover:bg-green-400','border-2','border-green-200', 'rounded-lg')


   
    submit.onclick = ()=>{

        const history = document.createElement('div');
        history.classList.add('flex','flex-col', 'gap-2')
        const getHistory = JSON.parse(localStorage.getItem('trans'))
        console.log(searchBox)
        if(transMainDiv.childNodes[2])
        {
            transMainDiv.removeChild(transMainDiv.childNodes[2])
        }
        const accno = searchBox.value;
        console.log(accno);
        const filtered = getHistory.filter((elem)=>{
            if(elem.senderId == accno)
            {
                return true;
            }
            return false;
        })
        console.log(filtered)
        filtered.map((elem)=>{
            history.append(perTrans(elem))
        })
        transMainDiv.append(history)
    }



    flexDiv.append(searchBox);
    flexDiv.append(submit)


    



    
    transMainDiv.append(flexDiv)
    
    return transMainDiv;
}




const conditionalDiv = document.createElement('div');


const mainDiv = document.getElementById('main');


mainDiv.classList.add('flex', 'flex-col', 'items-center', 'h-screen', 'text-center', 'gap-10');


const headinng1 = document.createElement('h1');
headinng1.innerText = 'Bank Management System';

headinng1.classList.add('mt-10', 'font-bold', 'text-5xl', 'san-serif','text-red-400');

const clic = document.createElement('h1');
clic.innerText = 'click below buttons';

clic.classList.add( 'font-bold', 'text-lg', 'san-serif','text-red-600');


const container = document.createElement('div');
container.classList.add('flex', 'flex-row', 'gap-5', 'items-center');

const depositDiv = document.createElement('div');
depositDiv.innerText = 'Deposit';
depositDiv.classList.add('h-44', 'w-44', 'hover:bg-blue-500', 'bg-blue-400', 'text-center', 'flex', 'justify-center', 'items-center', 'rounded-lg','font-bold', 'text-white','text-xl');


depositDiv.onclick = () => {
    conditionalDiv.innerHTML = '';
    conditionalDiv.append(depositDivPage());
}








const withDrawDiv = document.createElement('div');
withDrawDiv.innerText = 'Withdraw';
withDrawDiv.classList.add('h-44', 'w-44', 'hover:bg-blue-500', 'bg-blue-400', 'text-center', 'flex', 'justify-center', 'items-center', 'rounded-lg','font-bold', 'text-white','text-xl');


withDrawDiv.onclick = () => {
    conditionalDiv.innerHTML = '';
    conditionalDiv.append(withDrawDivPage());
}

const transferDiv = document.createElement('div');
transferDiv.innerText = 'Transfer';
transferDiv.classList.add('h-44', 'w-44', 'hover:bg-blue-500', 'bg-blue-400', 'text-center', 'flex', 'justify-center', 'items-center', 'rounded-lg','font-bold', 'text-white','text-xl');

transferDiv.onclick = () => {
    conditionalDiv.innerHTML = '';
    conditionalDiv.append(transferDivPage());
}


const accountsDiv = document.createElement('div');
accountsDiv.innerText = 'Accounts';
accountsDiv.classList.add('h-44', 'w-44', 'hover:bg-blue-500', 'bg-blue-400', 'text-center', 'flex', 'justify-center', 'items-center', 'rounded-lg','font-bold', 'text-white','text-xl');

accountsDiv.onclick = () => {
    conditionalDiv.innerHTML = '';
    conditionalDiv.append(accountsDivPage());
}


const createAccDiv = document.createElement('div');
createAccDiv.innerText = 'Create account';
createAccDiv.classList.add('h-44', 'w-44', 'hover:bg-blue-500', 'bg-blue-400', 'text-center', 'flex', 'justify-center', 'items-center', 'rounded-lg','font-bold', 'text-white','text-xl');

createAccDiv.onclick = () => {
    conditionalDiv.innerHTML = '';
    conditionalDiv.append(CreateAccDivPage());
}


const checkDiv = document.createElement('div');
checkDiv.innerText = 'check user transactions';
checkDiv.classList.add('h-44', 'w-44', 'hover:bg-blue-500', 'bg-blue-400', 'text-center', 'flex', 'justify-center', 'items-center', 'rounded-lg','font-bold', 'text-white','text-xl');

checkDiv.onclick = () => {
    conditionalDiv.innerHTML = '';
    conditionalDiv.append(transactionPage());
}



container.append(depositDiv);
container.append(withDrawDiv);
container.append(transferDiv);
container.append(accountsDiv);
container.append(createAccDiv);
container.append(checkDiv);





mainDiv.append(headinng1);
mainDiv.append(clic)
mainDiv.append(container);
mainDiv.append(conditionalDiv)
