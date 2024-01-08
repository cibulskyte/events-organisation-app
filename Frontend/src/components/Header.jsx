
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: white;
  align-items: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0;
  padding-top: 40px;
  padding-bottom: 40px;
  row-gap: 30px;
`;

const Top = styled.div`
  h3 {
    margin: 0;
  }
`;

const Bottom = styled.div`
  display: flex;

  a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <Top>
        <h3>Events organization</h3>
      </Top>
      <Bottom>
        <Link to="/">Home page</Link>
        <Link to="/registrationForm">Registration form</Link>
        <Link to="/UsersPage">Participants list</Link>
      </Bottom>
    </Nav>
  );
};

export default Header;
