const apiKey = '5e5815927798ef0129e3f3e89d7464e5';

const serBtn = document.getElementById('ser-btn');

const serInput = document.getElementById('ser-input');

const callApi = (value) =>{
  fetch(`http://api.openweathermap.org /data/2.5/weather?q=${value}&appid= ${apiKey}`)
  .then((result) => {
    return result.json()
  })
  .then((res) => {
    document.write('Hello')
  })
}

serBtn.addEventListener('click' , () => {
  callApi(serInput.value)
})

