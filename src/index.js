
window.ghostText = (el) => {
    el.innerHTML = 'Some random text';
    el.setAttribute('tabindex', 0);
    el.addEventListener('keyup', (e)=>{
        // console.log(e)
    })
    el.addEventListener('keydown', (e)=>{
        console.log(e);
        if (e.key.length !== 1) {
            return;
        }
        el.innerHTML += e.key;
    })
    el.addEventListener('click', (e) => {
        console.log(e);
    })
}