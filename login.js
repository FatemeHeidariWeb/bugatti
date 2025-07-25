const inpUsername = document.querySelector('#txt')
const inpPassword = document.querySelector('#pass')
const form = document.querySelector('form')
const statusBar = document.querySelector('#status')
const checkBox = document.querySelector('#check')



form.addEventListener('submit', (event) => {
    if (inpUsername.value.length > 15) {
        alert('The number of characters allowed is up to 15 characters.')
        event.preventDefault()
        inpUsername.value = ''
        inpUsername.focus()
    }

    if (inpPassword.value.length < 8) {
        alert('Use a stronger password!')
        event.preventDefault()
        inpPassword.focus()
    }

    if (!checkBox.checked) {
        alert('Complete the registration form :)')
        event.preventDefault()
    }
})


inpPassword.addEventListener('input', () => {
    const inp = inpPassword.value.length

    if (inp >= 0 && inp <= 3) {
        statusBar.style.width = '1%'
        statusBar.style.backgroundColor ='purple'
        

    
    } else if (inp >= 7 && inp <= 9) {
        statusBar.style.width = '25%'
        statusBar.style.backgroundColor ='purple'
        

    } else if (inp >= 10 && inp <= 12) {
        statusBar.style.width = '50%'
        statusBar.style.backgroundColor ='purple'

    } else if (inp >= 13 && inp <= 15) {
        statusBar.style.width = '75%'
        
        statusBar.style.backgroundColor ='black'

    } else {
        statusBar.style.width = '100%'
        statusBar.style.backgroundColor ='black'

    }
})


