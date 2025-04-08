import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>📄 Row {index + 1}</div>
);

function VirtualizedList() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">📦 Virtualization with react-window</h2>
      <List
        height={300}
        itemCount={1000}
        itemSize={35}
        width={300}
      >
        {Row}
      </List>
    </div>
  );
}

export default VirtualizedList;
