/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum QRType {
  URL = "url",
  TEXT = "text",
  PHONE = "phone",
  EMAIL = "email",
  SMS = "sms",
  WIFI = "wifi",
  VCARD = "vcard",
}

export interface QRUrlData {
  url: string;
}

export interface QRTextData {
  text: string;
}

export interface QRPhoneData {
  phoneNumber: string;
}

export interface QREmailData {
  email: string;
  subject: string;
  body: string;
}

export interface QRSmsData {
  phoneNumber: string;
  message: string;
}

export interface QRWifiData {
  ssid: string;
  password?: string;
  encryption: "WPA" | "WEP" | "nopass";
  hidden: boolean;
}

export interface QRVCardData {
  firstName: string;
  lastName: string;
  organization?: string;
  title?: string;
  phoneMobile?: string;
  phoneWork?: string;
  email?: string;
  url?: string;
  addressStreet?: string;
  addressCity?: string;
  addressState?: string;
  addressZip?: string;
  addressCountry?: string;
}

export interface QRConfig {
  fgColor: string;
  bgColor: string;
  size: number;
  margin: number;
  errorCorrectionLevel: "L" | "M" | "Q" | "H";
}

export type ViewPage = "home" | "about" | "privacy" | "terms" | "disclaimer" | "contact";
