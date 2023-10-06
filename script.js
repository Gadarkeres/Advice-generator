let title = document.querySelector('#advice')
let msg = document.querySelector('#paragraph')
let button = document.querySelector('#next')


function getMsg() {
    title.innerHTML = ''
    msg.innerHTML = 'Loading...'
    fetch('https://api.adviceslip.com/advice')
      .then(response => {
        if (!response) {
          console.log('Erro  na requisição da api')
        }
        response = response.json()
        console.log(response)
        return response;
      })
      .then(response => {
        updateUser(response.slip)
      })
   
  }
  function updateUser(slip) {
    title.innerHTML = `ADVICE #${slip.id}`
    msg.innerHTML = slip.advice

  }
getMsg()


button.addEventListener('click', (e) => {
    getMsg()
} )