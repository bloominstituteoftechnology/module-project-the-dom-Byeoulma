function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  
  const widgets = document.querySelectorAll('section>div');
  

  // We loop through each widget to add class instead of typing it 4 times
  widgets.forEach((widget, idx) => {
    /// Then add our 'widget' class name
    widget.classList.add('widget');
    widget.setAttribute('tabindex', idx + 1)
  });

  // isnt an array but a Node List
  console.log(widgets);

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
 const randomIndex = Math.floor(Math.random() * quotes.length);
 const randomQuote = quotes[randomIndex]; // eslint-disable-line
 // flesh out quote
 const quote = document.createElement('div') ;
 const quoteText = randomQuote.quote;
 quote.textContent = quoteText;
 const widget1 = document.querySelector('.quoteoftheday');
 widget1.appendChild(quote);
 
 // author and date
const authorDate = document.createElement('div');
const { author, date } = randomQuote;
authorDate.textContent = `${author} in ${date || 'an unknown date'}`;
widget1.appendChild(authorDate);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

// verb
const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)];
const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)];
// adverb
const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)];
const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)];
// Noun
const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)];
// sentence
const mumboJumbo = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
const paragraph = document.createElement('p');
paragraph.textContent = mumboJumbo;
document.querySelector('.corporatespeak').appendChild(paragraph);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here

const countDownWidget = document.querySelector('.countdown');
let count = 5;
const countdown = document.createElement('p');
countdown.textContent = `T-minus ${count}...`
countDownWidget.appendChild(countdown);


const id = setInterval(() => {
  if(count === 1) {
  countdown.textContent = 'Liftoff! 🚀'
  clearInterval(id)
  } else {
    count--;
    countdown.textContent = `T-minus ${count}...`;
  }

}, 1000);



  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

const person = people[Math.floor(Math.random() * people.length)];
const personWords = document.createElement('p');
document.querySelector('.friends').appendChild(personWords);
const year = person.dateOfBirth.split('-')[0];
let words =`${person.fname} ${person.lname} was born in ${year} and `


if(!person.friends.length) {
words += 'has no friends.'
} else {
  words += 'is friends with '
  for (let idx = 0; idx < person.friends.length; idx++) {
    const friendId = person.friends[idx];
    const friend = people.find(p => p.id === friendId);
    const fullName = `${friend.fname} ${friend.lname}`
    let isLastIdx = idx === person.friends.length -1;
    let isNextToLastIdx = idx === person.friends.length - 2
    if(isLastIdx) {
      words += `${fullName}.`
    } else if (isNextToLastIdx) {
      words += `${fullName} and `
    } else {
      words += `${fullName}, `
    }
  }
}

personWords.textContent = words


  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆






}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
