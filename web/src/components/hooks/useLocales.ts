import ja from '../locales/_ja';
import en from '../locales/_en';

const useLocale = () => {
  const locale = "ja";
  const t = locale === 'ja' ? ja : en;

  return { locale, t };
};

export default useLocale;
