import React from "react";
import { Link, useParams } from "react-router-dom"

export default function CardButtons({ id, handleDelete }){
    const { deckId } = useParams();

    return (
        <div className="btn-group" role="group" aria-label="Card Buttons group">
            <Link to={`/decks/${deckId}/cards/${id}/edit`}>
                <button type="button" className="btn btn-secondary mr-2">
                    <span className="oi oi-pencil mr-2"></span>
                    Edit
                </button>
            </Link>
            <button type="button" className = "btn btn-danger" onClick={() => handleDelete(id)}>
                <span className="oi oi-trash mr-2"></span>
                Delete
            </button>
        </div>
    );
};