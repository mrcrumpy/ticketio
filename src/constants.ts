export const STORES = {
  de: {
    currency: "EUR",
    name: "Bootshaus",
    logo: "/img/logo.jpeg",
  },
  en: {
    currency: "GBP",
    name: "Bootshaus",
    logo: "/img/logo.jpeg",
  },
} as {
  [key: string]: IStoreConfig;
};

export const DEFAULT_STORE = "de";

export type AvailableLang = "de" | "en";

export interface IStoreConfig {
  currency: string;
  name: string;
  logo: string;
}

export const PER_PAGE = 8;
