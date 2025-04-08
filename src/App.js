// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemoCallbackExample from './pages/MemoCallbackExample';
import LazyLoadingExample from './pages/LazyLoadingExample';
import VirtualizedList from './pages/VirtualizedList';
import WithoutMemo from './pages/WithoutMemo';
import WithMemo from './pages/WithMemo';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/memo-callback" element={<MemoCallbackExample />} />
      <Route path="/without-memo" element={<WithoutMemo />} />
      <Route path="/with-memo" element={<WithMemo />} />
      <Route path="/lazy-loading" element={<LazyLoadingExample />} />
      <Route path="/virtual-list" element={<VirtualizedList />} />
      </Routes>
    </Router>
  );
}

export default App;
