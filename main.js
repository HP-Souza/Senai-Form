const form = document.querySelector('form')
const submit = document.querySelector('button[type="submit"]')

form.addEventListener('keydown', function(e){
    if(e.key === 'Enter' && !e.shiftKey){
        e.preventDefault()
        submit.click()
    }
})