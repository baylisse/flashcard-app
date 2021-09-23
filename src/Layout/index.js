import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckHome from "../Decks/DeckHome";
import DeckView from "../Decks/DeckView";
import EditDeck from "../Decks/EditDeck";
import Study from "../Decks/Study";
import CreateDeck from "../Decks/CreateDeck";
import EditCard from "../Cards/EditCard";
import CreateCard from "../Cards/CreateCard";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  const history = useHistory();

  const handleDeckDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      deleteDeck(id);

      setDecks((currentDecks) => currentDecks.filter((deck) => deck.id !== id));

      history.push("/");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckHome
              decks={decks}
              setDecks={setDecks}
              handleDeckDelete={handleDeckDelete}
            />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckView
              deck={deck}
              setDeck={setDeck}
              cards={cards}
              setCards={setCards}
              handleDeckDelete={handleDeckDelete}
            />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study
              deck={deck}
              setDeck={setDeck}
              cards={cards}
              setCards={setCards}
            />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CreateCard deck={deck} setDeck={setDeck} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
