import React from 'react';

import { Table } from './Components/Table';
import { Menu } from './Components/Menu';
import { ReactTable } from './Components/ReactTable';
import { SortingReactTable } from './Components/SortingReactTable';
import { ColumnHideReactTable } from './Components/ColumnHideReactTable';


/* TEST
//DATOS arreglo de objetos con datos
const data = [
  {
    id: 1,
    name: "rocky",
    age: 22
  },
  {
    id: 2,
    name: "balboa",
    age: 28
  },
  {
    id: 3,
    name: "rambo",
    age: 30
  }
];
//COLUMNAS arreglo de objetos con el dato de la columna
const columns = [
  {
    name: "NOMBRE",
    selector: row => row.name
  },
  {
    name: "EDAD",
    selector: row => row.age
  }
]
*/

const App = () => {

  return (
    <div className="App">

      <ColumnHideReactTable/>

      {/* <SortingReactTable/> */}

      {/* <ReactTable/> */}

      {/* <Table /> */}

      {/* <Menu/> */}

    </div>

  );
}

export default App;
