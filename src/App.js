import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Quote from './components/Quote';
import {useState} from 'react';

const theme = [
  "#E83845",
  "#746AB0",
  "E389B9",
  "#FFCD00",
  "#00A8E8",
  "288BA8",
  "#4B0082",
  "#000080"
]

const quotes = [
  {quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe"},
  {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
  {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein"},
  {quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch"},
  {quote: "You've gotta dance like there's nobody watching", author: "William W. Purkey"},
  {quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams", author: "Dr. Seuss"},
  {quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero"},
  {quote: "You only live once, but if you do it right, once is enough.", author: "Mae West"},
  {quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi"},
]
let indice =0
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme};
  transition: background-color 1s ease-in-out;

`;

const getRandom = (quote) => {
  if(!quote){
    return Math.floor(Math.random() * quotes.length)
  }
  return Math.floor(Math.random() * (quotes.length - 1))
}


function App() {
  const[quote, setQuote] = useState(quotes[getRandom()])
  const changeColor = () => {
    console.log(indice)
    indice = (indice + 1); 
    return indice
  }

  const newQuote = () => {
    let temp = quotes.filter(q => q.quote !== quote.quote)
    setQuote(temp[getRandom(quote)])
    indice = quotes.indexOf(quote)
  }

  return (
    <AppContainer theme={theme[indice]} className="App">
      <Quote changeColor={changeColor} quote={quote} newQuote={newQuote} theme={theme[indice]}/>
    </AppContainer>
  );
}

export default App;
