import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 16px;
  background: #1b1b1b;
  margin: 16px 0;
  border-radius: 20px;

  p {
    margin: 6px 0;
    color: #999;
  }

  h3 {
    margin: 10px 0;
    color: #ffff57;
  }

  @media(max-width: 720px) {
    width: 380px;
  }
`;
