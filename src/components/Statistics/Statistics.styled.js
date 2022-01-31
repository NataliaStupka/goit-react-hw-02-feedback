// .Statistics {
//   margin: 20px;
// }
// .Statistics__title {
//   padding-bottom: 15px;
// }
import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 30px;
`;

export const Item = styled.li`
  &: not(: last-child) {
    padding-bottom: 5px;
  } ;
`;
