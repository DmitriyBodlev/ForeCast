import styled from 'react-emotion';

export const Alert = styled.div`
  border: 1px solid transparent;
  border-radius: .25rem;
  margin-bottom: 1rem;
  padding: .75rem 1.25rem;
`;

export const AlertDanger = styled(Alert)`
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
`;
