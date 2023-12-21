import { useState } from 'react';
import './App.css';
import Product from './component/Product';

function App() {
  const [showProducts, setShowProducts]=useState(true);
  return (
<div>
  {showProducts && <Product/>}
  <button onClick={()=>setShowProducts(!showProducts)}>Toggle</button>
    </div>
  );
}

export default App;

