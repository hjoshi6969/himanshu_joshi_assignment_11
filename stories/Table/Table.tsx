import React from 'react';
import styled from 'styled-components';

interface TableProps {
  backgroundColor: string;
  Disable: boolean;
  price: number;
}

const StyledTable = styled.table<{ backgroundColor: string; Disable: boolean }>`
  /* Add your Label styles here */
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 13px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  cursor: ${(props) => (props.Disable ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.Disable ? 'gray' : 'inherit')}; /* Change text color to gray when Disable is true */
`;

const Table: React.FC<TableProps> = ({ backgroundColor, Disable, price }) => {
  return (
    <StyledTable Disable={Disable} backgroundColor={backgroundColor}>
      <thead>
        <tr>
          <th>Se no.</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Disable ? "N/A" : "1."}</td>
          <td>{Disable ? "N/A" : "Product"}</td>
          <td>{Disable ? "N/A" : price}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>{Disable ? "Table disabled" : "Table Enabled"}</td>
        </tr>
      </tfoot>
    </StyledTable>
  );
};

export default Table;
