import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
  border-radius: 8px;

  ${({ $type, $style }) => {
    if ($type === "primary" && $style === "filled") {
      return css`
        background: #5521bd;
        color: #fff;
        border: 2px solid transparent;

        &::before,
        &::after {
          filter: brightness(0) saturate(100%) invert(100%);
        }

        &:hover {
          background: #6e2fcc;
        }
        &:focus {
          background: #5521bd;
          border: 2px solid #1c1c1e;
        }
        &:active {
          background: #2d08ab;
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
    } else if ($type === "primary" && $style === "outline") {
      return css`
        background: #f8f9fa;
        color: #5521bd;
        border: 1px solid #5521bd;

        &::before,
        &::after {
          filter: brightness(0) saturate(100%) invert(27%) sepia(87%)
            saturate(1823%) hue-rotate(251deg) brightness(89%) contrast(93%);
        }

        &:hover {
          background: #eee7f9;
        }
        &:focus {
          border: 2px solid #1c1c1e;
        }
        &:active {
          background: #eee7f9;
          border: 1px solid #2d08ab;
          color: #2d08ab;
          &::before,
          &::after {
            filter: brightness(0) saturate(100%) invert(10%) sepia(95%)
              saturate(5876%) hue-rotate(258deg) brightness(89%) contrast(101%);
          }
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
            background: #6e2fcc;
          `;
        case "focus":
          return css`
            background: #5521bd;
            border: 2px solid #1c1c1e;
          `;
        case "pressed":
          return css`
            background: #2d08ab;
          `;
        case "disabled":
          return css`
            background: #f1f3f5;
            color: #868e96;
          `;
      }
    } else if ($type === "primary" && $style === "outline") {
      switch ($state) {
        case "hover":
          return css`
            background: #eee7f9;
          `;
        case "focus":
          return css`
            border: 2px solid #1c1c1e;
          `;
        case "pressed":
          return css`
            background: #eee7f9;
            border: 1px solid #2d08ab;
            color: #2d08ab;
          `;
        case "disabled":
          return css`
            background: #f1f3f5;
            color: #868e96;
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
          font-size: 18px;
          height: 56px;
          padding: 14px 32px;
          &::before,
          &::after {
            width: 24px;
            height: 24px;
            vertical-align: -5px;
          }
        `;
      case "medium":
        return css`
          font-size: 16px;
          height: 48px;
          padding: 12px 28px;

          &::before,
          &::after {
            width: 20px;
            height: 20px;
            vertical-align: -4px;
          }
        `;
      case "small":
        return css`
          font-size: 14px;
          height: 36px;
          font-weight: 400;
          padding: 8px 32px;
          border-radius: 4px;
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
