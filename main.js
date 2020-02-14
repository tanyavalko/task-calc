let getSel = x => document.querySelector(x);

//click on button for open dialog modal  `Open calc`
let isBlock = false;
getSel('.btn-primary').addEventListener('click', function() {
    isBlock = !isBlock;
    if(isBlock){
        getSel('.container').style.display = 'block';
        getSel('.btn-primary').innerText = 'Close calc';
    }else{
        getSel('.container').style.display = 'none';
        getSel('.btn-primary').innerText = 'Open calc';
    }
});

//calculating sum  of numbers 
getSel('.suma').addEventListener('click', function() {
    let f1 = document.forms['f1'];
    let sumaFirst = 0;
        for (let i = 0; i < f1.elements.length; i++) {
            sumaFirst = +getSel('.sum-one').value + +getSel('.sum-second').value + +getSel('.sum-third').value;
        }
        getSel('.first-value').innerText = sumaFirst;
    let f2 = document.forms['f2'];
    let sumaSecond = 0;
        for (let i = 0; i < f2.elements.length; i++) {
            sumaSecond = +getSel('.sum-one2').value + +getSel('.sum-second2').value + +getSel('.sum-third2').value; 
        }
        getSel('.second-value').innerText = sumaSecond;
    let f3 = document.forms['f3'];
    let sumaThird = 0;
        for (let i = 0; i < f3.elements.length; i++) {
            sumaThird = +getSel('.sum-one3').value + +getSel('.sum-second3').value + +getSel('.sum-third3').value;
        }
         getSel('.third-value').innerText = sumaThird;
});

//calculating multiply of numbers
getSel('.multiply').addEventListener('click', function() {
    let f1 = document.forms['f1'];
    let sumaFirst = 0;
        for (let i = 0; i < f1.elements.length; i++) {
             sumaFirst = +getSel('.sum-one').value * +getSel('.sum-second').value * +getSel('.sum-third').value;
        }
    getSel('.first-value').innerText = sumaFirst;
    let f2 = document.forms['f2'];
    let sumaSecond = 0;
        for (let i = 0; i < f2.elements.length; i++) {
            sumaSecond = +getSel('.sum-one2').value * +getSel('.sum-second2').value * +getSel('.sum-third2').value; 
        }
    getSel('.second-value').innerText = sumaSecond;
    let f3 = document.forms['f3'];
    let sumaThird = 0;
        for (let i = 0; i < f3.elements.length; i++) {
            sumaThird = +getSel('.sum-one3').value * +getSel('.sum-second3').value * +getSel('.sum-third3').value;
        }
    getSel('.third-value').innerText = sumaThird;    
});

//change background color for div
let bgColorFirst = false;
getSel('.first-color').addEventListener('click', function(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    bgColorFirst = !bgColorFirst;
    if(bgColorFirst){
        getSel('.first-input-group').style.backgroundColor = `rgb(${r},${g},${b})`;
    }else{
        getSel('.first-input-group').style.backgroundColor = 'rgb(243, 243, 243)';
    }
});

let bgColorSecond = false;
getSel('.second-color').addEventListener('click', function(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    bgColorSecond = !bgColorSecond;
    if(bgColorSecond){
        getSel('.second-input-group').style.backgroundColor = `rgb(${r},${g},${b})`;
    }else{
        getSel('.second-input-group').style.backgroundColor = 'rgb(243, 243, 243)';
    }
});

let bgColorThird = false;
getSel('.third-color').addEventListener('click', function(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    bgColorThird = !bgColorThird;
    if(bgColorThird){
        getSel('.third-input-group').style.backgroundColor = `rgb(${r},${g},${b})`;
    }else{
        getSel('.third-input-group').style.backgroundColor = 'rgb(243, 243, 243)';
    }
});

