import { Layout } from '@layout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('@home'));
const Result = lazy(() => import('@result'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="acronym/:id" element={<Result />} />
      </Route>
    </Routes>
  );
}

export default App;
