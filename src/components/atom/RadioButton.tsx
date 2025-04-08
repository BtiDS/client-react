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
    <Container>
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
        <RadioLabel $size={$size}>{label}</RadioLabel>
      </RadioWrapper>
      {helpText && <RadioHelpText>{helpText}</RadioHelpText>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface RadioLabelProps {
  $size?: RadioButtonSize;
  $isDisabled?: boolean;
}

const RadioInput = styled.input<RadioButtonStyleProps>`
  border: 1px solid #58616a;
  background: #fff;

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

  &:disabled {
    border: 1px solid #8a949e;
    background: #cdd1d5;
  }
`;

const RadioLabel = styled.label<RadioLabelProps>`
  font-size: ${({ $size }) => ($size === "large" ? "17px" : "14px")};
  line-height: 150%;
  font-weight: 400;
  color: ${({ $isDisabled }) => ($isDisabled ? "#868e96" : "#1e2124")};
  cursor: ${({ $isDisabled }) => ($isDisabled ? "not-allowed" : "pointer")};
`;

const RadioHelpText = styled.p`
  margin: 4px 0 0 32px;
  font-size: 14px;
  line-height: 150%;
  color: #868e96;
`;

export default RadioButton;
