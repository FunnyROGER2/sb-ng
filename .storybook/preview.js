
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import docJson from "../documentation.json";

setCompodocJson(docJson);

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Темы',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Светлая' },
        { value: 'dark', icon: 'circle', title: 'Тёмная' }
      ],
    },
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  backgrounds: {
    values: [
      { name: 'blue', value: '#f00' },
      { name: 'yellow', value: '#0f0' },
    ],
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
     ...customViewports,
   },
  },
};

export const decorators = [
  (storyFunc, context) => {
    const story = storyFunc();
    const { component } = story;
    const declarations = story.moduleMetadata ? [...story.moduleMetadata.declarations] : [];

    return {
      ...story,
      moduleMetadata: {
        ...story.moduleMetadata,
        declarations: [
          ...declarations,
          component
        ]
      },
      template: `<div class="theme theme--${context.globals.theme}">${story.template}</div>`
    };
  },
];
