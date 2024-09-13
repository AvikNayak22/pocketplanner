export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  { value: "GBP", label: "£ Pound", locale: "en-GB" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
  { value: "AUD", label: "A$ Dollar", locale: "en-AU" },
  { value: "INR", label: "₹ Rupee", locale: "en-IN" },
  { value: "CAD", label: "C$ Dollar", locale: "en-CA" },
  { value: "CHF", label: "₣ Franc", locale: "fr-CH" },
  { value: "CNY", label: "¥ Yuan", locale: "zh-CN" },
  { value: "NZD", label: "NZ$ Dollar", locale: "en-NZ" },
];

export type Currency = (typeof Currencies)[0];
