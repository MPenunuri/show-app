import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import SearchResults from './components/SearchResults.jsx'
import Show from './components/Show.jsx'

export default function Router (){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="search/:name" element={<SearchResults />}/>
          <Route path="show/:id/:name" element={<Show />}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}