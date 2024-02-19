import React from 'react';
import Header from '../../component/Home/Header/Header';
import CoinMarket from '../../component/Home/CoinMarket/CoinMarket';
import Plans from '../../component/Home/MiningPlans/Plans';
import Benefit from '../../component/Home/Benefits/Benefit';
import Achievement from '../../component/Home/Achievement/Achievement';
import Faq from '../../component/Home/Faq/Faq';


const Home = () => {
  return (
    <section>
      <Header />
      <Achievement />
      <CoinMarket />
      <Benefit />
      <Plans />
      <Faq />
    </section>
  );
};

export default Home;
