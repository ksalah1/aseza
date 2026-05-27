"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle, Download, Loader2, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkoezrjg";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-lg border border-primary-200 bg-white px-4 py-3 text-primary outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

interface FieldErrors {
  name?: string;
  whatsapp?: string;
  email?: string;
}

export function ChecklistDownload() {
  const tc = useTranslations("processPage.checklist");
  const t = useTranslations("processPage.checklistForm");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [activity, setActivity] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const headingId = useId();

  function resetForm() {
    setName("");
    setWhatsapp("");
    setEmail("");
    setActivity("");
    setErrors({});
  }

  function close() {
    setOpen(false);
    setStatus("idle");
    resetForm();
    // Return focus to the trigger button.
    triggerRef.current?.focus();
  }

  // Escape to close + focus trap while the modal is open.
  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    // Focus the first focusable element on open.
    const focusables = dialog?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusables?.[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialog) return;
      const items = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    // Prevent background scroll.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function validate(): FieldErrors {
    const errs: FieldErrors = {};
    if (!name.trim()) errs.name = t("required");
    if (!whatsapp.trim()) errs.whatsapp = t("required");
    if (
      email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      errs.email = t("invalidEmail");
    }
    return errs;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          whatsapp,
          email,
          activity,
          source: "checklist_download",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Button
        ref={triggerRef}
        type="button"
        size="lg"
        icon={<Download className="size-5" />}
        className="shrink-0"
        onClick={() => setOpen(true)}
      >
        {tc("button")}
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-900/60 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-background p-6 shadow-xl md:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label={t("close")}
              className="absolute end-4 top-4 rounded-lg p-1.5 text-primary-400 transition-colors hover:bg-primary-50 hover:text-primary"
            >
              <X className="size-5" aria-hidden />
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center py-4 text-center">
                <CheckCircle className="size-12 text-emerald-600" aria-hidden />
                <p className="mt-4 text-lg font-semibold text-primary">
                  {t("success")}
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 rounded-lg border border-primary-200 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-50"
                >
                  {t("close")}
                </button>
              </div>
            ) : (
              <>
                <h2
                  id={headingId}
                  className="pe-8 text-xl font-bold text-primary"
                >
                  {t("title")}
                </h2>
                <p className="mt-2 text-sm text-primary-500">
                  {t("description")}
                </p>

                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="mt-6 space-y-4"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="cl-name"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      {t("name")}
                    </label>
                    <input
                      id="cl-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={cn(fieldClass, errors.name && "border-red-400")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label
                      htmlFor="cl-whatsapp"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      {t("whatsapp")}
                    </label>
                    <input
                      id="cl-whatsapp"
                      type="tel"
                      dir="ltr"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className={cn(
                        fieldClass,
                        "text-start",
                        errors.whatsapp && "border-red-400",
                      )}
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>

                  {/* Email (optional) */}
                  <div>
                    <label
                      htmlFor="cl-email"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      {t("email")}
                    </label>
                    <input
                      id="cl-email"
                      type="email"
                      dir="ltr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={cn(
                        fieldClass,
                        "text-start",
                        errors.email && "border-red-400",
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Activity (optional) */}
                  <div>
                    <label
                      htmlFor="cl-activity"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      {t("activity")}
                    </label>
                    <input
                      id="cl-activity"
                      type="text"
                      placeholder={t("activityPlaceholder")}
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      className={fieldClass}
                    />
                  </div>

                  {status === "error" && (
                    <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      <p>{t("error")}</p>
                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 font-semibold text-red-700 underline-offset-4 hover:underline"
                      >
                        <MessageCircle className="size-4" aria-hidden />
                        {t("whatsappFallback")}
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-background transition-colors hover:bg-accent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" && (
                      <Loader2 className="size-5 animate-spin" aria-hidden />
                    )}
                    {status === "submitting" ? t("sending") : t("submit")}
                  </button>

                  <p className="text-center text-xs text-primary-400">
                    {t("privacy")}
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
