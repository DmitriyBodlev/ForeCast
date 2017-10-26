import React from 'react';
import { times, not } from 'ramda';
import { TableRectangle, TitleRectangle, Rectangle, DimmerWrapper} from './ui';

const renderDimmerRectangles = (rectangleCount: number) => (
  times((index: number) => <Rectangle key={index} />, rectangleCount)
);

const renderDimmerTable = ({tableCount, rectangleCount}: Object) => (
  times((index: number) => (
    <TableRectangle key={index}>
      {renderDimmerRectangles(rectangleCount)}
    </TableRectangle>
  ), tableCount)
);

export const DimmerComponent = (props: Object) => {

  return (
    <DimmerWrapper>
      <TitleRectangle />
      <Rectangle />
      { props.tableCount && renderDimmerTable(props)}
      {
        not(props.tableCount)
        && props.rectangleCount
        && renderDimmerRectangles(props.rectangleCount) }
    </DimmerWrapper>
  );
};

export default DimmerComponent;
