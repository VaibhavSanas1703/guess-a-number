

let userNumber = document.getElementById('userNumber');
let submitNumber = document.getElementById('subBtn');
let errorDiv = document.querySelector('.error');
let errorText = document.querySelector('.error p');
let playAgainDiv = document.querySelector('.playagain');


// Generate Win Number

let winNumber;

winNumber = Math.floor(Math.random() * 20 + 1);
console.log(winNumber);


submitNumber.addEventListener('click', () => {
   checkUserNumber(userNumber.value)
})

let checkUserNumber = (userCurrentNumber) => {
   if(userCurrentNumber == ''){
     errorDiv.classList.add('toggle-error')
     errorText.innerHTML = `Please enter an number ?`

     setTimeout(() => {
      errorDiv.classList.remove('toggle-error')
     },1900)
   }
   else if(isNaN(userCurrentNumber)){
      errorDiv.classList.add('toggle-error')
      errorText.innerHTML = `Please enter valid number ?`

      setTimeout(() => {
       errorDiv.classList.remove('toggle-error')
      },1900)
   }
   else if(userCurrentNumber > 20){
      errorDiv.classList.add('toggle-error')
      errorText.innerHTML = `Please enter number between 1 to 20`

      setTimeout(() => {
       errorDiv.classList.remove('toggle-error')
      },1900)
   }
   else if(userCurrentNumber != winNumber){
      errorDiv.classList.add('toggle-error')
      errorText.innerHTML = `You are guess wrong number ? please try again`
 
      setTimeout(() => {
       errorDiv.classList.remove('toggle-error')
      },1900)
   }
   else{
      errorDiv.classList.add('toggle-error')
      errorText.innerHTML = `You win !! The Right Number is ${winNumber}`
 
      setTimeout(() => {
       errorDiv.classList.remove('toggle-error')
       let playAgain = confirm("Do you want to play again")

       if(playAgain){
         playAgainDiv.classList.add('toggle-play-again');

         setTimeout(() => {
            playAgainDiv.classList.remove('toggle-play-again');
            userNumber.value = ''
            generateNumber()
         },2000)
       }else{
         location.href = "greeting.html"
       }
      },2800)
   }
}

let generateNumber = () => {
  setTimeout(() => {
   location.reload()
  },210)

}
