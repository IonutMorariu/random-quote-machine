import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './Components/Quote.js'
import Buttons from './Components/Buttons.js'

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    quoteText : '',
    author : '',
  }
  this.postQuote = this.postQuote.bind(this);
  this.loadNewQuote = this.loadNewQuote.bind(this);
}

componentWillMount (){
  this.loadNewQuote()

}
 loadNewQuote (){
   fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',{
     method : 'post',
     headers : {
       'X-Mashape-Key' : '2Z4XodbjNNmshByi9Vpd1KPlQuisp1qROwrjsnqrLiysVwPvni' ,
       'Content-Type' : 'application/x-www-form-urlencoded',
       'Accept' : 'application/json'
     }
   })
  .then(response => {
      return response.json();
    }).then(json => {
      console.log(json);
      this.setState ({
        quoteText : json.quote,
        author : json.author
      })
 })
 }
 postQuote(){
   window.open(`https://twitter.com/intent/tweet?text="${this.state.quoteText}"%20${this.state.author}&hashtags=quote`)
 }


  render() {
    return (
      <div className="App container">
        <Quote quoteText = {this.state.quoteText} author = {this.state.author} componentClassName = "QuoteClass" quoteClassName ="QuoteText" authorClassName = "author" />
        <Buttons  loadNewQuote = {this.loadNewQuote} postQuote = {this.postQuote} quoteButtonClass = " btn btn-green" tweetButtonClass = "btn btn-blue"/>

      </div>
    );
  }
}

export default App;
