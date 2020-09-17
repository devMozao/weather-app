/* Nord Theme Color Pallete for JS Projects
 *
 * Created by: Diogo Fonseca
 * Twitter/Github: @devMozao
 *
 * Based on the original Nord Theme Project
 * https://www.nordtheme.com
 *
 * PS: The 'canvas' colors are a direct reference
 * from their body website with dark/light theme.
 * The same applies for the LightTheme.light color.
 */

const NordTheme = {
  // Polar Night
  nord0: '#2E3440',
  nord1: '#3B4252',
  nord2: '#434C5E',
  nord3: '#4C566A',
  // Snow Storm
  nord4: '#D8DEE9',
  nord5: '#E5E9F0',
  nord6: '#ECEFF4',
  // Frost
  nord7: '#8FBCBB',
  nord8: '#88C0D0',
  nord9: '#81A1C1',
  nord10: '#5E81AC',
  // Aurora
  nord11: '#BF616A',
  nord12: '#D08770',
  nord13: '#EBCB8B',
  nord14: '#A3BE8C',
  nord15: '#B48EAD',
}

const DarkTheme = {
  dark: NordTheme.nord0,
  primary: NordTheme.nord1,
  secondary: NordTheme.nord2,
  light: NordTheme.nord3,
  canvas: '#242933',
}

const LightTheme = {
  dark: NordTheme.nord4,
  primary: NordTheme.nord6,
  secondary: NordTheme.nord5,
  light: '#F8F9FB',
  canvas: '#F2F4F8',
}

const colors = {
  theme: {
    ...DarkTheme,
    ...LightTheme,
  },
  ref: NordTheme,
}

export default colors
