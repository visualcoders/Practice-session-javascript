let skill1_btn = document.getElementById('skill1');
let skill2_btn = document.getElementById('skill2');
let skill3_btn = document.getElementById('skill3');

const nama = 'Nana';
let role = 'Mage';

let skill1 = 'Melempar bola jauh dilangit';
let skill2 = 'Transform';
let skill3 = 'Bom';


// const => nilainya ngga bisa berubah
// nilainya bisa berubah

skill1_btn.addEventListener('click', function () {
    let power = document.getElementById('power');
    power.innerHTML = skill1;
})

skill2_btn.addEventListener('click', function () {
    let power = document.getElementById('power');
    power.innerHTML = skill2;
})

skill3_btn.addEventListener('click', function () {
    let power = document.getElementById('power');
    power.innerHTML = skill3;
})

let skill4 = 'Terbang jauh blablalbala';







