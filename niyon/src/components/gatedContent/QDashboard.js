import Footer from '../marginals/Footer';
import QNav from './QNav';
import QFeed from './QFeed';

function QDash() {
      return (
            <div className='user-container'>
                  <QNav />
                  <QFeed />
                  <Footer />
            </div>
      );
}

export default QDash;