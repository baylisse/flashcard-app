import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import DeckButtons from "./DeckButtons";

function DeckDisplay({ decks, setDecks, handleDeckDelete}) {
 
    useEffect(() => {
        async function getDecks() {
            const decksFromAPI = await listDecks();
            setDecks(decksFromAPI)
        }
        getDecks();
    }, [setDecks]);



    function Deck( { id, name, description, totalCards }) {
        const totalCardsDisplay = totalCards === 1 ? "1 card" : `${totalCards} cards`;
    
        return (
            <div className="card mb-2" key={id}>
                <div className="card-body">
                    <div className="row justify-content-between">
                        <h5 className="card-title">{name}</h5>
                        <p className="text text-secondary">{totalCardsDisplay}</p>
                    </div>
                    <p className="card-text">{description}</p>
                    <DeckButtons id={id} handleDeckDelete={handleDeckDelete} />
                </div>
            </div>
        );
    };

    const deckList = decks.map((deck) => {
        return (
            <Deck
                key={deck?.id}
                id={deck?.id}
                name={deck?.name}
                description={deck?.description}
                totalCards={deck?.cards?.length}
            />
        );
    });


    return (
        <div>
        <Link to="/decks/new">
            <button type="button" className="btn btn-secondary mb-4">
                <span className="oi oi-plus mr-2"></span>
                Create Deck
            </button>
        </Link>    
        {deckList}
        </div>
    );
};

export default DeckDisplay;