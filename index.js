const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titles = tutorials.map(function (words) {
    const newWords = words.split(' ').map(function (word) {
      let letters = word.split('');
      let letterCap = letters.shift().toUpperCase();
      letters.unshift(letterCap);
      return letters.join('');
    });
    return newWords.join(' ');
  })
  return titles;
}
titleCased();
