import { forwardRef, HTMLProps, ReactNode } from 'react';
import * as S from './styles';

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  error?: boolean;
  message?: ReactNode | string;
  endIcon?: ReactNode;
  width?: string;
  maxWidth?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error = false, message, width, maxWidth, endIcon, ...props }, ref) => {
    return (
      <S.TextFieldWrapper width={width} maxWidth={maxWidth}>
        <S.InputWrapper error={error}>
          <input ref={ref} type="text" {...props} />
          {endIcon && <S.EndIcon>{endIcon}</S.EndIcon>}
        </S.InputWrapper>
        <S.Message error={error}>{message}</S.Message>
      </S.TextFieldWrapper>
    );
  },
);

export default TextField;
