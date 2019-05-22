import React from 'react';
import Footer from '../marginals/Footer';
import QNav from './QNav';
import QFeed from './QFeed';

function QDash() {
      return (
            <div className='user-container'>
                  <QNav />
                  <QFeed />
            </div>
      );
}

export default QDash;