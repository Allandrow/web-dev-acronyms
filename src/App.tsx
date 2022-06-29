import { Route, Routes } from 'react-router-dom';
import { Layout } from '@layout';
import { Result } from '@result';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="acronym/:id" element={<Result />} />
      </Route>
    </Routes>
  );
}

export default App;
