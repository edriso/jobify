import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/styledWrappers/ChartsContainer';

function ChartsContainer({ data }) {
  const [showBarChart, setShowBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setShowBarChart(!showBarChart)}>
        {showBarChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {showBarChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
}

export default ChartsContainer;
