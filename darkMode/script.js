let btn = document.querySelector("button");
let theme = 'white'
btn.addEventListener("click", function() {
    if (theme == 'white') {
        document.documentElement.style.setProperty('--main-color', '#fff');
        document.documentElement.style.setProperty('--bg-color', '#1f1f1f');
        document.documentElement.style.setProperty('--text-color', '#fff');

        theme ='dark';
    }else{
        document.documentElement.removeAttribute('style');
        theme = 'white'
    }
})