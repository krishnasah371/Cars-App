import React from "react";
import TableRow from "../table-row/TableRow";

const Table = ({ cars, handleDelete, handleEdit }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Brand</th>
        <th>Name</th>
        <th>Released Year</th>
        <th>Color</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {cars?.map((carData) => {
        return (
          <TableRow
            carData={carData}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </tbody>
  </table>
);

export default Table;
