import React from 'react';
import PrivateNav from './PrivateNav';

function Home() {
      return(
            <div className='home-wrap'>
                  <PrivateNav />
                  <div className='home-card'>
                        <h3> this will be an anonymous live public feed of questions being asked/answered </h3>

                        
                  </div>
            </div>

      )
}



export default Home;