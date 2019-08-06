const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = 'Loading!';
    messageTwo.textContent = '';

    const location = '/weather?address=' + encodeURIComponent(search.value);
    fetch(location).then((response) => {
        response.json().then((data) => {
            if (!data.error){
                const datas = data.forecastData;
                messageOne.textContent = data.location;
                messageTwo.textContent = datas.precipitation + " " + datas.summary + ". " + datas.temperature;
            }
            else{
                messageOne.textContent = data.error;
            }
        });
    });

})