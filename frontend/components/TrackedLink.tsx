'use client';

import { track } from '@vercel/analytics';
import type { AnchorHTMLAttributes, MouseEvent } from 'react';

type EventValue = string | number | boolean;

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventData?: Record<string, EventValue>;
};

export function TrackedLink({ eventName, eventData, onClick, ...props }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    track(eventName, eventData);
    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}
