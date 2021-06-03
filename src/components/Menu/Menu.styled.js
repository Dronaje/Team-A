import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: white;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 80px;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 85%;
    }

  a {
    font-size: 2rem;
    font-family: Reem Kufi;
    // padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 20px;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
