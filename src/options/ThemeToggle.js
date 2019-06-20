import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import ThemeSwitch from '../components/styled_options/ThemeSwitch.js';
import GeneralLabel from '../components/GeneralLabel.js';
import UncheckedToggleIcon from '../components/styled_options/UncheckedToggleIcon.js';
import CheckedToggleIcon from '../components/styled_options/CheckedToggleIcon.js';
import { ToggleColor } from '../components/themes/theme.js';
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
        color={ToggleColor}
        offColor='#FFF29A'
        onColor='#486C5F'
        offHandleColor='#2f1953'
        onHandleColor='#bff2c3'
        height={30}
        width={73}
        uncheckedIcon={<UncheckedToggleIcon>On</UncheckedToggleIcon>}
        checkedIcon={<CheckedToggleIcon>Off</CheckedToggleIcon>}
        className='react-switch'
        id='sepia-switch'
      />
    </ThemeSwitch>
  );
}

export default withTheme(SepiaToggle);
