import React from "react";
import Card from "./Card";
import contactList from "../contactList";

function App() {
    return <div>
        <h1 className="heading">My Contacts</h1>
        <Card 
        name={contactList[0].name}
        img={contactList[0].imgURl}
        phone={contactList[0].phone}
        email={contactList[0].email}
        />
        <Card 
        name={contactList[1].name}
        img={contactList[1].imgURl}
        phone={contactList[1].phone}
        email={contactList[1].email}
        />
        <Card 
        name={contactList[2].name}
        img={contactList[2].imgURl}
        phone={contactList[2].phone}
        email={contactList[2].email}
        />
    </div>
}

export default App;