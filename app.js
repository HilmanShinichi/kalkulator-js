(function() {

    //mendefinisikan property kalkulator
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    //menampilkan button yang di klik ke screen
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    //melakukan hasil operasi math dan menampilkan ke screen
    equal.addEventListener('click', function(e) {
        if(screen.value === ''){
            screen.value = "Mohon tekan tombol";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    //untuk menjalankan button clear agar screen value nya kosong
    clear.addEventListener('click', function(e) {
        screen.value = "";
    });

})();