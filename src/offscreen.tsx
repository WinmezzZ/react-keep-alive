import { Suspense } from 'react';
import type { FC, ReactNode, SuspenseProps } from 'react';
import { Repeater } from './repeater';

interface OffscreenProps extends SuspenseProps {
  mode: 'visible' | 'hidden';
  fallback?: ReactNode
}

export const Offscreen: FC<OffscreenProps> = (props) => {
  const { mode, children, fallback } = props;

  return (
    <Suspense fallback={fallback}>
      <Repeater mode={mode}>{children}</Repeater>
    </Suspense>
  );
};