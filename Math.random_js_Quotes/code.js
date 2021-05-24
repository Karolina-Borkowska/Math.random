const btn = document.querySelector('.gamebtn');
const div = document.createElement('div');
div.classList.add('quotes')
document.body.appendChild(div);
btn.addEventListener('click', function(){
const students = [
    'It doesn’t matter how slowly you go, as long as you don’t stop',
    'The past cannot be changed, the future is yet in your power',
    'What you do today can improve all of your tomorrows. – Ralph Marston',
    'Wake up determined go to bed satisfied. – Dwayne Johnson',
    'Believe in yourself! Have faith in your abilities. Without a humble but reasonable confidence in your own powers, you cannot be successful or happy. Norman Vincent Peale',
    'If you cannot do great things, do small things in a great way. – Napolean Hill',
    'Believe in yourself. You are braver than you think, more talented that you know and capable of more than you can imagine. – Roy. T. Bennet',
    'Work hard in silence, let your success be your noise.',
    'You begin by always expecting good things to happen. – Tom Hopkins',
    'It always seems impossible until it’s done. – Nelson Mandela']
const randomQuotes = array => {
const randomIndex = Math.floor(Math.random() * (array.length));
return array[randomIndex];}
div.textContent = (`${randomQuotes(students)}`)
})

    

