import { Layout } from './components/Layout';
import { Homepage } from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import { Picture } from './pages/Picture';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/picture' element={<Picture />} />
      </Routes>
    </Layout>
  );
};
