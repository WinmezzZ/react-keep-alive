import { Suspense, useRef } from 'react';
import type { FC, ReactNode } from 'react';

interface OffscreenProps {
  children: ReactNode;
  mode: 'visible' | 'hidden';
}

export const Offscreen: FC<OffscreenProps> = (props) => {
  const { mode, children } = props;
  const resolveRef = useRef<() => void>();
  if (resolveRef.current) {
    resolveRef.current();
    resolveRef.current = void 0;
  }

  const getChild = () => {
    if (mode === 'hidden') {
      throw new Promise<void>((resolve) => (resolveRef.current = resolve));
    }
    return <>{children}</>;
  }
  return (
    <Suspense>
      {getChild()}
    </Suspense>
  );
};