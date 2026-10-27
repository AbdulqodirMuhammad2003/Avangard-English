"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Award, Camera, Download, X, Loader2 } from "lucide-react";
import { Avatar } from "./Avatar";
import { updateProfileAction, type ProfileState } from "@/app/actions";
import type { Certificate } from "@/lib/exam";
import { downloadCertificate } from "@/lib/certificate";
import { useT } from "./LangProvider";

const initialState: ProfileState = {};

export function EditableAvatar({
  name,
  avatarUrl,
  size = 44,
  children,
  triggerClassName = "",
  certificates,
}: {
  name: string;
  avatarUrl?: string | null;
  size?: number;
  /** Ixtiyoriy qo'shimcha kontent (masalan, ism/daraja matni) — mavjud
   *  bo'lsa, u ham rasm bilan birga bosilganda tahrirlash oynasini ochadi. */
  children?: React.ReactNode;
  /** Trigger tugmasining joylashuvini moslashtirish uchun (masalan,
   *  header'da qator, profil kartasida ustun ko'rinishida). */
  triggerClassName?: string;
  /** O'quvchi o'tgan daraja imtihonlari sertifikatlari; berilmasa, bo'lim ko'rsatilmaydi. */
  certificates?: Certificate[];
}) {
  const router = useRouter();
  const t = useT();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [state, formAction, pending] = useActionState(updateProfileAction, initialState);
  const [downloading, setDownloading] = useState<string | null>(null);

  async function download(cert: Certificate) {
    setDownloading(cert.level);
    try {
      await downloadCertificate(cert, name);
    } finally {
      setDownloading(null);
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open && state.ok) {
      setOpen(false);
      setPreview(null);
      router.refresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  }

  const modal = open && (
    <div
      className="fixed inset-0 z-[100] flex animate-fade-in items-start justify-center overflow-y-auto bg-ink-950/40 p-4 py-10 backdrop-blur-sm sm:items-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative my-auto max-h-[85vh] w-full max-w-sm animate-pop-in overflow-y-auto rounded-[2rem] bg-white shadow-2xl ring-1 ring-ink-950/5 dark:bg-[#151a28] dark:ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Muqova: gradient va nuqtali naqsh, avatar uning chetida turadi. */}
        <div className="relative h-28 overflow-hidden bg-gradient-to-br from-azure-500 via-azure-700 to-[#6d28d9]">
          <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-12 left-6 h-32 w-32 rounded-full bg-gold-400/30 blur-2xl" />
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1.2px)", backgroundSize: "16px 16px" }}
          />
          <h3 className="absolute left-5 top-4 font-display text-lg font-bold text-white">{t("Profil", "Profile")}</h3>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 rounded-full bg-white/15 p-1.5 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/25"
            aria-label={t("Yopish", "Close")}
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 pb-6">
        <form action={formAction} className="flex flex-col gap-4">
          <div className="-mt-12 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="group relative overflow-hidden rounded-full ring-4 ring-white shadow-xl dark:ring-[#151a28]"
              aria-label={t("Rasm tanlash", "Choose a photo")}
            >
              <Avatar name={name} size={88} photoUrl={preview || avatarUrl} />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-ink-950/0 text-transparent transition-colors duration-200 group-hover:bg-ink-950/45 group-hover:text-white">
                <Camera size={22} />
              </span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              name="avatar"
              accept="image/*"
              className="hidden"
              onChange={onFileChange}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-xs font-semibold text-ink-600 transition-colors hover:text-ink-800 dark:text-ink-300 dark:hover:text-ink-100"
            >
              {t("Rasm tanlash", "Choose a photo")}
            </button>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-ink-800 dark:text-ink-200">{t("Ism", "Name")}</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              required
              maxLength={60}
              className="w-full rounded-2xl border border-ink-200 bg-ink-50/50 px-4 py-3 text-base outline-none transition-all focus:border-azure-500 focus:bg-white focus:ring-4 focus:ring-azure-100 dark:border-white/10 dark:bg-white/5 dark:text-ink-50 dark:focus:border-azure-400 dark:focus:ring-azure-950"
            />
          </div>

          {state.error && (
            <p className="animate-fade-up rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="btn-press mt-1 flex items-center justify-center gap-2 rounded-full bg-azure-600 py-3 font-display text-base font-bold text-white disabled:opacity-60"
          >
            {pending && <Loader2 size={16} className="animate-spin" />}
            {pending ? t("Saqlanmoqda...", "Saving...") : t("Saqlash", "Save")}
          </button>
        </form>

        {certificates && (
        <div className="mt-6 border-t border-ink-100 pt-5 dark:border-white/10">
          <h4 className="flex items-center gap-2 font-display text-base font-bold text-ink-950 dark:text-ink-50">
            <Award size={18} className="text-gold-500" /> {t("Sertifikatlar", "Certificates")}
          </h4>
          {certificates.length === 0 ? (
            <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
              {t(
                "Daraja imtihonidan o'tganingizdan keyin sertifikatni shu yerdan yuklab olishingiz mumkin.",
                "When you pass a level exam, you can download your certificate here."
              )}
            </p>
          ) : (
            <div className="mt-3 flex flex-col gap-2">
              {certificates.map((cert) => (
                <div
                  key={cert.level}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-gold-50 to-gold-100 px-4 py-3 ring-1 ring-gold-200 dark:from-gold-950/40 dark:to-gold-900/20 dark:ring-gold-800/40"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-ink-950 dark:text-ink-50">{t(`${cert.level} daraja sertifikati`, `${cert.level} level certificate`)}</p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">
                      {cert.pct}% · {cert.number}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => download(cert)}
                    disabled={downloading !== null}
                    className="btn-press flex shrink-0 items-center gap-1.5 rounded-full bg-azure-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-azure-500 disabled:opacity-60"
                  >
                    {downloading === cert.level ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
                    {t("Yuklab olish", "Download")}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group flex items-center rounded-xl transition-opacity duration-150 hover:opacity-90 ${triggerClassName}`}
        aria-label={t("Profilni tahrirlash", "Edit profile")}
      >
        <span
          className="relative shrink-0 overflow-hidden rounded-full transition-transform group-hover:scale-[1.04]"
          style={{ width: size, height: size }}
        >
          <Avatar name={name} size={size} photoUrl={avatarUrl} />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-ink-950/0 text-transparent transition-colors duration-200 group-hover:bg-ink-950/45 group-hover:text-white">
            <Camera size={Math.max(13, Math.round(size * 0.32))} />
          </span>
        </span>
        {children}
      </button>

      {/* Modal document.body'ga portal orqali chiqariladi — shunda u
          header kabi backdrop-blur ishlatuvchi ota elementning ichiga
          "qisilib" qolmaydi (backdrop-filter fixed elementlar uchun yangi
          containing block yaratadi, shu sabab modal ekranga emas, o'sha
          ota elementga nisbatan joylashib qolar edi). */}
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
