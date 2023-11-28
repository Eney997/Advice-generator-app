const sharp = document.querySelector('.sharp')
const text = document.querySelector('.text')
const kletka = document.querySelector('.kletka')

kletka.addEventListener('click', gavparsotData)

function gavparsotData(){
    fetch('https://api.adviceslip.com/advice').then(response => response.json())
    .then(Data => {
        const gela = Data.slip.advice;
        const  gela2 = Data.slip.id ;

        text.innerHTML = `"${gela}"`
        sharp.innerHTML = `#${gela2}`
    })
    .catch(error =>{
        console.log("error",error)
        text.innerHTML = 'Oops Shechema ! Error code : 404 Shechema'
    })
}
