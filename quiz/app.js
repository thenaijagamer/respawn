const form = document.querySelector('form');
const header = document.querySelector('#header');
const correctAnswers = ['a', 'b', 'b', 'a'];
const para = document.createElement('p');
para.classList.add('score-value')
header.appendChild(para);


form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ]
  
  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score +=25;
    }
  })

  // scroll to the top
  scrollTo(1,1);
  
  // animate answer
  let output = 0;
  const timer = setInterval(() => {
    para.innerHTML = `you are<span> ${output}%</span> naijmer`;
    let paraSpan = document.querySelector('#header p span')
    paraSpan.classList.add('big'); 
    if (output === score) {
      clearInterval(timer)
    } else {
      output++;
    } 
  },10)
})