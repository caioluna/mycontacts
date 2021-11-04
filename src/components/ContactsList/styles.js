import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 44px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;

  span {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray.dark};
  }

  a {
    padding: 8px 12px;
    text-decoration: none;

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary.main};

    transition: all .3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;

export const Ruler = styled.div`
  margin-top: 16px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.gray.light};
  opacity: 20%;
  border-radius: 1px;
`;

export const Contact = styled.div`

`;
