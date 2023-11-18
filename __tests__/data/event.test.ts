import "@testing-library/jest-dom";
import { TioEvent } from "@/data/event";

describe("Event Logic", () => {
  it("filters event correctly with given searchValue in CAPS and event title in lowercase", () => {
    const searchValue = "ANANAS";
    const event = {
      title: "ananas",
    };

    expect(TioEvent.filter(event, searchValue)).toBe(true);
  });

  it("filters event correctly with given searchValue in lowercase and event title in CAPS", () => {
    const searchValue = "ananas";
    const event = {
      title: "ANANAS",
    };

    expect(TioEvent.filter(event, searchValue)).toBe(true);
  });

  it("event date is formatted correctly in German", () => {
    const startDate = "2023-05-06T22:30:00+02:00";
    const event = new TioEvent({ startDate }, "de");

    expect(event.date).toBe("Sa., 06.05.2023");
  });

  it("event date is formatted correctly in English", () => {
    const startDate = "2023-05-06T22:30:00+02:00";
    const event = new TioEvent({ startDate }, "en");

    expect(event.date).toBe("Sat, 05/06/2023");
  });
});
