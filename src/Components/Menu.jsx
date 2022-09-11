import React from 'react';

import cam1 from '../Images/cam1.png';
import cam2 from '../Images/cam2.png';
import cam3 from '../Images/cam3.png';
import cam4 from '../Images/cam4.png';


export const Menu = () => {

    /*array de objetos con las categorias e iconos */
    const categories01 = [
      {id: 1, category: "catOne", icon: cam1},
      {id: 2, category: "catTwo", icon: cam2},
      {id: 3, category: "catThree", icon: cam3}
    ];

    /* array con mas categorias */
    const categories02 = [
      {id: 4, category: "catFour", icon: cam4}
    ]
 
    //constante con los arrays que se van a renderizar (concatenacion)
    const categories = categories01.concat(categories02);

  return (
    <div>
        <ul>
            {/*map del array que renderiza un <li> por cada categoria */}
            {categories.map((cat) => (
                /*importante poner key unica (id en las propiedades del obj tambien)*/
                <li key={cat.id}>
                  <img 
                    src={cat.icon} 
                    alt="icono" 
                    style={{width: "25px"}}/>
                  {cat.category}
                </li>
            ))}
        </ul>

    </div>
  )
}
