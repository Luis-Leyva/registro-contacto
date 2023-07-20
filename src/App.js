import "./App.css";
import InputForm from "./components/InputForm";
import ShowContacts from "./components/ShowContacts";
import { Container, Row, Col } from "react-bootstrap";
import { useState, createContext } from "react";

export const ContactosContext = createContext(null);

function App() {
    const [contactos, setContactos] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <ContactosContext.Provider value={{ contactos, setContactos }}>
                    <Container>
                        <Row>
                            <Col>
                                <InputForm />
                            </Col>
                            <Col>
                                <ShowContacts />
                            </Col>
                        </Row>
                    </Container>
                </ContactosContext.Provider>
            </header>
        </div>
    );
}

export default App;

