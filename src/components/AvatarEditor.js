import React, { useState } from 'react';

const AvatarEditor = () => {
  // State hooks for each part of the avatar
  const [bottom, setBottom] = useState('none');
  const [top, setTop] = useState('none');


  // Options for each category
  const pantsOptions = ['none', 'bottoms_basic.png', 'bottoms_armored.png'];
  const shirtOptions = ['none', 'tops_basic.png', 'tops_leather.png'];


  return (
    <div className="avatar-editor">
      <h1>Avatar Editor</h1>

      {/* Avatar display with layers */}
      <div className="avatar-display">
        
        <img
          src="/assets/avatars/avatar_male.png"
          alt="body"
          className="avatar-part body"
        />

        {bottom !== 'none' && (
        <img
          src={`/assets/bottoms/${bottom}`}
          alt="bottoms"
          className="avatar-part bottoms"
        />
        )}

        {top !== 'none' && (
        <img
          src={`/assets/tops/${top}`}
          alt="top"
          className="avatar-part top"
        />
        )}
      </div>

      {/* Controls for customization */}
      <div className="controls">

        <h3>Select Shirt</h3>
        {shirtOptions.map((option) => (
          <button key={option} onClick={() => setTop(option)}>
            {option.replace('.png', '')}
          </button>
        ))}
        <h3>Select Pants</h3>
        {pantsOptions.map((option) => (
          <button key={option} onClick={() => setBottom(option)}>
            {option.replace('.png', '')}
          </button>
        ))}
      </div>

      <style jsx>{`
        .avatar-display {
          position: relative;
          width: 200px;
          height: 400px;
        }

        .avatar-part {
          position: absolute;
          width: 100%;
          height: auto;
        }

        .pants {
          bottom: 0;
        }

        .shirt {
          bottom: 50px;
        }

        .weapon {
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
        }

        .hat {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .controls {
          margin-top: 20px;
        }

        button {
          margin: 5px;
          padding: 10px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default AvatarEditor;