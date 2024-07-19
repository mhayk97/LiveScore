import styled from "styled-components";

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  position: relative;
  font-size: ${(props) => props.theme.typography.fontSize.xLarge};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.typography.fontSize.large};
    margin: ${(props) => props.theme.spacing.md} 0;
  }
`;

export const SVGCircle = styled.svg`
  width: 100%;
  height: 100%;
`;

export const BackgroundCircle = styled.circle`
  fill: none;
  stroke: #575e58;
  stroke-width: 2;
`;

export const ProgressCircle = styled.circle<{
  strokeDasharray: string;
}>`
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke: #1aad1a;
  ${({ strokeDasharray }) => `
    stroke-dasharray: ${strokeDasharray};
  `}
`;

export const Text = styled.text`
  text-anchor: middle;
  font-size: ${(props) => props.theme.typography.fontSize.xLarge};
`;
