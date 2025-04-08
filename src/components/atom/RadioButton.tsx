import styled from "@emotion/styled";

type RadioButtonSize = "large" | "medium";

interface RadioButtonStyleProps {
  $size?: RadioButtonSize;
  $isChecked?: boolean;
  $isDisabled?: boolean;
}

interface RadioButtonProps extends RadioButtonStyleProps {
  label: string;
  helpText?: string;
}

const RadioButton = ({
  label,
  helpText,
  $size,
  $isChecked,
  $isDisabled,
}: RadioButtonProps) => {
  return (
    <>
      <RadioInput
        type="radio"
        $size={$size}
        $isChecked={$isChecked}
        $isDisabled={$isDisabled}
      />
      <RadioLabel htmlFor={label}>{label}</RadioLabel>
      {helpText && <RadioHelpText>{helpText}</RadioHelpText>}
    </>
  );
};

const RadioInput = styled.input<RadioButtonStyleProps>``;

const RadioLabel = styled.label``;

const RadioHelpText = styled.p``;

export default RadioButton;
