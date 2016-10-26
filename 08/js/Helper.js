import { scaleLinear } from 'd3-scale';
import { range as d3Range, max as d3Max } from 'd3-array';

const getYScale = (data, width, height, margin) => {
  return scaleLinear()
    .domain([0, d3Max(data)])
    .range([height - margin.bottom, margin.top]);
};

const generateData = (len) => {
  const result = [];

  for (let i = 0; i < len; i++) {
    result.push(Math.floor(1000 * Math.random()));
  }

  return result;
};

export { getYScale, generateData };
