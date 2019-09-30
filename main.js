
const maximum = (x, y) => { return Math.max(x,y) }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#number1').checkValidity() && document.querySelector('#number2').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = parseInt(document.querySelector('#number1').value)
    const i = parseInt(document.querySelector('#number2').value)
    
    const ans = `Your max number is ${maximum(s, i)}.`
    document.querySelector('#result').innerHTML = ans
  }
}





document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

/*
function myfunction() {
  let num1 = document.getElementById("number1").value
  let num2 = document.getElementById("number2").value
  let maxnum  = Math.max(num1,num2)
  const ans = `Your max number is ${maxnum}.`
  document.querySelector('#result').innerHTML = ans
  d//ocument.getElementById("result").innerHTML = " The Maximun number is  " + maxnum
}
*/
