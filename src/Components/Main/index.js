import React from 'react';
import './main.css';
import Titulo from '../Titulo';
import Card from "../Card";

const Main = () => (
    <main>
        <div class="container">
            <Titulo />
            <div class="cards">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </main>
);

export default Main;