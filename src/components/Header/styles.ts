import styled from '@emotion/styled';
import { Col, Row } from 'react-grid-system';

export const StyledHeader = styled(Row)`
  padding-top: 48px;
`;

export const HeaderTitle = styled(Col)`
  font-size: 48px;
  font-weight: 700;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const StyledForm = styled(Col)`
  width: 100%;
  display: flex;
  justify-content: end;

  @media (min-width: 768px) {
    max-width: 540px;
  }
`;
