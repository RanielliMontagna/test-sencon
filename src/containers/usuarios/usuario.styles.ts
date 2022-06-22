import styled from 'styled-components';
import { TableRow as TableRowMui } from '@mui/material';

export const DivGeral = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const DivTable = styled.div`
  display: flex;
  overflow: auto;
`;

export const TableRow = styled(TableRowMui)`
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
    transition: 0.3s ease-in-out;
  }
`;
