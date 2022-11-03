import '../style.css'
import javascriptLogo from '../javascript.svg'
import {selectRandomfromArray} from "./Utils"
import party from "party-js";


document.getElementById('button')
      .addEventListener('click', onclick)



function onclick() {
      const product = document.getElementById('product')
      const participants = document.getElementById('participants')
      const winner= document.getElementById('winner')
      const nameList = participants.value.split('\n')
      const chosenOne= selectRandomfromArray(nameList)
      let msg
     
      if(!product.value && !participants.value ) msg = "Campos Vacíos"
      else if(!product.value) msg = "No hay nada para sortear"
      else if(!participants.value) msg = "No hay participantes"
      else {
            msg =  `Enhorabuena ${chosenOne} has ganado ${product.value}`
            party.confetti(winner) 
      }
      winner.innerHTML= msg
}


      