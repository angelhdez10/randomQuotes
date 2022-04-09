import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const QuoteBlock = styled.blockquote`
  background-color: #f9f9f9;
  height: auto;
  width: 450px;
  padding: 20px;
  border-radius: 3px;
  

  blockquote {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    padding: 0 10px;
  }

  #text {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: ${props => props.theme};
  }

  #author {
    color: ${props => props.theme};
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    align-self: flex-end;
  }

`

const NewQuote = styled.button`
  color: white;
  font-size: 12px;
  height: 28px;
  border: none;
  padding:0 5px;
  border-radius: 3px;
  background-color: ${(props) => props.theme};
  transition: background-color 1s ease-in-out;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30px;
  align-items: center;

  a {
    margin: 0 5px;
    border-radius: 3px;
    padding: 2px 10px;
    background-color: ${(props) => props.theme};
    transition: background-color 1s ease-in-out;
  }
`;

const Quote = ({quote, theme, changeColor, newQuote}) => {
  return (
    <QuoteBlock id="quote-box" theme={theme}>
      <blockquote>
        <p  id="text"><i class="fa fa-quote-left"/>{quote.quote}</p>
        <p id="author">-{quote.author}</p>
      </blockquote>
      <Div>
        <Buttons theme={theme}>
          <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" ><i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.tumblr.com/widgets/share/tool" target="_blank" ><i class="fa-brands fa-tumblr"></i></a>
        </Buttons>
        <NewQuote id="new-quote" theme={theme} onClick={newQuote}>New quote</NewQuote>
      </Div>
    </QuoteBlock>
  );
}

export default Quote


