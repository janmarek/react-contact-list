import {Contact} from "./Contact";

export function ContactList({contacts}) {
    return (
        <>
            {contacts.map((contact) => (
                <Contact key={contact.id} {...contact} />
            ))}
        </>
    );
}
