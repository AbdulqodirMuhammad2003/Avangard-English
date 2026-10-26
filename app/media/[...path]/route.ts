import { getSession } from "@/lib/auth";
import { MEDIA_BUCKET } from "@/lib/media";

/** Imzolangan havola shuncha soniya amal qiladi — video uchun yetarli. */
const SIGNED_URL_SECONDS = 60 * 60;

/**
 * Yopiq bucket'dagi audio/videoni faqat tizimga kirgan foydalanuvchiga beradi:
 * Supabase Storage'dan qisqa muddatli imzolangan havola olib, unga
 * yo'naltiradi. Kalitlar faqat serverda (SUPABASE_URL,
 * SUPABASE_SERVICE_ROLE_KEY).
 */
export async function GET(_req: Request, { params }: { params: Promise<{ path: string[] }> }) {
  if (!(await getSession())) return new Response("Avval tizimga kiring.", { status: 401 });

  const { path } = await params;
  if (path.some((p) => p === ".." || p === "")) return new Response("Noto'g'ri manzil.", { status: 400 });
  const base = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) return new Response("Media ombori sozlanmagan.", { status: 503 });

  const objectPath = path.map(encodeURIComponent).join("/");
  const res = await fetch(`${base}/storage/v1/object/sign/${MEDIA_BUCKET}/${objectPath}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, apikey: key, "Content-Type": "application/json" },
    body: JSON.stringify({ expiresIn: SIGNED_URL_SECONDS }),
    cache: "no-store",
  });
  if (!res.ok) return new Response("Fayl topilmadi.", { status: 404 });
  const { signedURL } = (await res.json()) as { signedURL: string };

  return new Response(null, {
    status: 302,
    headers: {
      Location: `${base}/storage/v1${signedURL}`,
      // Brauzer yo'naltirishni biroz eslab qoladi (imzo muddatidan qisqa).
      "Cache-Control": "private, max-age=600",
    },
  });
}
