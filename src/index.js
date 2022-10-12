import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("button").addEventListener('click', ()=>{
        document.getElementById("img").classList.toggle('kep');
    })
    document.getElementById("kepurl").addEventListener('input',fuggveny);
    document.getElementById("betumeret").addEventListener('input',szelesseg);
    document.getElementById("sorkozmeret").addEventListener('input',sorkoz);
    document.getElementById("betuszin").addEventListener('input',betuszin);
    function fuggveny(){
        let valtozas = document.getElementById("kepurl").value;
        console.log(valtozas);
        document.getElementById("img").src=valtozas;
    }
    function szelesseg(){
        
        document.getElementById("lorem").style.fontSize = document.getElementById("betumeret").value+"pt";
    }
    function sorkoz(){
        document.getElementById("lorem").style.lineHeight = document.getElementById("sorkozmeret").value+"em";
    }
    function betuszin(){
        document.getElementById("lorem").style.color = document.getElementById("betuszin").value;
    }
})
