import React from 'react';
import { Rate } from 'antd'; // ✅ importer Rate depuis antd

// ✅ définir le tableau de tooltips
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Rating = ({ rate, isRating, searchRate, setSearchRate }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      {isRating ? (
        <div>
          <Rate value={rate} disabled />
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Rate tooltips={desc} onChange={setSearchRate} value={searchRate} />
        </div>
      )}
    </div>
  );
};
// ...existing code...
export default Rating;