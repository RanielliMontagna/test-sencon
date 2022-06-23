import { memo } from 'react';
import * as styled from './header.styles';

const Header = () => {
  return (
    <styled.DivExterna>
      <h1>Listagem de usuários</h1>
      <h1>Teste - Sencon</h1>
    </styled.DivExterna>
  );
};

export default memo(Header);
