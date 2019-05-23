import React from 'react';
import PrivateNav from './PrivateNav';

function Home() {
      return(
            <div className='home-wrap'>
                  <PrivateNav />
                  <div>
                        <h3> this will be a public feed of anonymous questions being asked/answered </h3>

                        <h3> this will not a reddit comment section negativity free for all</h3>
                  </div>
            </div>

      )
}



export default Home;