import { Link } from 'react-router-dom';
import growIcon from '../assets/images/Grow_icon.png';
import scaleIcon from '../assets/images/Scale_icon.png';
import startIcon from '../assets/images/Start_icon.png';

function ChallengeScss() {
  return (
    <main className='challenge'>
      <Link to='/' exact>
        Back to information
      </Link>
      <section className='plans'>
        <header className='plans__header'>
          <h1 className='plans__title'>Plans</h1>
        </header>
        <div className='plans__container'>
          <div className='plans__item'>
            <div className='plans__item__header'>
              <img src={startIcon} alt='icon start' /> Start{' '}
            </div>
            <div className='plans__item__year'></div>
            <div className='plans__item__month'></div>
            <div className='plans__item__included'>
              <ul className='plans__item__list'>
                <p></p>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='plans__item'>
            <div className='plans__item__header'>
              <img src={growIcon} alt='icon grow' /> Start{' '}
            </div>
            <div className='plans__item__year'></div>
            <div className='plans__item__month'></div>
            <div className='plans__item__included'>
              <ul className='plans__item__list'>
                <p></p>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className='plans__item'>
            <div className='plans__item__header'>
              <img src={scaleIcon} alt='icon scale' /> Start{' '}
            </div>
            <div className='plans__item__year'></div>
            <div className='plans__item__month'></div>
            <div className='plans__item__included'>
              <ul className='plans__item__list'>
                <p></p>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='compare-plans'>
        <header>
          <h1>Compare plans</h1>
          <small>Please note Capdesk's pricing structure.</small>
        </header>
      </section>
    </main>
  );
}

export default ChallengeScss;
