import styled from '@emotion/styled';

export const Table = styled.table`
  width: calc(100% / 3);
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  border-spacing: 0;
  border-collapse: collapse;
  border-radius: 5px;
  background-color: #f5f5dc;
`;

export const TableHead = styled.thead`
  background-color: #ccc;
  th {
    width: calc(100% / 3);
  }
`;

export const TableHeading = styled.th`
  padding: 10px;
  text-transform: uppercase;
  color: #fff;
`;

export const TableBody = styled.tbody`
  text-align: center;
  text-transform: capitalize;
`;

export const TableData = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

export const TableRowHead = styled.tr`
  th {
    border-color: #fff;
  }
`;

export const TableRowBody = styled.tr`
  td {
    border-color: #fff;
  }
`;
