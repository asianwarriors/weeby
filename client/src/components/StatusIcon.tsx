import { MediaStatus } from "@asianwarriors/consumet-extensions";
import Tooltip from "./Tooltip";
import type { ReactNode } from "react";
import {
  CircleBackslashIcon,
  CalendarIcon,
  UpdateIcon,
  CheckCircledIcon,
  QuestionMarkCircledIcon,
  PauseCircleIcon,
} from "./icons";

export default function StatusIcon({
  status,
  iconStyle,
}: {
  status: MediaStatus;
  iconStyle: string;
}): ReactNode {
  switch (status) {
    case MediaStatus.CANCELLED:
      return (
        <Tooltip content="This media has been cancelled">
          <CircleBackslashIcon color="red" className={iconStyle} />
        </Tooltip>
      );
    case MediaStatus.HIATUS:
      return (
        <Tooltip content="Currently on hiatus">
          <PauseCircleIcon color="orange" className={iconStyle} />
        </Tooltip>
      );
    case MediaStatus.NOT_YET_AIRED:
      return (
        <Tooltip content="Awaiting release">
          <CalendarIcon color="blue" className={iconStyle} />
        </Tooltip>
      );
    case MediaStatus.ONGOING:
      return (
        <Tooltip content="Currently airing">
          <UpdateIcon color="purple" className={iconStyle} />
        </Tooltip>
      );
    case MediaStatus.COMPLETED:
      return (
        <Tooltip content="Production has finished">
          <CheckCircledIcon color="green" className={iconStyle} />
        </Tooltip>
      );
    default:
      return (
        <Tooltip content="Status information not available">
          <QuestionMarkCircledIcon color="grey" className={iconStyle} />
        </Tooltip>
      );
  }
}
