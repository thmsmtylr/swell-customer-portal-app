import { Root, Trigger } from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

interface SelectProps {
  trigger_name: string;
}

export function Select(props: SelectProps) {
  const { trigger_name } = props;
  return (
    <Root>
      <Trigger className="flex items-center gap-1.5 rounded-md border border-gray-200 px-2 py-1.5 text-xs font-medium text-gray-900 outline-none">
        {trigger_name} <ChevronDownIcon className="h-4 w-4" />
      </Trigger>
    </Root>
  );
}
