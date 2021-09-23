import React from "react";
import { Link, useParams } from "react-router-dom";


function DeckButtons({ id, handleDeckDelete }) {
    const { deckId } = useParams();

    let buttonView = null;
    let buttonEdit = null;
    let buttonAddCards = null;

    if (deckId) {
        buttonEdit = (
            <Link to={`/decks/${deckId}/edit`}>
                <button type="button" className="btn btn-secondary mr-2">
                    <span className="oi oi-pencil mr-2"></span>
                    Edit
                </button>
            </Link>
        );
        buttonAddCards = (
            <Link to={`/decks/${deckId}/cards/new`}>
                <button type="button" className ="btn btn-primary mr-2">
                    <span className="oi oi-plus mr-2"></span>
                    Add Cards
                </button>
            </Link>
        );
    } else {
        buttonView = (
            <Link to={`/decks/${id}`}>
                <button type="button" className="btn btn-secondary mr-2">
                <span className="oi oi-eye mr-2"></span>
                    View
                </button>
            </Link>
        );
    }
    

    return (
        <div
            className="btn-toolbar justify-content-between"
            role="toolbar"
            aria-label="Deck Buttons"
        >
            <div
                className="btn-group"
                role="group"
                aria-label="group"
            >
                {buttonView}
                {buttonEdit}

                <Link to={`/decks/${id}/study`}>
                    <button type="buttons" className="btn btn-primary mr-2">
                        <span className="oi oi-book mr-2"></span>
                        Study
                    </button>
                </Link>

                {buttonAddCards}
            </div>
            <div className="btn-group" role="group" aria-label="Delete Group">
                <button type="button" className="btn btn-danger" onClick={() => handleDeckDelete(id)}>
                    <span className="oi oi-trash mr-2"></span>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DeckButtons;