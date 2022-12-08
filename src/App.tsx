import React from 'react';
import Button from './components/Buttons';
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'


let App = () => (
    <div>
      <Button type={''} text={''} />
      <Loading />
      <NewsItem />
    </div>
  );
  
  
  export default App;