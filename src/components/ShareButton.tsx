import { useRouter } from "next/router";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export type ShareButtonProps = PropsWithChildren & {
  text?: string;
  hashtags?: string;
  via?: string;
};

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

function calculateShareURL(currentURL: string, { text, hashtags, via }: ShareButtonProps) {
  const url = new URL(TWEET_INTENT);

  url.searchParams.set('url', currentURL);

  if (text) {
    url.searchParams.set('text', text);
  }

  if (hashtags) {
    url.searchParams.set('hashtags', hashtags);
  }

  if (via) {
    url.searchParams.set('via', via);
  }

  return url;
}

const ShareButton: FC<ComponentProps<"a"> & ShareButtonProps> = (props) => {
  const { text, hashtags, via, children } = props;
  const router = useRouter();
  const url = calculateShareURL(router.asPath, { text, hashtags, via }).toString();

  return (
      <a
        {...props}
        href={url}
        target="_blank"
        rel="external nofollow noopener noreferrer"
        className="share button"
      >
        {children}
      </a>
  );
};

export default ShareButton;
