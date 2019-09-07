import React from 'react';
import './galeria.css';
import Titulo from '../Titulo';
import CardGaleria from '../CardGaleria';


const Galeria = () => (
    <div className="galeria">
        <div className="container">
            <Titulo />
            <div className="galeria-content">
                <CardGaleria />
                <CardGaleria />
                <CardGaleria />
                <CardGaleria />
                <CardGaleria />
                <CardGaleria />
                <CardGaleria />
                <CardGaleria />
            </div>
        </div>
    </div>
);

export default Galeria;