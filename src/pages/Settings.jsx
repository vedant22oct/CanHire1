import { Container, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../redux/slices/theme.slice';
import { useState } from 'react';


const Settings = () => {
    const theme = useSelector(store => store.theme)
    const dispatch = useDispatch();

    const [mode, setMode] = useState(theme.mode);
    const [layout, setLayout] = useState(theme.layout);
    const [font, setFont] = useState(theme.font);

    const handleThemeChange = (e) => {
        setMode(e.target.value);
    };

    const handleLayoutChange = (e) => {
        setLayout(e.target.value);
    };

    const handleFontChange = (e) => {
        setFont(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateTheme({
            mode, layout, font
        }))
    }

    return (
        <Container>
            <h1>Settings</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTheme">
                    <Form.Label>Theme</Form.Label>
                    <Form.Control
                        as="select"
                        name="mode"
                        value={mode}
                        onChange={handleThemeChange}
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formLayout">
                    <Form.Label>Layout</Form.Label>
                    <Form.Control
                        as="select"
                        name="layout"
                        value={layout}
                        onChange={handleLayoutChange}
                    >
                        <option value="grid">Grid</option>
                        <option value="list">List</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formFont">
                    <Form.Label>Font</Form.Label>
                    <Form.Control
                        as="select"
                        name="font"
                        value={font}
                        onChange={handleFontChange}
                    >
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