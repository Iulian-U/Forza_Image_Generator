// API URL
const URL = 'https://forza-api.tk/'

//Target BTN and IMG SRC
const load_img = document.getElementById('load_img');
const load_btn = document.getElementById('load_btn');

//retrieve data from API
const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
};

//LOAD NEW IMG ON BUTTON CLICK
load_btn.addEventListener('click', () => {
    getData().then((data) => {
        console.log(data.image);
        load_img.src = data.image;
    });
})