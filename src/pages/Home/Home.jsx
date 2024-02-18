import React from 'react';
import Header from '../../component/Home/Header/Header';
import CoinMarket from '../../component/Home/CoinMarket/CoinMarket';
import Plans from '../../component/Home/MiningPlans/Plans';
import Benefit from '../../component/Home/Benefits/Benefit';
import Achievement from '../../component/Home/Achievement/Achievement';


const Home = () => {
  return (
    <section>
      <Header />
      <Achievement />
      <CoinMarket />
      <Plans />
      <Benefit />
    </section>
  );
};

export default Home;
