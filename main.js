import './style.css'
import { setupCounter } from './counter.js'

window.addEventListener('DOMContentLoaded',()=>{
    setupCounter(document.querySelector('#app'))
})

