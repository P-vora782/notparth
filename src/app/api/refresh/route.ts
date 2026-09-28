import { timingSafeEqual } from "crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { SUBSTACK_TAG } from "@/lib/substack";

function isValidSecret(provided: string): boolean {
  const expected = process.env.REFRESH_SECRET;
  if (!expected) return false;

  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  if (!process.env.REFRESH_SECRET) {
    return Response.json({ error: "Refresh is not configured" }, { status: 500 });
  }

  const { secret } = await request.json().catch(() => ({ secret: "" }));
  if (typeof secret !== "string" || !isValidSecret(secret)) {
    return Response.json({ error: "Wrong secret" }, { status: 401 });
  }

  revalidateTag(SUBSTACK_TAG, { expire: 0 });
  revalidatePath("/essays");
  revalidatePath("/essays/[slug]", "page");

  return Response.json({ refreshed: true });
}
