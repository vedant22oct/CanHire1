import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Settings = () => {
    const [theme, setTheme] = useState('light');
    const [layout, setLayout] = useState('grid');
    const [font, setFont] = useState('Arial');

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleLayoutChange = (e) => {
        setLayout(e.target.value);
    };

    const handleFontChange = (e) => {
        setFont(e.target.value);
    };

    return (
        <Container>
            <h1>Settings</h1>
            <Form>
                <Form.Group controlId="formTheme">
                    <Form.Label>Theme</Form.Label>
                    <Form.Control as="select" value={theme} onChange={handleThemeChange}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formLayout">
                    <Form.Label>Layout</Form.Label>
                    <Form.Control as="select" value={layout} onChange={handleLayoutChange}>
                        <option value="grid">Grid</option>
                        <option value="list">List</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formFont">
                    <Form.Label>Font</Form.Label>
                    <Form.Control as="select" value={font} onChange={handleFontChange}>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Courier New">Courier New</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </Form>
        </Container>
    );
};

export default Settings;