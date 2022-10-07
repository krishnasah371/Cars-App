import React from "react";

const TableRow = ({ carData, handleDelete, handleEdit }) => (
  <tr key={carData.id + 1}>
    <td>{carData.id}</td>
    <td>{carData.brand}</td>
    <td>{carData.name}</td>
    <td>{carData.releaseYear}</td>
    <td>{carData.color}</td>
    <td className="btn" onClick={() => handleEdit(carData.id)}>
      ✎
    </td>
    <td className="btn" onClick={() => handleDelete(carData.id)}>
      🗑
    </td>
  </tr>
);

export default TableRow;
