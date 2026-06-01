# Color-contrast

- Signature: af19e7cc
- Severity: Serious
- WCAG: WCAG-1.4.3
- URL: https://demo-fe-orpin.vercel.app/
- Selector: .border.rounded-lg:nth-child(1) > p
- Screenshot: f738e23e-43be-4734-a32d-eb0a5ff4688c
- Source file: /home/runner/work/sdk-examples-pub/sdk-examples-pub/_autofix_target/pages/index.js

## Evinced remediation guidance

**Description:**
	Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds
	**Failure Summary:**
	Fix at least one (1) of the following
* Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1

## Applied patch

```diff
-              <p className="text-sm">{f.body}</p>
+              <p className="text-sm text-zinc-700">{f.body}</p>
```

Verification: human must confirm fix matches intent.