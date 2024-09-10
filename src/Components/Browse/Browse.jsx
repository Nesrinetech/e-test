<<<<<<< HEAD
import React from 'react'
import './Browse.css'
import Casual from '../Assets/Casual.png';
import Formal from '../Assets/Formal.png';
import Party from '../Assets/Party.png';
import Gym from '../Assets/Gym.png';

const Browse = () => {
  return (
    <div className="Browse">
        <div className="Browse-left">
            <h1>BROWSE BY DRESS STYLE</h1>
            <img className="Casual" src={Casual} alt="Casual"/>
            <img className="Formal" src={Formal} alt="Formal"/>
            <img className="Party" src={Party} alt="Party"/>
            <img className="Gym" src={Gym} alt="Gym"/>

        </div>

    </div>
  )
}

=======
import React from 'react'
import './Browse.css'
import Casual from '../Assets/Casual.png';
import Formal from '../Assets/Formal.png';
import Party from '../Assets/Party.png';
import Gym from '../Assets/Gym.png';

const Browse = () => {
  return (
    <div className="Browse">
        <div className="Browse-left">
            <h1>BROWSE BY DRESS STYLE</h1>
            <img className="Causal" src={Casual} alt="Casual"/>
            <img className="Formal" src={Formal} alt="Formal"/>
            <img className="Party" src={Party} alt="Party"/>
            <img className="Gym" src={Gym} alt="Gym"/>

        </div>

    </div>
  )
}

>>>>>>> 9cb35869440e4eef5fd8269e7ed709fe51cd4049
export default Browse