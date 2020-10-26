import {Container} from "react-bootstrap";
import styled from "styled-components";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {ContactListPage} from "./ContactListPage";
import { AddContactPage } from "./AddContactPage";

export function App() {
    return (
        <>
            <Header>Contact List App</Header>
            <Container>
                <BrowserRouter>
                    <Switch>
                        <Route path="/add">
                            <AddContactPage />
                        </Route>
                        <Route path="/" exact>
                            <ContactListPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Container>
        </>
    );
}

const Header = styled.div`
    font-size: 150%;
    background: #666;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 1rem;
`;
