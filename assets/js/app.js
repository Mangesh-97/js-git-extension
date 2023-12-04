let cl = console.log;

cl('helo')

localStorage.setItem('fullName','Mangesh Dhole')


let obj = {
    fname: 'Mangesh',
    lname: 'Dhole'
}

localStorage.setItem('userObj', JSON.stringify(obj))

let getdatafromlocalstorage = JSON.parse(localStorage.getItem('userObj'))

cl(getdatafromlocalstorage)
