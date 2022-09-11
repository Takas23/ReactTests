import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';

export const Table = () => {

// 1- config HOOKS
  //inicia con un arreglo vacio
  const [users, setUsers] = useState( [] )

  // 2- Funcion para mostrar los datos con fetch
  const URL= 'https://gorest.co.in/public/v2/users'
  //async fetch
  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()

    console.log(data);
    setUsers(data)
  }

  // UseEffect
  useEffect(() => {
    showData()
  }, [])


  // 3- config las columns para datatable
  const columns = [
    {
      name: "NOMBRE",
      selector: row => row.name
    },
    {
      name: "email",
      selector: row => row.email
    }
  ]

  // 4- mostramos la data en datatable
  return (
    <div>
      <h1>tabla datatable</h1>
      {/*TEST
      <DataTable
        //de donde vienen las columnas
        //columns = {columns}
        //de donde viene la data
        //data = {data}
      />
      */}

      <DataTable
        columns={columns}
        data={users}
      />

    </div>
  );
}