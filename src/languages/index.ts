
interface LanguagePack {
  welcome: string, 
  communityListTitle: string,
  appTitle: string,
  rootHomeWelcome: string,
  rootHomeSelectLanguageText: string,
  tryTheAppTitle: string,
  fillTheFormTitle: string,
  goToAppButton: string,
  goToFormButton: string,
  logoutButton: string,
  homeButton: string
}

interface LanguageCode {
  en: string,
  es: string
}

const supportedLanguages = ['en', 'es'];

const getLanguagePack = async(languageCode: keyof LanguageCode): Promise<LanguagePack> =>{
  return (await import(`../languages/${languageCode}.json`));
}
const getLanguagePreference = () => {
  const shortLanguage = navigator.language.slice(0,2);
  const preference = supportedLanguages.includes(shortLanguage) ?  shortLanguage   : 'en';

  return preference as keyof LanguageCode
}



export type {
  LanguagePack,
  LanguageCode
}
export {
  getLanguagePack,
  getLanguagePreference,
  supportedLanguages
  
  
}
