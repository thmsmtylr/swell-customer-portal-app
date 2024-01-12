"use client";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
} from "@radix-ui/react-dropdown-menu";
import DotsHorizontal from "/public/dots-horizontal.svg";

export function Dropdown() {
  return (
    <Root>
      <Trigger className="flex h-6 w-6 cursor-pointer items-center justify-center">
        <DotsHorizontal className="h-4 w-4 text-gray-500" />
      </Trigger>
      <Portal>
        <Content className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade flex min-w-32 flex-col rounded-md border border-gray-25 bg-white px-1.5 py-1.5 shadow-lg will-change-[opacity,transform]">
          <Item className="cursor-pointer rounded-[4px] px-2.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Pause
          </Item>
          <Item className="cursor-pointer rounded-[4px] px-2.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Update
          </Item>
          <Item className="cursor-pointer rounded-[4px] px-2.5 py-1.5 text-sm font-medium text-error-600 hover:bg-gray-50">
            Cancel
          </Item>
        </Content>
      </Portal>
    </Root>
  );
}
