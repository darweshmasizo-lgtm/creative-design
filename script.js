document.querySelectorAll('.story-btn').forEach(btn =>
{
    btn.addEventListener('click',()=>{
        btn.classList.toggle('change')
    })
})