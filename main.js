const multiply = (x, y, z) => { return x * y * z }

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
  if (document.querySelector('#height').checkValidity() && document.querySelector('#width').checkValidity()&& document.querySelector('#depth').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = parseInt(document.querySelector('#height').value)
    const i = parseInt(document.querySelector('#width').value)
    const j = parseInt(document.querySelector('#depth').value)
    const ans = `Your volume is ${multiply(s, i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }
}


// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'height') ||
    (event.target && event.target.id === 'width')||
    (event.target && event.target.id === 'depth')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

