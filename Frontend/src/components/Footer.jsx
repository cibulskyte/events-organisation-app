import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    li {
      margin-right: 15px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #ffd700; /* change to your preferred hover color */
      }
    }
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms and conditions</li>
        <li>Youtube</li>
        <li>Linkedin</li>
        <li>Facebook</li>
      </ul>
      <p>© 2024 OrganisationApp. All Rights Reserved</p>
    </StyledFooter>
  );
};

export default Footer;
