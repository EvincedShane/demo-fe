# Color-contrast

- Signature: bbbcaa47
- Severity: Serious
- WCAG: WCAG 1.4.3 (Level AA)
- URL: https://demo-fe-orpin.vercel.app/
- Selector: .cursor-pointer
- Screenshot: f738e23e-43be-4734-a32d-eb0a5ff4688c
- Source file: /home/runner/work/sdk-examples-pub/sdk-examples-pub/_autofix_target/components/Footer.js

## Evinced remediation guidance

**Description:**
	Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
	**Failure Summary:**
	Fix at least one (1) of the following
* Element has insufficient color contrast of 2.72 (foreground color: #999999, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1

## Applied patch

```diff
-            className="cursor-pointer rounded border border-zinc-300 px-2 py-1"
+            className="cursor-pointer rounded border border-zinc-300 px-2 py-1 text-zinc-800"
```

Verification: human must confirm fix matches intent.