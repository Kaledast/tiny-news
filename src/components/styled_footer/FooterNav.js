import styled from 'styled-components';

const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > * {
    margin: 0 10px 0 10px;
  }
`;

export default FooterNav;
