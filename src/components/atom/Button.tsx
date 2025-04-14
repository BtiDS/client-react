import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "@/styles/theme.css";

type ButtonType = "primary" | "secondary";
type ButtonStyle = "filled" | "outline";
type ButtonSize = "large" | "medium" | "small";
type ButtonState = "hover" | "focus" | "pressed" | "disabled";
type ButtonIconPosition = "left" | "right";

interface ButtonStyleProps {
  $iconPosition?: ButtonIconPosition;
  $icon?: string;
  $type?: ButtonType;
  $style?: ButtonStyle;
  $size?: ButtonSize;
  $state?: ButtonState;
}

interface ButtonProps extends ButtonStyleProps {
  label: string;
  onClick?: () => void;
}

const Button = ({
  label,
  onClick,
  $type = "primary",
  $size = "large",
  $state,
  $style = "filled",
  $icon,
  $iconPosition = "right",
}: ButtonProps) => {
  return (
    <Buttons
      $type={$type}
      $icon={$icon}
      $iconPosition={$iconPosition}
      $size={$size}
      $style={$style}
      $state={$state}
      onClick={onClick}
      disabled={$state === "disabled"}
    >
      {label}
    </Buttons>
  );
};

const Buttons = styled.button<ButtonStyleProps>`
  font-weight: 500;
  line-height: 140%;
  letter-spacing: var(--ref-typo-letter-spacing-0);

  ${({ $type, $style }) => {
    if ($type === "primary" && $style === "filled") {
      return css`
        background: var(--com-button-color-background-primary);
        color: var(--com-button-color-text-inverse);
        border: 2px solid transparent;

        &::before,
        &::after {
          filter: brightness(0) saturate(100%) invert(100%);
        }

        &:hover {
          background: var(--com-button-color-background-primary-light);
        }
        &:focus {
          background: var(--com-button-color-background-primary);
          border: 2px solid var(--com-button-color-border-basic);
        }
        &:active {
          background: var(--com-button-color-background-primary-dark);
          border: 2px solid transparent;
        }
        &:disabled {
          background: var(--com-button-color-background-light);
          color: var(--com-button-color-text-lighter);
          cursor: not-allowed;
          &::before,
          &::after {
            filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
              saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
          }
        }
      `;
    } else if ($type === "primary" && $style === "outline") {
      return css`
        background: var(--com-button-color-background-lighter);
        color: var(--com-button-color-text-primary);
        border: 1px solid var(--com-button-color-border-primary);

        &::before,
        &::after {
          filter: brightness(0) saturate(100%) invert(27%) sepia(87%)
            saturate(1823%) hue-rotate(251deg) brightness(89%) contrast(93%);
        }

        &:hover {
          background: var(--com-button-color-background-primary-bright);
        }
        &:focus {
          border: 2px solid var(--com-button-color-border-basic);
        }
        &:active {
          background: var(--com-button-color-background-primary-bright);
          border: 1px solid var(--com-button-color-border-primary-dark);
          color: var(--com-button-color-text-primary-dark);
          &::before,
          &::after {
            filter: brightness(0) saturate(100%) invert(10%) sepia(95%)
              saturate(5876%) hue-rotate(258deg) brightness(89%) contrast(101%);
          }
        }
        &:disabled {
          background: var(--com-button-color-background-light);
          color: var(--com-button-color-text-lighter);
          border: none;
          cursor: not-allowed;
          &::before,
          &::after {
            filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
              saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
          }
        }
      `;
    } else if ($type === "secondary" && $style === "filled") {
      return css`
        background: #a2eacb;
        color: #fff;
        border: 2px solid transparent;

        &::before,
        &::after {
          filter: brightness(0) saturate(100%) invert(100%);
        }

        &:hover {
          background: #c7f2df;
        }
        &:focus {
          background: #76e2b6;
          border: 2px solid #1c1c1e;
        }
        &:active {
          background: #76e2b6;
          border: 2px solid transparent;
        }
        &:disabled {
          background: #f1f3f5;
          color: #868e96;
          cursor: not-allowed;
          &::before,
          &::after {
            filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
              saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
          }
        }
      `;
    } else if ($type === "secondary" && $style === "outline") {
      return css`
        background: #f8f9fa;
        color: #76e2b6;
        border: 1px solid #76e2b6;

        &::before,
        &::after {
          filter: brightness(0) saturate(100%) invert(89%) sepia(11%)
            saturate(1266%) hue-rotate(93deg) brightness(89%) contrast(88%);
        }

        &:hover {
          background: #e8faf2;
        }
        &:focus {
          border: 2px solid #1c1c1e;
        }
        &:active {
          background: #e8faf2;
          border: 1px solid #76e2b6;
        }
        &:disabled {
          background: #f1f3f5;
          color: #868e96;
          border: none;
          cursor: not-allowed;
          &::before,
          &::after {
            filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
              saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
          }
        }
      `;
    }
  }};

  ${({ $type, $style, $state }) => {
    if ($type === "primary" && $style === "filled") {
      switch ($state) {
        case "hover":
          return css`
            background: var(--com-button-color-background-primary-light);
          `;
        case "focus":
          return css`
            background: var(--com-button-color-background-primary);
            border: 2px solid var(--com-button-color-border-basic);
          `;
        case "pressed":
          return css`
            background: var(--com-button-color-background-primary-dark);
          `;
        case "disabled":
          return css`
            background: var(--com-button-color-background-light);
            color: var(--com-button-color-text-lighter);
          `;
      }
    } else if ($type === "primary" && $style === "outline") {
      switch ($state) {
        case "hover":
          return css`
            background: var(--com-button-color-background-primary-bright);
          `;
        case "focus":
          return css`
            border: 2px solid var(--com-button-color-border-basic);
          `;
        case "pressed":
          return css`
            background: var(--com-button-color-background-primary-bright);
            border: 1px solid var(--com-button-color-border-primary-dark);
            color: var(--com-button-color-text-primary-dark);
          `;
        case "disabled":
          return css`
            background: var(--com-button-color-background-light);
            color: var(--com-button-color-text-lighter);
            border: none;
          `;
      }
    } else if ($type === "secondary" && $style === "filled") {
      switch ($state) {
        case "hover":
          return css`
            background: #c7f2df;
          `;
        case "focus":
          return css`
            background: #76e2b6;
            border: 2px solid #1c1c1e;
          `;
        case "pressed":
          return css`
            background: #76e2b6;
          `;
        case "disabled":
          return css`
            background: #f1f3f5;
            color: #868e96;
          `;
      }
    } else if ($type === "secondary" && $style === "outline") {
      switch ($state) {
        case "hover":
          return css`
            background: #e8faf2;
          `;
        case "focus":
          return css`
            border: 2px solid #1c1c1e;
          `;
        case "pressed":
          return css`
            background: #e8faf2;
            border: 1px solid #76e2b6;
          `;
        case "disabled":
          return css`
            background: #f1f3f5;
            color: #868e96;
            border: none;
          `;
      }
    }
  }};

  ${({ $size }) => {
    switch ($size) {
      case "large":
        return css`
          font-size: var(--ref-typo-font-size-body-2);
          height: var(--com-button-height-large);
          border-radius: var(--com-button-radius-large);
          padding: 0 var(--com-button-padding-horizontal-large);
          &::before,
          &::after {
            width: 24px;
            height: 24px;
            vertical-align: -5px;
          }
        `;
      case "medium":
        return css`
          font-size: var(--ref-typo-font-size-body-2);
          height: var(--com-button-height-medium);
          border-radius: var(--com-button-radius-medium);
          padding: 0 var(--com-button-padding-horizontal-medium);
          &::before,
          &::after {
            width: 20px;
            height: 20px;
            vertical-align: -4px;
          }
        `;
      case "small":
        return css`
          font-size: var(--ref-typo-font-size-body-4);
          height: var(--com-button-height-small);
          border-radius: var(--com-button-radius-small);
          padding: 0 var(--com-button-padding-horizontal-small);
          &::before,
          &::after {
            width: 16px;
            height: 16px;
            vertical-align: -2px;
          }
        `;
    }
  }};

  ${({ $iconPosition, $icon }) => {
    if (!$iconPosition || !$icon) return;
    const iconStyle = css`
      content: "";
      display: inline-block;
      background: url("${$icon}") no-repeat center center;
      background-size: contain;
    `;

    switch ($iconPosition) {
      case "left":
        return css`
          &::before {
            ${iconStyle}
            margin-right: 8px;
          }
        `;
      case "right":
        return css`
          &::after {
            ${iconStyle}
            margin-left: 8px;
          }
        `;
    }
  }};
`;

export default Button;
