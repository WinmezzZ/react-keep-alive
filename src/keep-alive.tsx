import { useState, useEffect } from 'react';
import { useOutlet, useLocation } from 'react-router-dom';
import { Offscreen } from './offscreen';

export default function KeepAliveOutlet() {
  const [outlets, setOutlets] = useState<any[]>([]);
  const location = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    const result = outlets.some(o => o.pathname === location.pathname);
    if (!result) {
      setOutlets([
        ...outlets,
        {
          key: location.key,
          pathname: location.pathname,
          outlet,
        },
      ]);
    }
  }, [location.pathname, location.key, outlet, outlets]);

  return (
    <>
      {
        outlets.map((o) => {
          return (
            <Offscreen key={o.key} mode={location.pathname === o.pathname ? 'visible' : 'hidden'}>
              {o.outlet}
            </Offscreen>
          );
        })
      }
    </>
  );
}