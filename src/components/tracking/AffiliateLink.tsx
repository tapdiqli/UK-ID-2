"use client";

import {
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { buildTrackedPartnerUrl } from "@/lib/tracking";

interface AffiliateLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
}
export function AffiliateLink({
  href,
  children,
  className,
  onClick,
  ...props
}: AffiliateLinkProps) {
  const [linkUrl, setLinkUrl] = useState(href);

  useEffect(() => {
    setLinkUrl(buildTrackedPartnerUrl(href));
  }, [href]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const tracked = buildTrackedPartnerUrl(href);
    if (tracked !== linkUrl) setLinkUrl(tracked);
    if (tracked !== event.currentTarget.getAttribute("href")) {
      event.currentTarget.href = tracked;
    }
    onClick?.(event);
  };

  const isExternal = linkUrl.startsWith("http");

  return (
    <a
      href={linkUrl}
      className={className}
      onClick={handleClick}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer sponsored" }
        : {})}
      {...props}
    >
      {children}
    </a>
  );
}
