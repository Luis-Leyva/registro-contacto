import React, { useContext } from "react";
import { ContactosContext } from "../App";
import { Form, Button } from "react-bootstrap";

const InputForm = () => {
    const [contacto, setContacto] = React.useState({
        nombre: "",
        telefono: "",
        tipoContacto: "",
    });

    const { contactos, setContactos } = useContext(ContactosContext);

    const handleChange = (e) => {
        e.preventDefault();

        setContacto({
            ...contacto,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setContactos([...contactos, contacto]);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Nombre de Contacto"
                    onChange={handleChange}
                    value={contacto.nombre}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    name="telefono"
                    placeholder="Numero de Telefono"
                    onChange={handleChange}
                    value={contacto.telefono}
                />
            </Form.Group>
            <Form.Group>
                <Form.Select name="tipoContacto" onChange={handleChange}>
                    <option key="blankChoice" hidden value>
                        Tipo de Contacto
                    </option>
                    <option value={"Persona"}> Persona </option>
                    <option value={"Empresa"}> Empresa </option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form.Group>
        </Form>
    );
};

export default InputForm;
