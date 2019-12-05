import React from 'react';
import ListaProductos from './ListaProductos';

const Producto = ({producto}) => (

<div>
    <h1>{producto.nombre}</h1>
    <p>Precio: ${producto.precio}</p>
</div>
);

export default Producto;