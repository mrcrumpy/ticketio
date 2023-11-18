import { ReactElement } from "react";
import { I18nProviderClient } from "@/locales/client";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket.io Probeaufgabe",
  description: "",
};

export default function SubLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <html lang={locale}>
      <body className={vazirmatn.className}>
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
      </body>
    </html>
  );
}
