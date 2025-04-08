import { css } from "@emotion/react";
import styled from "@emotion/styled";

type LinkType = "subtle" | "subtle_none";
type LinkSize = "large" | "medium" | "small";
type LinkState = "hover" | "pressed" | "disabled" | "visited";

interface TextLinkStyleProps {
  $icon?: string;
  $type?: LinkType;
  $size?: LinkSize;
  $state?: LinkState;
}

interface TextLinkProps extends TextLinkStyleProps {
  label: string;
  link: string;
}

const TextLink = ({
  label,
  $icon,
  link,
  $type,
  $state,
  $size = "medium",
}: TextLinkProps) => {
  return (
    <Link
      href={link}
      $type={$type}
      $size={$size}
      $icon={$icon}
      $state={$state}
      onClick={(e) => {
        if ($state === "disabled") {
          e.preventDefault();
        }
      }}
      aria-disabled={$state === "disabled"}
      tabIndex={$state === "disabled" ? -1 : undefined}
    >
      {label}
    </Link>
  );
};

const Link = styled.a<TextLinkStyleProps>`
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  pointer-events: ${({ $state }) => ($state === "disabled" ? "none" : "auto")};
  &::after {
    content: "";
    display: inline-block;
    background: ${({ $icon }) => `url("${$icon}")`} no-repeat center center;
    background-size: contain;
    margin-left: 4px;
  }

  &:hover {
    color: #0b50d0;
    &::after {
      filter: brightness(0) saturate(100%) invert(23%) sepia(97%)
        saturate(1789%) hue-rotate(211deg) brightness(91%) contrast(98%);
    }
  }
  &:active {
    color: #083891;
    &::after {
      filter: brightness(0) saturate(100%) invert(15%) sepia(71%)
        saturate(2195%) hue-rotate(209deg) brightness(89%) contrast(98%);
    }
  }
  &:disabled {
    cursor: not-allowed;
    color: #8a949e;
    &::after {
      filter: brightness(0) saturate(100%) invert(57%) sepia(9%) saturate(361%)
        hue-rotate(174deg) brightness(94%) contrast(89%);
    }
  }
  &:visited {
    color: #5917b8;
    &::after {
      filter: brightness(0) saturate(100%) invert(27%) sepia(51%)
        saturate(2872%) hue-rotate(247deg) brightness(89%) contrast(92%);
    }
  }

  ${({ $type }) => {
    switch ($type) {
      case "subtle":
        return css`
          color: #1e2124;
          text-decoration: underline;
          &::after {
            filter: brightness(0) saturate(100%) invert(11%) sepia(9%)
              saturate(427%) hue-rotate(169deg) brightness(95%) contrast(95%);
          }
        `;
      case "subtle_none":
        return css`
          color: #1e2124;
          text-decoration: none;
          &::after {
            filter: brightness(0) saturate(100%) invert(11%) sepia(9%)
              saturate(427%) hue-rotate(169deg) brightness(95%) contrast(95%);
          }
          &:hover,
          &:active,
          &:visited {
            text-decoration: underline;
          }
        `;
      default:
        return css`
          color: #256ef4;
          text-decoration: underline;
          &::after {
            filter: brightness(0) saturate(100%) invert(37%) sepia(74%)
              saturate(1909%) hue-rotate(206deg) brightness(99%) contrast(96%);
          }
        `;
    }
  }};

  ${({ $state, $type }) => {
    switch ($state) {
      case "hover":
        return css`
          color: #0b50d0;
          ${$type === "subtle_none" && "text-decoration: underline;"}
          &::after {
            filter: brightness(0) saturate(100%) invert(23%) sepia(97%)
              saturate(1789%) hue-rotate(211deg) brightness(91%) contrast(98%);
          }
        `;
      case "pressed":
        return css`
          color: #083891;
          ${$type === "subtle_none" && "text-decoration: underline;"}
          &::after {
            filter: brightness(0) saturate(100%) invert(15%) sepia(71%)
              saturate(2195%) hue-rotate(209deg) brightness(89%) contrast(98%);
          }
        `;
      case "disabled":
        return css`
          cursor: not-allowed;
          color: #8a949e;
          &::after {
            filter: brightness(0) saturate(100%) invert(57%) sepia(9%)
              saturate(361%) hue-rotate(174deg) brightness(94%) contrast(89%);
          }
        `;
      case "visited":
        return css`
          color: #5917b8;
          ${$type === "subtle_none" && "text-decoration: underline;"}
          &::after {
            filter: brightness(0) saturate(100%) invert(27%) sepia(51%)
              saturate(2872%) hue-rotate(247deg) brightness(89%) contrast(92%);
          }
        `;
    }
  }};

  ${({ $size }) => {
    switch ($size) {
      case "large":
        return css`
          font-size: 19px;
          &::after {
            width: 24px;
            height: 24px;
            vertical-align: -4.5px;
          }
        `;
      case "medium":
        return css`
          font-size: 17px;
          &::after {
            width: 20px;
            height: 20px;
            vertical-align: -3.5px;
          }
        `;
      case "small":
        return css`
          font-size: 15px;
          &::after {
            width: 16px;
            height: 16px;
            vertical-align: -2.5px;
            margin-left: 2px;
          }
        `;
    }
  }};
`;

export default TextLink;
