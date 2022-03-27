import { Switch, useTheme } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode';

const ThemeSwitch = () => {
  const darkMode = useDarkMode(false);
  const { type, isDark } = useTheme();

  return (
    <div>
      The current theme is: {type}
      <Switch
        checked={darkMode.value}
        onChange={() => darkMode.toggle()}
      />
    </div>
  )
}

export default ThemeSwitch;