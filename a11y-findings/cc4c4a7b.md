# Color-contrast

- Signature: cc4c4a7b
- Severity: SERIOUS
- WCAG: 2.1 AA
- URL: https://demo-fe-orpin.vercel.app/
- Selector: .flex-col > div:nth-child(1)
- Screenshot: bdbadadb-7eaa-4f95-8cef-f5e484336a95
- Source file: /home/runner/work/sdk-examples-pub/sdk-examples-pub/_autofix_target/components/Footer.js

## Evinced remediation guidance

Fix color contrast - Element has insufficient color contrast of 2.72 (foreground color: #999999, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

## Applied patch

```diff
- <div>© 2026 Evinced demo. All wrongs reserved.</div>
+ <div className="text-zinc-600">© 2026 Evinced demo. All wrongs reserved.</div>
```

Verification: human must confirm fix matches intent.