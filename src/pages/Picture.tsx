import styled from 'styled-components';
import { AppearFromAbove } from '../styles/Animation';
import { useFetchData } from '../utils/useFetchData';

const LeftContainer = styled.div`
  display: flex;
  flex: 2 1 auto;
  flex-direction: column;
  justify-content: center;
  padding-top: 2.5rem;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  padding-top: 2.5rem;
`;

const MainContainer = styled.div`
  display: flex;
  animation: ${AppearFromAbove} 800ms ease-out;
`;

export const Picture = () => {
  const { data, isLoading } = useFetchData({
    url: 'https://api.nasa.gov/planetary/apod',
    api_key: process.env.REACT_APP_API_KEY,
  });

  console.log(data);

  return (
    <>
      {isLoading || !data ? (
        <div className='flex items-center justify-center'>
          <div className='spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4' role='status'></div>
        </div>
      ) : (
        <MainContainer>
          <LeftContainer>
            <h1 className='text-2xl font-bold'>{data?.title}</h1>
            <img className='max-w-md pr-10 pt-6 lg:max-w-xl' src={data?.url} alt='apod' />
          </LeftContainer>
          <RightContainer>
            <p className='p-12 text-sm xl:text-lg'>{data?.explanation}</p>
          </RightContainer>
        </MainContainer>
      )}
    </>
  );
};
