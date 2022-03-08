import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import enUS from './languages/en-US.json';
import esES from './languages/es-ES.json';

export const LOCALES = {
  ENGLISH: 'en',
  SPANISH: 'es',
};
const MESSAGES = {
  [LOCALES.ENGLISH]: enUS,
  [LOCALES.SPANISH]: esES,
};
function I18NProvider({ children }) {
  const { value: lang } = useSelector((state) => state.language);

  return (
    <IntlProvider
      messages={MESSAGES[lang]}
      locale={lang}
      defaultLocale={LOCALES.ENGLISH}
    >
      {children}
    </IntlProvider>
  );
}
export default I18NProvider;
