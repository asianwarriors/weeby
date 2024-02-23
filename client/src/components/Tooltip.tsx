import * as RadixTooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";

interface TooltipProps extends PropsWithChildren {
  content: ReactNode;
}

// @Incomplete: we could probably style the tooltip more nicely
export default function Tooltip({
  children,
  content,
}: TooltipProps): ReactNode {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className="rounded-md px-2 py-1 text-xs bg-black text-white">
            {content}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
