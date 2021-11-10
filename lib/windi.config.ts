import { defineConfig } from 'windicss/helpers';

interface Config {
  key: string;
  set: (string | number)[];
}

const SPACE_Y: Config = {
  key: 'space-y',
  set: [1, 2, 3, 4, 5],
};

const FLEX_ALIGN: Config = {
  key: 'align',
  set: ['start', 'end', 'center'],
};

const FLEX_JUSTIFY: Config = {
  key: 'justify',
  set: ['start', 'end', 'center', 'between'],
};

const FLEX_GROW: Config = {
  key: 'flex',
  set: ['auto', 'shrink', 'grow', 'none'],
};

function generateSafeList(config: Config[]) {
  return config.map((el) => el.set.map((s) => `${el.key}-${s}`));
}

export default defineConfig({
  darkMode: 'class',
  safelist: generateSafeList([SPACE_Y, FLEX_ALIGN, FLEX_GROW, FLEX_JUSTIFY]),
});
