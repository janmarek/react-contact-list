import {Card} from "react-bootstrap";
import styled from "styled-components";

export function Contact({name, phone, email}) {
    return (
        <ContactCard>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Phone: {phone}
                    <br />
                    Email: {email}
                </Card.Text>
            </Card.Body>
        </ContactCard>
    );
}

const ContactCard = styled(Card)`
    margin-bottom: 1em;
`;
