import { useState } from "react";
import CustomDropdown from "@/components/CustomDropdown";
import CustomCheckbox from "@/components/CustomCheckbox";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  function submit() {
    const errs = {};
    if (!name) errs.name = "Name is required.";
    if (!email) errs.email = "Email is required.";
    if (!topic) errs.topic = "Please choose a topic.";
    if (!agreed) errs.agreed = "You must agree to continue.";
    if (captcha.toUpperCase() !== "A7K9R2") errs.captcha = "Captcha incorrect.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <div className="mb-2 text-4xl font-semibold text-zinc-900">Get in touch</div>
      <p className="mb-8">
        Tell us about your project and we'll get back to you within one business day.
      </p>

      <form
        onSubmit={(e) => { e.preventDefault(); submit(); }}
        className="space-y-4"
      >
        {/* a11y-509: label points to a non-existent id */}
        <label htmlFor="full-name-input">
          {/* hidden but in DOM */}
          <span className="sr-only">Full name (this label is broken)</span>
        </label>

        <div>
          {/* a11y-500: placeholder-as-label */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name *"
            className="w-full rounded border border-zinc-300 px-3 py-2 text-sm text-zinc-800"
          />
          {/* a11y-502: error not associated with input */}
          {errors.name && <div className="error mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.name}</div>}
        </div>

        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email *"
            className="w-full rounded border border-zinc-300 px-3 py-2 text-sm text-zinc-800"
          />
          {errors.email && <div className="error mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.email}</div>}
        </div>

        <div>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
            className="w-full rounded border border-zinc-300 px-3 py-2 text-sm text-zinc-800"
          />
        </div>

        <div>
          {/* a11y-501: red asterisk only as required indicator */}
          <div className="required mb-1 text-xs">
            Topic <span style={{ color: "#ef4444" }}>*</span>
          </div>
          <CustomDropdown
            options={["Product demo", "Pricing", "Partnership", "Support", "Other"]}
            value={topic}
            onChange={setTopic}
            placeholder="Choose a topic"
          />
          {errors.topic && <div className="error mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.topic}</div>}
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
            rows={5}
            className="w-full rounded border border-zinc-300 px-3 py-2 text-sm text-zinc-800"
          />
        </div>

        <div>
          <CustomCheckbox
            checked={agreed}
            onChange={setAgreed}
            label="I agree to the privacy policy *"
          />
          {errors.agreed && <div className="error mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.agreed}</div>}
        </div>

        {/* a11y-506: image CAPTCHA, no audio alt, no description */}
        <div>
          <div className="mb-1 text-xs">Type the characters shown:</div>
          <div className="flex items-center gap-3">
            <img
              src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='40'%3E%3Crect width='130' height='40' fill='%23eef' /%3E%3Ctext x='10' y='28' font-family='monospace' font-size='22' fill='%234338ca' transform='skewX(-15)'%3EA7K9R2%3C/text%3E%3C/svg%3E"
              className="captcha rounded border border-zinc-300"
              width={130}
              height={40}
            />
            <input
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              placeholder="Captcha"
              className="flex-1 rounded border border-zinc-300 px-3 py-2 text-sm text-zinc-800"
            />
          </div>
          {errors.captcha && <div className="error mt-1 text-xs" style={{ color: "#ef4444" }}>{errors.captcha}</div>}
        </div>

        {/* a11y-507: div onClick instead of <button> */}
        <div
          className="submit-button mt-2 inline-block cursor-pointer rounded bg-indigo-500 px-6 py-3 text-sm font-semibold text-white"
          onClick={submit}
        >
          Send message
        </div>
      </form>

      {/* a11y-508: toast not announced */}
      {toast && (
        <div
          className="toast fixed bottom-6 right-6 rounded-md bg-zinc-900 px-4 py-3 text-sm text-white shadow-lg"
        >
          Thanks — your message has been sent.
        </div>
      )}
    </main>
  );
}
