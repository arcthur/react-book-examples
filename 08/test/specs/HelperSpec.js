import React from 'react';
import chai, { expect } from 'chai';
import { getYScale, generateData } from '../../js/Helper';

describe('Helper', () => {
  it('generateData should return an array of number which has specified length', () => {
    const data = generateData(7);

    expect(data.length).to.equal(7);
    expect(data[0] === +data[0]).to.be.true;
  });

  it('getYScale should return a linear scale function', () => {
    const data = generateData(10);
    const scale = getYScale(data, 400, 300, {top: 0, left: 0, right: 0, bottom: 0});

    expect(scale.range().length).to.equal(2);
  });

});
