import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import MyBlog from './components/myBlog/myBlog';
import './App.css';
import NotFound from './components/notFound/notFound';
import PrivateRoute from './components/common/privateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/myblog"
          element={
            <PrivateRoute>
              <MyBlog />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
