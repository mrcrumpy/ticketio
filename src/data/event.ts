import { IAddress, IEvent } from "@/components/EventList/useEventList";
import { AVAILABLE_LANG, STORES } from "@/constants";

export class TioEvent {
  locale: AVAILABLE_LANG;
  title: string;
  timestamp: Date;
  id: string;
  priceFrom: number;
  location: string;
  storeConfig: {
    currency: string;
  };
  image: string;
  startDate: string;
  endDate: string;
  address: IAddress;

  static from(event: IEvent, locale: AVAILABLE_LANG) {
    if (!event.id || !event.title || !event.startDate) {
      console.error("Malformed event data");
      return undefined;
    }

    return new TioEvent(event, locale);
  }

  static filter(event: TioEvent, searchValue: string) {
    if (!searchValue) return true;
    return event.title
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  }

  constructor(event: IEvent, locale: AVAILABLE_LANG) {
    this.locale = locale;
    this.title = event.title;
    this.timestamp = new Date(event.startDate);
    this.startDate = event.startDate;
    this.endDate = event.endDate;
    this.id = event.id;
    this.priceFrom = event.priceFrom;
    this.image = event.imageUrl;
    this.location = event.location;
    this.storeConfig = STORES[locale];
    this.address = event.address;
  }

  get date() {
    try {
      return Intl.DateTimeFormat(this.locale, {
        weekday: "short",
        year: "numeric",
        day: "2-digit",
        month: "2-digit",
      }).format(this.timestamp);
    } catch (e) {
      return "";
    }
  }

  get time() {
    try {
      return Intl.DateTimeFormat(this.locale, {
        timeStyle: "short",
      }).format(this.timestamp);
    } catch (e) {
      return "";
    }
  }

  get price() {
    return Intl.NumberFormat(this.locale, {
      style: "currency",
      currency: this.storeConfig.currency,
    }).format(this.priceFrom);
  }
}
