import React from 'react';
import { HocSection } from '../../shared/components/hoc/mainViewWrapper/view';
import { StyledSelect } from '../../shared/components/input/select.style';
import { themes } from '../../shared/themes/themes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { chageTheme } from '../../store/themeSlice/actions';
import { CurrentThemeType, setTheme } from '../../store/themeSlice/reducer';

export const SettingsPageView = () => {
  const themeSlice = useAppSelector((state) => state.themeData);
  const dispatch = useAppDispatch();

  const themesData = Object.keys(themes).map((theme) => ({
    name: themes[theme].name,
    value: theme,
  }));

  const options = themesData.map((theme) => (
    <option
      style={{
        background: themes[theme.value].bg.main,
        color: themes[theme.value].color.main,
        padding: '10px',
        cursor: 'pointer',
      }}
      key={theme.name}
      value={theme.value}
    >
      {theme.name}
    </option>
  ));

  return (
    <HocSection>
      <>
        <h2>ustawienia</h2>
        <h3>zmień motyw</h3>
        <StyledSelect
          name='theme'
          defaultValue={themeSlice.currentTheme}
          onChange={(e) =>
            dispatch(setTheme(chageTheme(e.target.value as CurrentThemeType)))
          }
        >
          {options}
        </StyledSelect>
      </>
    </HocSection>
  );
};
