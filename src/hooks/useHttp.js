import { useEffect, useState } from 'react';

export const useHttp = (fn, param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fn(param)
      .then(res => setData(res))
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [fn, param]);
  return { data, setData, error, loading };
};
