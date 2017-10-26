import styled from 'react-emotion';
import { space, width, fontSize } from 'styled-system';

// main container
export const TableContainer = styled.div`
  composes: ${space} ${width} ${fontSize};
`;

// row container
export const TableRow = styled.div`
  composes: ${space};

  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  border: ${({isHeader}: boolean) => isHeader ? '2px solid' : '1px solid'};
  border-top: ${({isHeader}: boolean) => isHeader ? '2px solid' : 'none'};

  background-color: ${(props: Object) => props.bgColor || props.theme.tables.rows.bgColor};
  border-color: ${(props: Object) => props.borderColor || props.theme.tables.rows.borderColor};
  color: ${(props: Object) => props.textColor || props.theme.tables.rows.textColor};
  height: ${(props: Object) => props.height || '40px'};
  text-align: ${(props: Object) => props.ta};
`;

// wrappers around cells and other wrappers
export const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TableColumn = styled.div`
  composes: ${space} ${width};

  flex-grow: 0;
  flex-shrink: 0;
  vertical-align: top;

  text-align: ${(props: Object) => props.ta};
`;
