import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonEn from "./en/common.json";
import productsEn from "./en/products.json";
import woodTypesEn from "./en/woodTypes.json";
import insightsEn from "./en/productInsights.json";
import menuEn from "./en/menuSection.json";
import insightLinksEn from "./en/insightLinks.json";
import slidesEn from "./en/slides.json";

import commonCs from "./cs/common.json";
import productsCs from "./cs/products.json";
import woodTypesCs from "./cs/woodTypes.json";
import insightsCs from "./cs/productInsights.json";
import menuCs from "./cs/menuSection.json";
import insightLinksCs from "./cs/insightLinks.json";
import slidesCs from "./cs/slides.json";

import commonSk from "./sk/common.json";
import productsSk from "./sk/products.json";
import woodTypesSk from "./sk/woodTypes.json";
import insightsSk from "./sk/productInsights.json";
import menuSk from "./sk/menuSection.json";
import insightLinksSk from "./sk/insightLinks.json";
import slidesSk from "./sk/slides.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "cs",
    lng: "cs",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: commonEn,
        products: productsEn,
        woodTypes: woodTypesEn,
        productInsights: insightsEn,
        menu: menuEn,
        insightLinks: insightLinksEn,
        slides: slidesEn
      },
      cs: {
        common: commonCs,
        products: productsCs,
        woodTypes: woodTypesCs,
        productInsights: insightsCs,
        menu: menuCs,
        insightLinks: insightLinksCs,
        slides: slidesCs
      },
      sk: {
        common: commonSk,
        products: productsSk,
        woodTypes: woodTypesSk,
        productInsights: insightsSk,
        menu: menuSk,
        insightLinks: insightLinksSk,
        slides: slidesSk
      }
    },
    ns: ["common", "products", "woodTypes", "productInsights", "menu", "insightLinks", "slides"],
    defaultNS: "common",
  });

export default i18n;