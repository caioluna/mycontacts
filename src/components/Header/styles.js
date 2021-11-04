import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 66px;

  img {
    width: 201px;
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;

    margin-top: 48px;
    border-radius: 25px;
    padding: 0 16px;

    background-color: #FFF;
    border: 0;

    outline-color: rgba(204,204,204, .5);

    box-shadow: 0 4px 10px rgba(0,0,0,0.04);

    &::placeholder {
      color: #BCBCBC;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
