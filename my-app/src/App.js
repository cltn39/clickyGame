import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import fish from "./img.json"
import "./App.css";

class App extends Component {
  state = {
    fish,
    clickedCard: [],
    score: 0,
    topScore: 0
  };
//when you click on a card ... the fish is taken out of the array
imageClick = event => {
  const currentCard = event.target;
  const cardAlreadyClicked =
    this.state.clickedCard.indexOf(currentCard) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
  if (cardAlreadyClicked) {
    this.setState({
      fish: this.state.fish.sort(function(a, b) {
        return 0.8 - Math.random();
      }),
      clickedCard: [],
      score: 0
    });
      alert("You lose. Play again?");

//if you click on an available fish, your score is increased and cards reordered
  } else {console.log(event.target)
    this.setState(
      {
        fish: this.state.fish.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCard: this.state.clickedCard.concat(
          currentCard
        ),
        score: this.state.score + 1,
        topScore: this.state.score >= this.state.topScore ? (this.state.topScore +1):(this.state.topScore)
      },
//if you get all 12 fish corrent you get a congrats message and the game resets        
      () => {
        if (this.state.score === 12) {
          alert("Yay! You Win!");
          this.setState({
            fish: this.state.fish.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedCard: [],
            score: 0
          });
        }
      }
    );
  }
};

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
render() {
  return (
    <div>
      <Navbar 
        score={this.state.score}
        topScore={this.state.topScore}
      />
      <Jumbotron />
      <Wrapper>
        {this.state.fish.map(fish => (
          <Cards
            imageClick={this.imageClick}
            id={fish.id}
            key={fish.id}
            image={fish.image}
          />
        ))}
      </Wrapper>
      <Footer />
    </div>
  );
}
}

export default App;