import React from 'react';
import { shallow, mount, render } from 'enzyme';
import chai, { expect } from 'chai';
import BarChart from '../../js/BarChart';
import { generateData } from '../../js/Helper';

describe('<BarChart />', () => {
  it('should have a div container when data is not empty', () => {
    const len = 10;
    const data = generateData(len);
    const wrapper = render(<BarChart data={data} width={400} height={300} />);

    expect(wrapper.find('svg')).to.have.length(0);
    expect(wrapper.find('.bar-chart')).to.have.length(1);
  });
});
