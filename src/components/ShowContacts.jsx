import React, { useContext, useEffect, useState } from "react";
import { ContactosContext } from "../App";
import {
    Container,
    Row,
    ToggleButtonGroup,
    ToggleButton,
    Card,
    Button,
} from "react-bootstrap";

const ContactCard = ({ contacto, handleDelete }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{contacto.nombre}</Card.Title>
                <Card.Text>
                    {contacto.telefono} - {contacto.tipoContacto}
                    {"    "}
                    <Button
                        variant="danger"
                        onClick={(e) => handleDelete(e, contacto.nombre)}>
                        Delete
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

const ShowContacts = () => {
    const { contactos, setContactos } = useContext(ContactosContext);

    const [despliegue, setDespliegue] = useState(contactos);
    console.log(despliegue);

    useEffect(() => {
        setDespliegue(contactos);
    }, [contactos]);

    const handleDelete = (e, nombre) => {
        e.preventDefault();
        const filteredContacts = contactos.filter(
            (contacto) => contacto.nombre !== nombre
        );
        setContactos(filteredContacts);
    };

    const handleFilter = (e) => {
        // e.preventDefault();
        if (e.target === 3) {
            contactos.sort((a, b) => {
                if (a.nombre > b.nombre) {
                    return 1;
                }
                if (a.nombre < b.nombre) {
                    return -1;
                }
                return 0;
            });
            const filteredContacts = contactos;
            setDespliegue(filteredContacts);
        } else if (e.target === 2) {
            const filteredContacts = contactos.filter(
                (contacto) => contacto.tipoContacto === "persona"
            );
            setDespliegue(filteredContacts);
        } else if (e.target === 1) {
            const filteredContacts = contactos.filter(
                (contacto) => contacto.tipoContacto === "empresa"
            );
            setDespliegue(filteredContacts);
        }
    };

    return (
        <Container>
            <Row>
                <ToggleButtonGroup
                    type="radio"
                    name="options"
                    defaultValue={3}
                    onChange={(e) => handleFilter(e)}>
                    <ToggleButton id="empresa" value={1}>
                        Empresa
                    </ToggleButton>
                    <ToggleButton id="persona" value={2}>
                        Persona
                    </ToggleButton>
                    <ToggleButton id="abecedario" value={3}>
                        Ordenar [A-Z]
                    </ToggleButton>
                </ToggleButtonGroup>
            </Row>
            <Row>
                {despliegue.map((contacto, index) => (
                    <Row key={index}>
                        <ContactCard
                            contacto={contacto}
                            handleDelete={(e) =>
                                handleDelete(e, contacto.nombre)
                            }
                        />
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default ShowContacts;
