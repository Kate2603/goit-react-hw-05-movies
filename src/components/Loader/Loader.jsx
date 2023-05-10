import { ColorRing } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => (
  <Container>
    <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['gray', '#f47e60', '#f8b26a', '#f47e60', 'gray']}
    />
  </Container>
);