import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  width: 45%;
  position: absolute;
  left: -1000px;
  transition: all 1.5s ease-in-out;
  &.show {
    left: 5%;
  }
`;

export const Homepage = () => {
  const [showLeftContainer, setShowLeftContainer] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLeftContainer(true), 500);
  }, []);

  return (
    <>
      <div className='p-4 pb-20 text-center text-4xl font-bold tracking-wide'>
        <h1>Witaj w NasApp!</h1>
      </div>
      <Container>
        <LeftContainer className={showLeftContainer === true ? 'show' : ''}>
          <h1 className='text-center text-xl'>Interesuje cię kosmos?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tellus vehicula consectetur varius, justo arcu
            pellentesque nunc, vel faucibus turpis velit mattis nibh. Praesent posuere facilisis tristique. Maecenas egestas iaculis nisi,
            suscipit tempor lorem. Curabitur condimentum quam justo, volutpat finibus diam malesuada vehicula. Maecenas a eros ante. Aenean
            ullamcorper finibus dolor in pellentesque. Ut sodales ut velit non faucibus. Etiam ac bibendum neque. Vestibulum volutpat enim
            velit, ut hendrerit magna faucibus non. Maecenas odio dui, maximus in diam et, sagittis ultricies dui. Vivamus rutrum tellus
            nisi, eget pretium quam aliquet non. Proin fringilla, felis dapibus facilisis maximus, dui dolor commodo mi, id aliquam metus
            neque sit amet lectus. Integer et ipsum lorem. Aenean suscipit scelerisque mauris, id tempor ante molestie eget. Sed arcu leo,
            commodo non sodales viverra, vulputate pellentesque velit. Donec hendrerit urna at massa dictum ultricies. Integer viverra velit
            at volutpat laoreet. Phasellus est nisi, pellentesque quis purus semper, lacinia pharetra eros. Nam nec egestas lacus. Donec
            vehicula nisi eget dapibus volutpat. Phasellus sit amet lacus ultricies, egestas elit ac, tempor dolor. Nunc convallis tristique
            dolor at convallis. Vestibulum interdum mauris sem, eget placerat odio suscipit in. Pellentesque porta risus felis, eget
            malesuada orci tincidunt id.
          </p>
        </LeftContainer>
        <div className='min-h-full w-2/4'></div>
      </Container>
    </>
  );
};
