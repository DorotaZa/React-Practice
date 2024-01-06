import React from "react";
import Card from "./Card";
import contactList from "../contactList";
import Avatar from "./Avatar";

function createCard(contact){
    return <Card 
    key={contact.id}
    id={contact.id}
    name={contact.name}
    img={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
    />
}

function App() {
    return <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar 
        img="https://m.media-amazon.com/images/M/MV5BOGJmZDUwMzktYmY2MS00M2IwLWIyNmQtYjJhYjc4NjIyZWM1XkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_FMjpg_UX1000_.jpg"
        />
        {contactList.map(createCard)}
    </div>
}

export default App;