/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Address from './address';

const columns = [
  {
    Header: 'User',
    columns: [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Email',
        id: 'email',
        accessor: d => d.email
      }
    ]
  },
  {
    Header: 'Company',
    columns: [
      {
        Header: 'Name',
        id: 'companyName',
        accessor: d => d.company.name
      },
      {
        Header: 'Description',
        id: 'description',
        accessor: d => d.company.bs
      }
    ]
  }
];

const UsersTable = (props) => {
  const { data, handleMap, adr } = props;
  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={5}
      loadingText="Loading..."
      className="-striped"
      SubComponent={row =>
        (
          <Address address={adr} />
        )
      }
       getTdProps={ (state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              handleMap(rowInfo.original);
              if (handleOriginal) {
                handleOriginal()
              }
            }
          }
        }}
    />
  );
};

export default UsersTable;
