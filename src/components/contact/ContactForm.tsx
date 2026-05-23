"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkoezrjg";

type BusinessType = { value: string; label: string };

interface FormValues {
  name: string;
  company: string;
  businessType: string;
  phone: string;
  email: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

export function ContactForm() {
  const t = useTranslations("contact");
  const businessTypes = t.raw("form.businessTypes") as BusinessType[];
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle className="size-12 text-emerald-600" aria-hidden />
        <p className="mt-4 text-lg font-semibold text-emerald-800">
          {t("form.success")}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-lg border border-emerald-300 px-5 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100"
        >
          {t("form.submit")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
          {t("form.name")}
        </label>
        <input
          id="name"
          type="text"
          className={cn(fieldClass, errors.name && "border-red-400")}
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{t("form.required")}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-primary">
          {t("form.company")}
        </label>
        <input
          id="company"
          type="text"
          className={fieldClass}
          {...register("company")}
        />
      </div>

      {/* Business type */}
      <div>
        <label htmlFor="businessType" className="mb-1.5 block text-sm font-medium text-primary">
          {t("form.businessType")}
        </label>
        <select
          id="businessType"
          defaultValue=""
          className={cn(fieldClass, errors.businessType && "border-red-400")}
          {...register("businessType", { required: true })}
        >
          <option value="" disabled>
            {t("form.businessTypePlaceholder")}
          </option>
          {businessTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.businessType && (
          <p className="mt-1 text-sm text-red-500">{t("form.required")}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-primary">
          {t("form.phone")}
        </label>
        <input
          id="phone"
          type="tel"
          dir="ltr"
          className={cn(fieldClass, "text-start", errors.phone && "border-red-400")}
          {...register("phone", { required: true })}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{t("form.required")}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
          {t("form.email")}
        </label>
        <input
          id="email"
          type="email"
          dir="ltr"
          className={cn(fieldClass, "text-start", errors.email && "border-red-400")}
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.type === "pattern"
              ? t("form.invalidEmail")
              : t("form.required")}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
          {t("form.message")}
        </label>
        <textarea
          id="message"
          rows={4}
          className={cn(fieldClass, "resize-y")}
          {...register("message")}
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {t("form.error")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-lg font-semibold text-background transition-colors hover:bg-accent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" && (
          <Loader2 className="size-5 animate-spin" aria-hidden />
        )}
        {status === "submitting" ? t("form.sending") : t("form.submit")}
      </button>
    </form>
  );
}
