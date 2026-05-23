"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { CheckCircle, Loader2, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkoezrjg";

const HEADING_ID = "contact-heading";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
  // Honeypot — must stay empty for real users.
  website: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

export function ContactForm() {
  const t = useTranslations("contactForm");
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onTouched" });

  async function onSubmit(values: FormValues) {
    // Honeypot tripped: silently drop, behave as success so bots learn nothing.
    if (values.website) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email,
          message: values.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        // Keep field values intact so the user can retry.
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      background="muted"
      className="scroll-mt-24"
      aria-labelledby={HEADING_ID}
    >
      <div className="mx-auto max-w-[560px]">
        <div className="text-center">
          <h2
            id={HEADING_ID}
            className="text-3xl font-bold text-primary md:text-4xl"
          >
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-primary-500">{t("subhead")}</p>
        </div>

        {/* Live region announces success/error to assistive tech. */}
        <div aria-live="polite" className="mt-10">
          {status === "success" ? (
            <div className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <CheckCircle className="size-12 text-emerald-600" aria-hidden />
              <p className="mt-4 text-lg font-semibold text-emerald-800">
                {t("success")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {status === "error" && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {t("errorMessage")}
                </p>
              )}

              {/* Honeypot: hidden from users + assistive tech, off the tab order,
                  visually hidden without display:none so bots still fill it. */}
              <div
                aria-hidden="true"
                className="absolute h-px w-px -translate-x-[9999px] overflow-hidden"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  {t("fields.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={cn(fieldClass, errors.name && "border-red-400")}
                  {...register("name", {
                    required: t("errors.nameRequired"),
                    minLength: { value: 2, message: t("errors.nameRequired") },
                  })}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  {t("fields.phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  dir="ltr"
                  autoComplete="tel"
                  aria-invalid={errors.phone ? "true" : undefined}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={cn(fieldClass, "text-start", errors.phone && "border-red-400")}
                  {...register("phone", {
                    required: t("errors.phoneRequired"),
                    validate: (value) =>
                      /^\+?\d{7,15}$/.test(value.replace(/[\s\-()]/g, "")) ||
                      t("errors.phoneInvalid"),
                  })}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email (optional) */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  {t("fields.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  dir="ltr"
                  autoComplete="email"
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={cn(fieldClass, "text-start", errors.email && "border-red-400")}
                  {...register("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t("errors.emailInvalid"),
                    },
                  })}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message (optional) */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-primary"
                >
                  {t("fields.message")}
                </label>
                <textarea
                  id="message"
                  rows={3}
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(fieldClass, "resize-y", errors.message && "border-red-400")}
                  {...register("message", {
                    maxLength: { value: 1000, message: t("errors.messageMax") },
                  })}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-lg font-semibold text-primary transition-colors hover:bg-accent-500 hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting && <Loader2 className="size-5 animate-spin" aria-hidden />}
                {isSubmitting ? t("sending") : t("submit")}
              </button>

              <p className="text-center">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  {t("whatsapp")}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
