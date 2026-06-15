# Elements must meet minimum color contrast ratio thresholds

- Signature: effa6ad4
- Severity: Serious
- WCAG: 1.4.3 Contrast (Minimum) (Level AA)
- URL: https://demo-fe-orpin.vercel.app/
- Selector: .hidden > a[href$="products"]
- Screenshot: bdbadadb-7eaa-4f95-8cef-f5e484336a95
- Source file: /components/Header.js

## Evinced remediation guidance

Fix any of the following:
  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

## Applied patch

```diff
-          <Link href="/products" tabIndex={4} className="text-sm text-zinc-700">
+          <Link href="/products" tabIndex={4} className="text-sm text-zinc-800">
```

Updated all navigation links from `text-zinc-700` to `text-zinc-800` for better contrast.

Verification: human must confirm fix matches intent.