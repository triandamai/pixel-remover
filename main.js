import './style.css'
import { imageProcessing } from './imageprocessing.js'

window.addEventListener('DOMContentLoaded',()=>{
    imageProcessing(document.querySelector('#app'))
})

