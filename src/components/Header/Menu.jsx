import React, {useState, useEffect} from "react";
import './menu.css'



export default function Menu() {
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 1000);
  }, []);

  return (
    <div id='menu'>
      <ul className={`list ${showList ? 'show' : ''}`}>
        <li>Producto</li>
        <li>Producto</li>
        <li>Producto</li>
        <li>Producto</li>     
      </ul>
    </div>
  );
}
