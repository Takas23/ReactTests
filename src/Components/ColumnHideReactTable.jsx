import React, { useMemo, useState, useEffect } from 'react'
import { useTable, useSortBy } from 'react-table'
import { Checkbox } from './Checkbox'

export const ColumnHideReactTable = () => {

    const [users, setUsers] = useState([])

    // 2- Funcion para mostrar los datos con fetch
    const URL = 'https://gorest.co.in/public/v2/users'
    //async fetch
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()

        setUsers(data)
    }

    // UseEffect
    useEffect(() => {
        showData()
    }, [])

    /* columnas. 
        header->encabezado de columna
        accessor->nombre del dato en el json */
    const columnsRT = [
        {
            Header: 'ID',
            Footer: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Name',
            Footer: 'Name',
            accessor: 'name'
        },
        {
            Header: 'email',
            Footer: 'email',
            accessor: 'email'
        },
        {
            Header: 'Genero',
            Footer: 'Genero',
            accessor: 'gender',
            //funcion que modifica el contenido
            Cell: ({ value }) => { return (value + value) }
        },
        {
            Header: 'Status',
            Footer: 'Status',
            accessor: 'status'
        }
    ]

    const columns = useMemo(() => columnsRT, []);
    //const data = useMemo(() => users, []);


    const {
        getTableProps,  //destructura en table
        getTableBodyProps,  //destructura en table body
        headerGroups, //se mapea en table head
        footerGroups,
        rows, //va dentro de tbody
        prepareRow,
        allColumns, //ocultar columnas
        getToggleHideAllColumnsProps
    } = useTable({
        columns: columns,
        data: users
    },
        useSortBy) //agrega la utilidad de ordenamiento


    return (

        <div>
            <div>
                <div>
                <Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All
                </div>
                {
                    allColumns.map(column => (
                        <div key={column.id} >
                            <label> 
                                <input type="checkbox" {...column.getToggleHiddenProps()}/>
                                {column.Header}
                            </label>
                        </div>
                    ))
                }
            </div>    

            <table {...getTableProps()}>

                {/* Headers con ordenamiento*/}
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? '⮟' : '⮝') : ''}
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    <tr>
                        <th></th>
                    </tr>
                </thead>

                {/* Body */}
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>

                {/* //Footers */}
                <tfoot>
                    {
                        footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps}>
                                            {
                                                column.render('Footer')
                                            }
                                        </td>
                                    ))
                                }

                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        </div>
    )
}