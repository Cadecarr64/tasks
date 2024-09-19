import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Cade Carr, Hello World
            </p>
            <h1>My Bio</h1>
            <ul>
                <li>My name is Cade</li>
                <li>I am 22 years old</li>
                <li>I am from Maine</li>
                <li>I have a dog named Laci</li>
                <li>My favorite color is green</li>
            </ul>
            <img
                src="C:\Users\12074\tasks\public\rectangles.jpg"
                alt="A picture  of Squares"
            />

            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: 500,
                                    height: 100,
                                }}
                            >
                                cade
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: 500,
                                    height: 100,
                                }}
                            >
                                cade
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
