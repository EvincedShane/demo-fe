# Color-contrast

- Signature: eaafc1a7
- Severity: moderate
- WCAG: WCAG-1.4.3
- URL: https://demo-fe-orpin.vercel.app/
- Selector: .rounded-md.text-white[href$="products"]
- Screenshot: n/a
- Source file: pages/index.js:32

## Evinced remediation guidance

Element has insufficient color contrast of 1.6 (foreground color: #999999, background color: #615fff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

## Applied patch

```diff
- <a href="/products" className="rounded-md bg-indigo-500 px-5 py-3 text-sm text-white">
+ <a href="/products" className="rounded-md bg-indigo-600 px-5 py-3 text-sm text-white">
```

Verification: human must confirm fix matches intent.