import { Suspense, useRef } from 'react';
import type { FC, ReactNode, SuspenseProps } from 'react';

interface OffscreenProps extends SuspenseProps {
  mode: 'visible' | 'hidden';
}

export const Offscreen: FC<OffscreenProps> = (props) => {
  const { mode, children, ...rest } = props;
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
    <Suspense {...rest}>
      {getChild()}
    </Suspense>
  );
};

Offscreen.defaultProps = {
  fallback: null
}