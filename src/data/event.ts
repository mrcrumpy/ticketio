import {
  IAddress,
  IEvent,
  ITickets,
} from "@/components/EventList/useEventList";
import { AvailableLang, STORES, TICKET_THRESHOLD } from "@/constants";

export class TioEvent {
  locale: AvailableLang;
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
  info?: string;
  tickets: ITickets;

  static from(event: IEvent, locale: AvailableLang) {
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

  constructor(event: IEvent, locale: AvailableLang) {
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
    this.info = event.info;
    this.tickets = event.tickets;
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

  get detailLink() {
    return `/${this.locale}/event/${this.id}`;
  }

  get soldOut() {
    return this.tickets.amount === 0;
  }

  get warning() {
    return (
      (this.tickets?.amount / this.tickets?.totalAmount) * 100 <
      TICKET_THRESHOLD
    );
  }
}
