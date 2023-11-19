"use client";

import { AVAILABLE_LANG, IStoreConfig, PER_PAGE, STORES } from "@/constants";
import { TioEvent } from "@/data/event";
import { useEffect, useState } from "react";
import { chunkArray } from "./helper";

export interface IAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode: string;
  addressCountry: string;
}

export interface IEvent {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  shopUrl: string;
  address: IAddress;
  priceFrom: number;
  location: string;
}

type DisplayMode = "list" | "tiles" | "calendar";

export const useEventList = (
  events: IEvent[],
  locale: AVAILABLE_LANG,
  page: number
) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("list");

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (sessionStorage.getItem("displayMode")) {
      setDisplayMode(sessionStorage.getItem("displayMode") as DisplayMode);
    }
  }, []);

  useEffect(() => {
    sessionStorage?.setItem("displayMode", displayMode);
  }, [displayMode]);

  const processedEvents = events
    .map((event) => TioEvent.from(event, locale))
    .filter((el) => el)
    .filter((el) => TioEvent.filter(el as TioEvent, searchValue));

  const eventPages = chunkArray(processedEvents, PER_PAGE);

  return {
    displayMode,
    setDisplayMode,
    events: eventPages[page - 1] || [],
    pages: eventPages.length,
    setSearchValue,
    currentStore: STORES[locale],
  } as {
    displayMode: DisplayMode;
    setDisplayMode: (value: DisplayMode) => void;
    events: TioEvent[];
    setSearchValue: (value: string) => void;
    currentStore: IStoreConfig;
    pages: number;
  };
};
