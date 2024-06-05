import 'react-i18next';
import enUS from 'i18n/locales/enUS/common.json';
import ptBR from 'i18n/locales/ptBR/common.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      ['en-US']: typeof enUS;
      ['pt-BR']: typeof ptBR;
    };
  }
}
