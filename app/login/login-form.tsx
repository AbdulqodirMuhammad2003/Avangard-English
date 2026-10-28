"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/actions";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);

  return (
    <form action={action} className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-ink-800">
          Login yoki email
        </label>
        <input
          type="text"
          name="login"
          required
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="username"
          placeholder="O'qituvchi bergan login"
          className="w-full rounded-2xl border border-ink-200 bg-ink-50/60 px-4 py-3 text-base text-ink-900 outline-none transition-all placeholder:text-ink-300 focus:border-azure-500 focus:bg-white focus:ring-4 focus:ring-azure-100"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-ink-800">
          Parol
        </label>
        <input
          type="password"
          name="password"
          required
          placeholder="••••••••"
          className="w-full rounded-2xl border border-ink-200 bg-ink-50/60 px-4 py-3 text-base text-ink-900 outline-none transition-all placeholder:text-ink-300 focus:border-azure-500 focus:bg-white focus:ring-4 focus:ring-azure-100"
        />
      </div>

      {state.error && (
        <p className="animate-fade-up rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-press mt-2 w-full rounded-full bg-azure-600 py-3.5 font-display text-base font-bold text-white disabled:opacity-60"
      >
        {pending ? "Kirilmoqda..." : "Kirish"}
      </button>
    </form>
  );
}
