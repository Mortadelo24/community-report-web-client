
interface LanguagePack {
  welcome: string, 
  communityListTitle: string
}

interface LanguageCode {
  en: string,
  es: string
}

const getLanguagePack = async(languageCode: keyof LanguageCode): Promise<LanguagePack> =>{
  return (await import(`../languages/${languageCode}.json`));
}

export type {
  LanguagePack,
  LanguageCode
}
export {
  getLanguagePack,
  
}
