import { useMemo, useState } from 'react';

import { Color } from '../utils/Color';

export const useColor = (...props: ConstructorParameters<typeof Color>) => {
  const [colorInstance, setColor] = useState<Color>(new Color(...props));

  const color = useMemo(() => colorInstance.toString(), [colorInstance.toString()]);
  const hex = useMemo(() => colorInstance.hex(), [colorInstance.hex()]);

  const generateColor = () => {
    const instance = colorInstance.random().copy();

    setColor(instance);

    return instance.toString();
  };

  const changeColor = (color: string) => setColor(new Color().parse(color).copy());

  return {
    hex,
    color,
    changeColor,
    generateColor,
  };
};
