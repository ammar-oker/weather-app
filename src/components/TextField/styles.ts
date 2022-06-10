import styled from '@emotion/styled';

export const TextFieldWrapper = styled.div<{
  width?: string;
  maxWidth?: string;
}>`
  width: ${({ width = '100%' }) => width};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;

export const InputWrapper = styled.div<{ error: boolean }>`
  background: #f8f8f8;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid transparent;
  ${({ error }) => error && `border-color: #F24747;`}

  input {
    padding: 14px 16px;
    border: none;
    width: 100%;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    outline: none;
    color: #2c2c2c;

    &::placeholder {
      color: #c4c4c4;
      font-size: 0.875rem;
    }
  }
`;

export const EndIcon = styled.div`
  height: 100%;
  padding: 14px;
  color: #c4c4c4;
  display: flex;

  & > * {
    margin: auto;
    width: 20px;
    height: 20px;
  }
`;
export const Message = styled.div<{ error: boolean }>`
  padding: 8px 8px 0;
  font-size: 0.875rem;
  min-height: 29px;
  color: ${({ error }) => (error ? '#F24747' : '#c4c4c4')};
`;
