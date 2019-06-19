import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import ThemeSwitch from '../components/styled_options/ThemeSwitch.js';
import GeneralLabel from '../components/GeneralLabel.js';
import { withTheme } from 'styled-components';
import { getFromLocal, setToLocal } from '../services.js';

function SepiaToggle({ onToggleTheme }) {
  const [checked, setChecked] = useState(getFromLocal('checked') || false);

  useEffect(() => {
    setToLocal('checked', checked);
  }, [checked]);
  return (
    <ThemeSwitch>
      <GeneralLabel htmlFor='sepia-switch'>Sepia skin: </GeneralLabel>
      <Switch
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          onToggleTheme();
        }}
        handleDiameter={25}
        offColor='#FFF29A'
        onColor='#486C5F'
        offHandleColor='#2f1953'
        onHandleColor='#bff2c3'
        height={30}
        width={73}
        uncheckedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 15,
              color: '#2f1953',
              paddingRight: 2
            }}
          >
            On
          </div>
        }
        checkedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 15,
              color: '#bff2c3',
              paddingRight: 2
            }}
          >
            Off
          </div>
        }
        className='react-switch'
        id='sepia-switch'
      />
    </ThemeSwitch>
  );
}

export default withTheme(SepiaToggle);
