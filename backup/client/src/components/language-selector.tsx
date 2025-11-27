import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="language-selector">
      <Select value={i18n.language} onValueChange={changeLanguage}>
        <SelectTrigger className="w-[120px] bg-white dark:bg-mystic-800 border border-mystic-300 dark:border-mystic-600 text-mystic-700 dark:text-mystic-200 hover:bg-mystic-50 dark:hover:bg-mystic-700 focus:ring-2 focus:ring-mystic-purple focus:border-mystic-purple">
          <SelectValue 
            placeholder={
              <div className="flex items-center gap-2 text-mystic-700 dark:text-mystic-200">
                <span>🌐</span>
                <span className="hidden sm:inline font-medium">Language</span>
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-mystic-800 border border-mystic-300 dark:border-mystic-600 shadow-lg z-50">
          {languages.map((language) => (
            <SelectItem 
              key={language.code} 
              value={language.code}
              className="text-mystic-700 dark:text-mystic-200 hover:bg-mystic-50 dark:hover:bg-mystic-700 focus:bg-mystic-100 dark:focus:bg-mystic-600 cursor-pointer data-[highlighted]:bg-mystic-100 dark:data-[highlighted]:bg-mystic-600"
            >
              {language.flag} {language.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
