App Router https://www.cnblogs.com/eddyz/p/17621208.html
Pages Router

```tsx
import Link from 'next/link'

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```


layout


客户端组件 CSR
服务端组件 SSR

ui
https://ui.shadcn.com/docs
tailwind css





[ExchangeRate-API](https://app.exchangerate-api.com/dashboard)


https://v6.exchangerate-api.com/v6/c48b0431bf79f0a21c9978e8/latest/USD

```json
{
    "result": "success",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms_of_use": "https://www.exchangerate-api.com/terms",
    "time_last_update_unix": 1726790401,
    "time_last_update_utc": "Fri, 20 Sep 2024 00:00:01 +0000",
    "time_next_update_unix": 1726876801,
    "time_next_update_utc": "Sat, 21 Sep 2024 00:00:01 +0000",
    "base_code": "USD",
    "conversion_rates": {
        "USD": 1,
        "AED": 3.6725,
        "AFN": 69.4932,
        "ALL": 89.2308,
        "AMD": 387.4298,
        "ANG": 1.79,
        "AOA": 943.6016,
        "ARS": 963.75,
        "AUD": 1.4682,
        "AWG": 1.79,
        "AZN": 1.7021,
        "BAM": 1.7542,
        "BBD": 2,
        "BDT": 119.5699,
        "BGN": 1.7541,
        "BHD": 0.376,
        "BIF": 2905.0535,
        "BMD": 1,
        "BND": 1.2925,
        "BOB": 6.9338,
        "BRL": 5.4253,
        "BSD": 1,
        "BTN": 83.658,
        "BWP": 13.2132,
        "BYN": 3.2441,
        "BZD": 2,
        "CAD": 1.3562,
        "CDF": 2842.5431,
        "CHF": 0.8477,
        "CLP": 930.274,
        "CNY": 7.0707,
        "COP": 4190.0115,
        "CRC": 518.5392,
        "CUP": 24,
        "CVE": 98.8963,
        "CZK": 22.4854,
        "DJF": 177.721,
        "DKK": 6.6887,
        "DOP": 60.1358,
        "DZD": 132.3145,
        "EGP": 48.5229,
        "ERN": 15,
        "ETB": 115.6282,
        "EUR": 0.8969,
        "FJD": 2.1981,
        "FKP": 0.7536,
        "FOK": 6.6887,
        "GBP": 0.7536,
        "GEL": 2.7209,
        "GGP": 0.7536,
        "GHS": 15.7755,
        "GIP": 0.7536,
        "GMD": 70.6554,
        "GNF": 8668.1157,
        "GTQ": 7.7418,
        "GYD": 209.3503,
        "HKD": 7.7942,
        "HNL": 24.8621,
        "HRK": 6.7577,
        "HTG": 131.8006,
        "HUF": 353.4699,
        "IDR": 15217.9064,
        "ILS": 3.7544,
        "IMP": 0.7536,
        "INR": 83.6635,
        "IQD": 1310.1927,
        "IRR": 42101.8026,
        "ISK": 136.8102,
        "JEP": 0.7536,
        "JMD": 157.3488,
        "JOD": 0.709,
        "JPY": 142.833,
        "KES": 129.0121,
        "KGS": 84.4989,
        "KHR": 4065.7833,
        "KID": 1.4681,
        "KMF": 441.2444,
        "KRW": 1327.5731,
        "KWD": 0.3051,
        "KYD": 0.8333,
        "KZT": 479.0194,
        "LAK": 22033.7301,
        "LBP": 89500,
        "LKR": 303.8844,
        "LRD": 199.9872,
        "LSL": 17.4912,
        "LYD": 4.7644,
        "MAD": 9.7132,
        "MDL": 17.4425,
        "MGA": 4529.4094,
        "MKD": 55.3224,
        "MMK": 2102.7084,
        "MNT": 3403.3025,
        "MOP": 8.0282,
        "MRU": 39.6378,
        "MUR": 45.8329,
        "MVR": 15.4516,
        "MWK": 1741.5706,
        "MXN": 19.298,
        "MYR": 4.2161,
        "MZN": 63.9376,
        "NAD": 17.4912,
        "NGN": 1635.4764,
        "NIO": 36.8609,
        "NOK": 10.4968,
        "NPR": 133.8528,
        "NZD": 1.6023,
        "OMR": 0.3845,
        "PAB": 1,
        "PEN": 3.7581,
        "PGK": 3.9302,
        "PHP": 55.5287,
        "PKR": 278.1398,
        "PLN": 3.8293,
        "PYG": 7809.8435,
        "QAR": 3.64,
        "RON": 4.4589,
        "RSD": 104.999,
        "RUB": 92.4788,
        "RWF": 1348.9769,
        "SAR": 3.75,
        "SBD": 8.4919,
        "SCR": 13.6888,
        "SDG": 511.9404,
        "SEK": 10.1605,
        "SGD": 1.2925,
        "SHP": 0.7536,
        "SLE": 22.6876,
        "SLL": 22687.613,
        "SOS": 571.623,
        "SRD": 30.0488,
        "SSP": 2924.5675,
        "STN": 21.974,
        "SYP": 12912.0434,
        "SZL": 17.4912,
        "THB": 33.1548,
        "TJS": 10.6323,
        "TMT": 3.5011,
        "TND": 3.0303,
        "TOP": 2.3246,
        "TRY": 34.0869,
        "TTD": 6.7854,
        "TVD": 1.4681,
        "TWD": 31.8996,
        "TZS": 2718.5753,
        "UAH": 41.4641,
        "UGX": 3720.5374,
        "UYU": 41.1208,
        "UZS": 12728.9681,
        "VES": 36.8013,
        "VND": 24605.2329,
        "VUV": 118.2698,
        "WST": 2.7074,
        "XAF": 588.3258,
        "XCD": 2.7,
        "XDR": 0.7386,
        "XOF": 588.3258,
        "XPF": 107.0285,
        "YER": 250.4722,
        "ZAR": 17.4902,
        "ZMW": 26.3613,
        "ZWL": 13.9711
    }
}
```



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
