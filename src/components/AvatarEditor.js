import React, { useState } from 'react';
import styles from '../styles/AvatarEditor.css'

const AvatarEditor = () => {
  // State hooks for each part of the avatar
  const [bottom, setBottom] = useState('none');
  const [top, setTop] = useState('none');
  const [feet, setFeet] = useState('none');
  const [weapon, setWeapon] = useState('none');


  // Options for each category
  const pantsOptions = ['none', 'bottoms_basic.png', 'bottoms_armored.png'];
  const shirtOptions = ['none', 'tops_basic.png', 'tops_leather.png'];
  const feetOptions = ['none', 'feet_basic.png', 'feet_armored.png']
  const weaponOptions = ['none', 'weapons_sword_basic.png', 'weapons_sword_red.png']

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

        {feet !== 'none' && (
        <img
          src={`/assets/feet/${feet}`}
          alt="feet"
          className="avatar-part feet"
        />
        )}

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

        {weapon !== 'none' && (
        <img
          src={`/assets/weapons/${weapon}`}
          alt="weapon"
          className="avatar-part weapon"
        />
        )}
      </div>

      {/* Controls for customization */}
      <div className="controls">

        {/* Top Selection */}
        <h3>Select Shirt</h3>
        {shirtOptions.map((option) => (
          <button key={option} onClick={() => setTop(option)}>
            {option.replace('.png', '')}
          </button>
        ))}

        {/*Bottoms Selection */}
        <h3>Select Pants</h3>
        {pantsOptions.map((option) => (
          <button key={option} onClick={() => setBottom(option)}>
            {option.replace('.png', '')}
          </button>
        ))}

        {/*Boots Selectiion*/}
        <h3>Select Boots</h3>
        {feetOptions.map((option) => (
          <button key={option} onClick={() => setFeet(option)}>
          {option.replace('.png', '')}
        </button>
        ))}

        {/*Weapon Selectiion*/}
        <h3>Select Weapon</h3>
        {weaponOptions.map((option) => (
          <button key={option} onClick={() => setWeapon(option)}>
          {option.replace('.png', '')}
        </button>
        ))}
      </div>
    </div>
  );
};

export default AvatarEditor;