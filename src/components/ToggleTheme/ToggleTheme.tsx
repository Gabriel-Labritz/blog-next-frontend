import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import { BlogThemeContext } from '../../contexts/BlogThemeContext/BlogThemeContext';

export const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((checked) => !checked);
    setTheme(isChecked ? 'inverted' : 'default');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (!localTheme) return;

    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'inverted') {
      setIsChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(isChecked ? 'inverted' : 'default');
  }, [isChecked, setTheme]);

  return (
    <Styled.Container>
      <Styled.Label>
        Toggle Light and dark mode
        <Styled.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={isChecked}
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
    </Styled.Container>
  );
};
