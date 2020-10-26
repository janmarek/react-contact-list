import {ContactList} from "./ContactList";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

export function ContactListPage() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.get("/items").then((res) => setContacts(res.data.items));
    }, []);

    return (
        <>
            <p>
                <Button href="/add" variant="primary">
                    Add new contact
                </Button>
            </p>
            <ContactList contacts={contacts} />
        </>
    );
}
