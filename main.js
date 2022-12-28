const computer_choice = document.querySelector('#computer-choice')
const user_choice = document.querySelector('#user_choice')
const buttons = document.querySelectorAll('button')
const answer = document.querySelector('#result')
let userChoiceDisplay;
buttons.forEach(button => button.addEventListener('click', (e) => {
    console.log('Hello world')
    console.log( e.target.id)
    userChoiceDisplay = e.target.id;
    user_choice.textContent = userChoiceDisplay
    generate()
}))

function generate(){
    let computer_choice_array = ['rock', 'paper', 'scissors']
    let random_computer_choice_array = computer_choice_array[Math.floor(Math.random() * computer_choice_array.length)]
    let win = 'Win'
    let lose = 'Lose'
    if(user_choice.value == '0'){
        computer_choice.textContent = ''
        alert('Please select')
        // console.log('Hello Earth')
    } else{
        // console.log('Hello World')
        computer_choice.textContent = random_computer_choice_array
        if(random_computer_choice_array == user_choice.textContent){
            answer.textContent = "It's a draw"
        }
        else{
            if(random_computer_choice_array == 'scissors!' && user_choice.textContent == 'paper' ){
                answer.textContent = 'Computer wins'
            }else if(random_computer_choice_array == 'paper' && user_choice.textContent == 'scissors'){
                answer.textContent = 'You Win!'
            }else if(random_computer_choice_array == 'scissors' && user_choice.textContent == 'rock'){
                answer.textContent = 'You Win!'
            }else if(random_computer_choice_array == 'rock' && user_choice.textContent == 'scissors'){
                answer.textContent = 'Computer Wins!'
            }else if (random_computer_choice_array == 'paper' && user_choice.textContent == 'rock'){
                answer.textContent = 'Computer Wins!'
            }else if(random_computer_choice_array == 'rock' && user_choice.textContent == 'paper'){
                answer.textContent = 'You win!'
            }
        }
    }
    

}
// generate()