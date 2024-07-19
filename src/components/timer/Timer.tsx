import React from "react";
import {
  TimerWrapper,
  SVGCircle,
  BackgroundCircle,
  ProgressCircle,
  Text,
} from "./styles";
import { getTimerProperties } from "./utils";
import { PROGRESS_MULTIPLIER, CIRCLE_CIRCUMFERENCE } from "./constants";
import { StatusType } from "@/types";

interface TimerProps {
  status: StatusType;
  liveStatus: string;
}

const Timer: React.FC<TimerProps> = ({ status, liveStatus }) => {
  const { content, color, progress } = getTimerProperties(status, liveStatus);
  const stroke = `${progress * PROGRESS_MULTIPLIER} ${CIRCLE_CIRCUMFERENCE}`;
  return (
    <TimerWrapper>
      <SVGCircle width="100" height="100" viewBox="0 0 100 100">
        <BackgroundCircle cx="50" cy="50" r="45" />
        <ProgressCircle cx="50" cy="50" r="45" strokeDasharray={stroke} />
        <Text x="50%" y="50%" dy=".3em" fill={color}>
          {content}
        </Text>
      </SVGCircle>
    </TimerWrapper>
  );
};

export default Timer;
