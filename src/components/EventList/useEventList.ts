"use client";

import { AVAILABLE_LANG, IStoreConfig, STORES } from "@/constants";
import { TioEvent } from "@/data/event";
import { useEffect, useState } from "react";

export interface IAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
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

export const useEventList = (events: IEvent[], locale: AVAILABLE_LANG) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    sessionStorage !== undefined
      ? (sessionStorage?.getItem("displayMode") as DisplayMode) || "list"
      : "list"
  );

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    sessionStorage?.setItem("displayMode", displayMode);
  }, [displayMode]);

  const processedEvents = events
    .map((event) => TioEvent.from(event, locale))
    .filter((el) => el)
    .filter((el) => TioEvent.filter(el as TioEvent, searchValue));

  return {
    displayMode,
    setDisplayMode,
    events: processedEvents,
    setSearchValue,
    currentStore: STORES[locale],
  } as {
    displayMode: DisplayMode;
    setDisplayMode: (value: DisplayMode) => void;
    events: TioEvent[];
    setSearchValue: (value: string) => void;
    currentStore: IStoreConfig;
  };
};
