import axios from 'axios';
import { useEffect, useState } from 'react';
import { ApodData } from '../types';

interface Props {
  url: string;
  api_key?: string;
}
export const useFetchData = ({
  url,
  api_key,
}: Props): { data: ApodData | undefined; setData: React.Dispatch<React.SetStateAction<ApodData | undefined>>; isLoading: boolean } => {
  const [data, setData] = useState<ApodData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      const response = await axios.get(`${url}${api_key && `?api_key=${api_key}`}`, {});
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, setData, isLoading };
};
