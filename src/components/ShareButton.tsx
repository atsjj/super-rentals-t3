import type { FC, PropsWithChildren } from "react";

export type ShareButtonProps = PropsWithChildren & {
  text?: string;
  hashtags?: string;
  via?: string;
};

const ShareButton: FC<ShareButtonProps> = ({ text, hashtags, via, children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default ShareButton;
