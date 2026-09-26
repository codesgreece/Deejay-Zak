"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionHeading, ScrollReveal } from "@/components/ui/ScrollReveal";
import { eventTypeIds } from "@/data/services";
import type { Dictionary } from "@/data/translations";
import { cn } from "@/lib/utils";
import { useState, type FormEvent } from "react";

type BookingSectionProps = {
  dictionary: Dictionary;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guests: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  location: "",
  guests: "",
  message: "",
};

function validate(values: FormState, dictionary: Dictionary): FormErrors {
  const f = dictionary.booking.form;
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = f.required;
  if (!values.email.trim()) errors.email = f.required;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = f.invalidEmail;
  if (!values.phone.trim()) errors.phone = f.required;
  else if (!/^[+\d\s()-]{6,}$/.test(values.phone)) errors.phone = f.invalidPhone;
  if (!values.eventType) errors.eventType = f.required;
  if (!values.eventDate) errors.eventDate = f.required;
  if (!values.location.trim()) errors.location = f.required;
  return errors;
}

/**
 * Submission is intentionally isolated.
 * Wire this to email/API later without changing the form UI.
 */
async function submitBookingRequest(_payload: FormState): Promise<{ ok: boolean }> {
  // TODO: Integrate backend / email provider (Resend, Formspree, API route, etc.)
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true };
}

export function BookingSection({ dictionary }: BookingSectionProps) {
  const t = dictionary.booking;
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values, dictionary);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("loading");
    try {
      const result = await submitBookingRequest(values);
      if (!result.ok) throw new Error("submit failed");
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-none border border-white/15 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition focus:border-magenta/60 focus:shadow-[0_0_0_1px_rgba(236,72,153,0.25)]";

  return (
    <section id="booking" className="section-pad relative">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <SectionHeading eyebrow={t.title} title={t.heading} />
          <MagneticButton
            href="#booking-form"
            className="mt-2"
            cursorLabel={dictionary.cursor.book}
          >
            {t.cta}
          </MagneticButton>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            id="booking-form"
            onSubmit={onSubmit}
            className="space-y-4 border border-white/10 bg-[#10051A]/50 p-5 md:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label={t.form.name}
                error={errors.name}
                htmlFor="name"
              >
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className={fieldClass}
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  required
                />
              </Field>
              <Field label={t.form.email} error={errors.email} htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  required
                />
              </Field>
              <Field label={t.form.phone} error={errors.phone} htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                  value={values.phone}
                  onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                  required
                />
              </Field>
              <Field
                label={t.form.eventType}
                error={errors.eventType}
                htmlFor="eventType"
              >
                <select
                  id="eventType"
                  name="eventType"
                  className={cn(fieldClass, "appearance-none")}
                  value={values.eventType}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, eventType: e.target.value }))
                  }
                  required
                >
                  <option value="">{t.form.selectEvent}</option>
                  {eventTypeIds.map((id) => (
                    <option key={id} value={id} className="bg-[#10051A]">
                      {t.eventTypes[id]}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                label={t.form.eventDate}
                error={errors.eventDate}
                htmlFor="eventDate"
              >
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  className={fieldClass}
                  value={values.eventDate}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, eventDate: e.target.value }))
                  }
                  required
                />
              </Field>
              <Field
                label={t.form.location}
                error={errors.location}
                htmlFor="location"
              >
                <input
                  id="location"
                  name="location"
                  className={fieldClass}
                  value={values.location}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, location: e.target.value }))
                  }
                  required
                />
              </Field>
              <Field label={t.form.guests} htmlFor="guests">
                <input
                  id="guests"
                  name="guests"
                  inputMode="numeric"
                  className={fieldClass}
                  value={values.guests}
                  onChange={(e) => setValues((v) => ({ ...v, guests: e.target.value }))}
                />
              </Field>
            </div>

            <Field label={t.form.message} htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows={4}
                className={cn(fieldClass, "resize-y")}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              />
            </Field>

            <MagneticButton
              type="submit"
              className="w-full sm:w-auto"
              cursorLabel={dictionary.cursor.book}
              disabled={status === "loading"}
            >
              {status === "loading" ? t.form.submitting : t.form.submit}
            </MagneticButton>

            {status === "success" ? (
              <div
                className="border border-magenta/30 bg-magenta/10 px-4 py-3 text-sm text-white"
                role="status"
              >
                <p className="font-semibold">{t.form.successTitle}</p>
                <p className="mt-1 text-soft">{t.form.successBody}</p>
              </div>
            ) : null}

            {status === "error" ? (
              <div
                className="border border-violet/40 bg-violet/10 px-4 py-3 text-sm text-white"
                role="alert"
              >
                <p className="font-semibold">{t.form.errorTitle}</p>
                <p className="mt-1 text-soft">{t.form.errorBody}</p>
              </div>
            ) : null}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-xs tracking-[0.18em] text-white/55 uppercase">
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-magenta" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
