import { useState } from 'react';

interface IProps {
  len: number;
}

interface IRecord<T> {
  id: string;
  data: T;
}

export const useHistory = <T>({ len }: IProps) => {
  const [history, setHistory] = useState<IRecord<T>[]>([]);

  const addToHistory = (item: T) =>
    setHistory(prev => {
      const id = Date.now().toString();
      const newHistory = [{ id, data: item }, ...prev];

      if (prev.length >= len) {
        newHistory.pop();
      }

      return newHistory;
    });

  return {
    history,
    addToHistory,
  };
};
