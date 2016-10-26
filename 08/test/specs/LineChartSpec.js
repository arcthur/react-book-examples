import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import LineChart from '../../js/LineChart';
import { generateData } from '../../js/Helper';

describe('<LineChart />', () => {
  it('should have a svg container and a path when data is not empty', () => {
    const len = 10;
    const data = generateData(len);
    const wrapper = mount(<LineChart data={data} width={400} height={300} />);

    expect(wrapper.find('svg')).to.have.length(1);
    expect(wrapper.find('path')).to.have.length(1);
  });
});
