/** @doc My Prizes — rewards earned from referrals. */
import { Gift } from "lucide-react";
import { useReferrals, fmtDate, GOLD, GOLD_SOFT } from "../ReferralsPage";

export default function PrizesTab() {
  const { earns, totalEarned } = useReferrals();

  if (earns.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <div
          className="grid h-[104px] w-[104px] place-items-center rounded-3xl"
          style={{
            background: "hsl(0 0% 100% / 0.035)",
            border: `1px solid ${GOLD}33`,
          }}
        >
          <Gift className="h-9 w-9" strokeWidth={1.4} style={{ color: GOLD }} />
        </div>
        <p className="mt-6 max-w-[240px] text-[13px] leading-relaxed text-white/45">
          No prizes yet. Invite friends to sign up or subscribe to earn prizes.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-16">
      <div className="rounded-[24px] bg-black ref-gold-hairline p-5 text-center">
        <p className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/45">
          Total prizes
        </p>
        <div
          className="mt-2 text-[40px] font-light leading-none tabular-nums"
          style={{
            background: `linear-gradient(180deg, #ffffff 0%, ${GOLD_SOFT} 60%, ${GOLD} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ${totalEarned.toFixed(2)}
        </div>
      </div>

      <ul className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
        {earns.map((e, i) => (
          <li
            key={e.id}
            className="flex items-center justify-between px-4 py-3.5"
            style={{ borderTop: i === 0 ? undefined : "1px solid hsl(0 0% 100% / 0.05)" }}
          >
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl"
                style={{
                  background: "hsl(0 0% 100% / 0.04)",
                  border: `1px solid ${GOLD}33`,
                }}
              >
                <Gift className="h-4 w-4" strokeWidth={2} style={{ color: GOLD }} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[13.5px] font-medium text-white">{e.source_action}</p>
                <p className="mt-0.5 text-[11px] text-white/45">{fmtDate(e.created_at)}</p>
              </div>
            </div>
            <span
              className="text-[14px] font-light tabular-nums"
              style={{ color: GOLD_SOFT }}
            >
              +${Number(e.amount).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}