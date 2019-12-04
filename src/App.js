import React, { Fragment } from 'react';

function App() {

  const empleado = {
    nombre: 'Jimmy',
    trabajo: 'Dev app'
  }

  return (
<Fragment>
<h1>{empleado.nombre}</h1>
<p>{}empleado.trabajo</p>

</Fragment>
  );
}

export default App;
