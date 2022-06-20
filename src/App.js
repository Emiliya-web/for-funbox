import './style.scss';
import Card from './components/Card/Card'


function App() {

  const data1 = {
    id: 1,
    meal: 'фуа-гра',
    value: ['40 порций', '2 мыши в подарок'],
    weight: '0,5',
    descr: 'Печень утки разварная с артишоками.',
    disabledText: 'Печалька, с фуа-гра закончился.',
    disabled: false
  }

  const data2 = {
    id: 2,
    meal: 'рыбой',
    value: ['10 порций', 'мышь в подарок'],
    weight: '2',
    descr: 'Головы щучьи с чесноком да свежайшая семгушка.',
    disabledText: 'Печалька, с рыбой закончился.',
    disabled: false
  }

  const data3 = {
    id: 3,
    meal: 'курой',
    value: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    weight: '5',
    descr: 'Филе цыплят с трюфелями в бульоне.',
    disabledText: 'Печалька, с курой закончился.',
    disabled: true
  }

  return (
    <section className='cat'>
      <div className="content">
        <h1 className='content__title'>Ты сегодня покормил кота?</h1>
        <div className="content__wrapper">
          <Card info={data1}/>
          <Card info={data2}/>
          <Card info={data3}/>
        </div>
      </div>
    </section>
  );
}

export default App;
