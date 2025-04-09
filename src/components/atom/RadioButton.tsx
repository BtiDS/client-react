import { css } from "@emotion/react";
import styled from "@emotion/styled";

type RadioButtonSize = "large" | "medium";

interface RadioButtonStyleProps {
  $size?: RadioButtonSize;
  disabled?: boolean;
  checked?: boolean;
}

interface RadioButtonProps extends RadioButtonStyleProps {
  label: string;
  helpText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

const RadioButton = ({
  label,
  helpText,
  $size = "medium",
  onChange,
  name,
  value,
  checked,
  disabled,
}: RadioButtonProps) => {
  return (
    <RadioContainer>
      <RadioWrapper>
        <RadioInput
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          $size={$size}
          checked={checked}
          disabled={disabled}
        />
        <RadioLabel $size={$size} disabled={disabled}>
          {label}
        </RadioLabel>
      </RadioWrapper>
      {helpText && (
        <RadioHelpText disabled={disabled}>{helpText}</RadioHelpText>
      )}
    </RadioContainer>
  );
};

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioInput = styled.input<RadioButtonStyleProps>`
  border: 1px solid #58616a;
  background: #fff;
  margin: 0;

  ${({ $size }) => {
    switch ($size) {
      case "large":
        return css`
          width: 24px;
          height: 24px;
        `;
      case "medium":
      default:
        return css`
          width: 20px;
          height: 20px;
        `;
    }
  }};

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid #8a949e;
      background: #cdd1d5;
    `};

  &:disabled {
    border: 1px solid #8a949e;
    background: #cdd1d5;
  }
`;

const RadioLabel = styled.label<RadioButtonStyleProps>`
  font-size: ${({ $size }) => ($size === "large" ? "17px" : "14px")};
  line-height: 150%;
  font-weight: 400;
  color: ${({ disabled }) => (disabled ? "#868e96" : "#1e2124")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const RadioHelpText = styled.p<RadioButtonStyleProps>`
  margin: ${({ $size }) =>
    $size === "large" ? "4px 0 0 32px" : "4px 0 0 28px"};
  font-size: ${({ $size }) => ($size === "large" ? "17px" : "15px")};
  line-height: 150%;
  color: ${({ disabled }) => (disabled ? "#8A949E" : "#464c53")};
`;

export default RadioButton;
