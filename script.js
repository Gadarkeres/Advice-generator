let title = document.querySelector('#advice')
let msg = document.querySelector('#paragraph')
let button = document.querySelector('#next')
const api = 'https://api.adviceslip.com/advice'


 async function getMsg() {
    title.innerHTML = ''
    msg.innerHTML = 'Loading...'
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
      updateUser(data.slip)
   
  }
  function updateUser(slip) {
    title.innerHTML = `ADVICE #${slip.id}`
    msg.innerHTML = slip.advice

  }


button.addEventListener('click', (e) => {
    getMsg()
} )
getMsg()