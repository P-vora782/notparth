"use client";

import Link from "next/link";
import { useState } from "react";

const STORAGE_KEY = "refresh-secret";

type Status = "idle" | "loading" | "done" | "error";

function readSavedSecret(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

export default function RefreshForm() {
  const [secret, setSecret] = useState(readSavedSecret);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function refresh(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });

      if (res.ok) {
        localStorage.setItem(STORAGE_KEY, secret);
        setStatus("done");
        setMessage("Refreshed. New posts are live on the essays page.");
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(body.error ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not reach the server.");
    }
  }

  return (
    <form onSubmit={refresh} className="flex flex-col gap-4 max-w-sm">
      <input
        type="password"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        placeholder="secret"
        autoComplete="off"
        className="border border-border rounded-md px-3 py-2 text-[0.9375rem] bg-transparent outline-none focus:border-foreground transition-colors"
      />
      <button
        type="submit"
        disabled={!secret || status === "loading"}
        className="border border-foreground rounded-md px-3 py-2 text-[0.9375rem] hover:bg-foreground hover:text-background transition-colors disabled:opacity-40 disabled:pointer-events-none"
      >
        {status === "loading" ? "Refreshing..." : "Refresh essays"}
      </button>

      {message && (
        <p
          className={
            status === "error" ? "text-sm text-red-600" : "text-sm text-muted"
          }
        >
          {message}{" "}
          {status === "done" && (
            <Link href="/essays" className="underline underline-offset-2">
              View essays
            </Link>
          )}
        </p>
      )}
    </form>
  );
}
