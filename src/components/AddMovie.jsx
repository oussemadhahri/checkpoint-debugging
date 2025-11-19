import React, { useState } from 'react';

const AddMovie = ({ movieAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rate, setRate] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      posterUrl: posterUrl.trim() || 'https://via.placeholder.com/200x300?text=No+Image',
      rate: Number(rate) || 1,
    };

    movieAdd(newMovie);
    setTitle('');
    setDescription('');
    setPosterUrl('');
    setRate(1);
    if (typeof onClose === 'function') onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{width: '100%', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px'}}>
      {posterUrl && (
        <div style={{textAlign: 'center'}}>
          <img
            src={posterUrl}
            alt="poster preview"
            style={{width: '100%', maxHeight: 320, objectFit: 'cover', borderRadius: 6, marginBottom: 6}}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x600?text=No+Image'; }}
          />
        </div>
      )}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
        <label style={{minWidth: '60px'}}>Rate</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          style={{width: '80px'}}
        />
        <button type="submit" style={{marginLeft: 'auto'}}>Add Movie</button>
      </div>
    </form>
  );
};

export default AddMovie;
