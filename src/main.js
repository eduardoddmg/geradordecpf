import './assets/css/style.css';
import { geradorCpf } from './modules/validaCPF'

const resultado = document.querySelector('.resultado');
const btn = document.querySelector('.btn');
let counter = 5;

btn.addEventListener('click', () => {
    const timer = setInterval(() => {
        if (counter > 0) resultado.innerHTML = `Seu CPF será gerado em ${counter}...`;
        else if (counter == 0) resultado.innerHTML = `...`;
        else 
        {
            resultado.innerHTML = geradorCpf();
            clearInterval(timer)
        }
        counter--;
    }, 1000);
    counter = 5;
    location.reload();
});





