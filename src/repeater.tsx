import { useRef } from "react";
import type { FC, ReactNode } from "react";

export const Repeater: FC<{
  mode: "visible" | "hidden";
  children: ReactNode;
}> = (props) => {
  const { mode, children } = props;
  const resolveRef = useRef<() => void>();

  if (resolveRef.current) {
    resolveRef.current();
    resolveRef.current = void 0;
  }
  if (mode === "hidden") {
    throw new Promise<void>((resolve) => (resolveRef.current = resolve));
  }
  return <>{children}</>;
};
