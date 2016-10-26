import React, { PropTypes } from 'react';
import { line as shapeLine, curveMonotoneX } from 'd3-shape';
import { scalePoint } from 'd3-scale';
import { range as d3Range } from 'd3-array';
import { getYScale } from './Helper';

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.number),
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),
};
const defaultProps = {
  margin: { top: 10, right: 10, bottom: 30, left: 40 },
};

const getXScale = (data, width, height, margin) => {
  return scalePoint()
    .domain(d3Range(data.length))
    .range([margin.left, width - margin.right]);
};

const renderXAxis = (scale, width, height, margin) => {
  const y = height - margin.bottom;

  const ticks = scale.domain().map((entry, index) => {
    const x = scale(index);

    return (
      <g className="x-axis-tick" key={`tick-${index}`}>
        <line x1={x} x2={x} y1={y} y2={y + 6} stroke="#808080" />
        <text x={x} y={y + 8} textAnchor="middle" dominantBaseline="hanging">{index}</text>
      </g>
    );
  });

  return (
    <g className="x-axis">
      <line x1={margin.left} y1={y} x2={width-margin.right} y2={y} stroke="#808080" />
      {ticks}
    </g>
  );
};

const renderYAxis = (scale, width, height, margin) => {
  const x = margin.left;

  const ticks = scale.ticks(5).map((entry, index) => {
    const y = scale(entry);

    return (
      <g className="y-axis-tick" key={`tick-${index}`}>
        <line y1={y} y2={y} x1={x - 6} x2={x} stroke="#808080" />
        <text x={x - 10} y={y} dominantBaseline="central" textAnchor="end">{entry}</text>
      </g>
    );
  });

  return (
    <g className="y-axis">
      <line x1={x} x2={x} y1={margin.top} y2={height - margin.bottom} stroke="#808080" />
      {ticks}
    </g>
  );
};

const renderPath = (data, xScale, yScale) => {
  const points = data.map((entry, index) => [xScale(index), yScale(entry)]);
  const l = shapeLine()
           .x(p => p[0])
           .y(p => p[1])
           .defined(p => p[0] === +p[0] && p[1] === + p[1])
           .curve(curveMonotoneX);
  const path = l(points);

  const dots = points.map((entry, index) => (
    <circle
      key={`dot-${index}`}
      cx={entry[0]}
      cy={entry[1]}
      r={4}
      strokeWidth={2}
      fill="#fff"
      stroke="#ff7300"
    />
  ));

  return (
    <g className="line">
      <path d={path} fill="none" stroke="#ff7300" strokeWidth={2}/>
      {dots}
    </g>
  );
};

const LineChart = (props) => {
  const { width, height, data, margin } = props;
  const xScale = getXScale(data, width, height, margin);
  const yScale = getYScale(data, width, height, margin);

  return (
    <div>
      <svg width={width} height={height}>
        {renderXAxis(xScale, width, height, margin)}
        {renderYAxis(yScale, width, height, margin)}
        {renderPath(data, xScale, yScale)}
      </svg>
    </div>
  );
};

LineChart.propTypes = propTypes;
LineChart.defaultProps = defaultProps;

export default LineChart;
