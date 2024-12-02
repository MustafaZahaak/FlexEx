import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

const langKey = "lang";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  _selectedLanguage: any;
  public _languages: object[] = [
    /*
    {
      lang: "English",
      shortForm: "en",
      flagUrl: "./assets/img/flags/us.png",
    },
    */
    {
      lang: "پښتو",
      shortForm: "ps",
      flagUrl: "./assets/img/flags/afg.png",
    },
    {
      lang: "دری",
      shortForm: "fa",
      flagUrl: "./assets/img/flags/afg.png",
    },
  ];
  constructor() {
    const savedLang = localStorage.getItem(langKey);
    console.log('savedLang',savedLang);
    if (savedLang) {
      this._selectedLanguage = JSON.parse(savedLang);
    } else {
      this._selectedLanguage = this._languages[0];
    }
  }


  /**
   * Gets the languages.
   * @return The languages or null if languages are not available.
   */
  get getLanguages(): any | null {
    return this._languages;
  }

  get getSelectedLanguage(): any | null {
    return this._selectedLanguage;
  }
  /**
   * Sets the lang.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param lang The lang.
   */
  setSelectedLanguage(lang: any) {
    if (lang) {
      const storage = localStorage;
      storage.setItem(langKey, JSON.stringify(lang));
      this._selectedLanguage = lang;
    } else {
      this._selectedLanguage = null;
      localStorage.removeItem(langKey);
    }
  }
}
