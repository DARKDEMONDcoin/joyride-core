/** @doc Mobile referral hero — Moonshot-style prize fan, invite CTA and task cards. */
import { useNavigate } from "react-router-dom";
import { ChevronRight, Share2, Copy, Check, Users, Wallet } from "lucide-react";
import PrizeFan from "./PrizeFan";
import { useReferrals, GOLD, GOLD_SOFT, COMMISSION_PCT, CREDITS_PER_SIGNUP } from "../../ReferralsPage";

export default function MoonshotHero({ onShareClick }: { onShareClick?: () => void }) {
  const navigate = useNavigate();
  const { refs, signups, available, totalEarned, shareLink, copyLink, justCopied, code } =
    useReferrals();

  const subscribed = refs.filter((r) => r.status === "active" || r.status === "approved").length;

  const prizes = [
    { label: "Signup bonus", value: `+${CREDITS_PER_SIGNUP}`, unit: "credits per friend" },
    { label: "Lifetime cash", value: `${COMMISSION_PCT}%`, unit: "of every payment" },
    { label: "Friend gets", value: "5%", unit: "off any plan" },
  ];

  return (
    <div className="px-4 pb-10 pt-2">
      {/* Program title */}
      <div className="text-center">
        <p className="text-[10.5px] font-medium uppercase tracking-[0.26em] text-white/40">
          Megsy Together
        </p>
        <h1
          className="mt-2 text-[27px] leading-[1.1]"
          style={{
            fontWeight: 300,
            letterSpacing: "-0.03em",
            background: `linear-gradient(180deg, #ffffff 0%, ${GOLD_SOFT} 62%, ${GOLD} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Invite friends,
          <br />
          earn every month.
        </h1>
      </div>

      {/* Fanned prize cards */}
      <div className="mt-5">
        <PrizeFan prizes={prizes} />
      </div>

      <p className="mt-1 text-center text-[12.5px] text-white/55">
        {COMMISSION_PCT}% lifetime cash · +{CREDITS_PER_SIGNUP} credits per signup
      </p>

      {/* Primary CTA */}
      <button
        onClick={() => shareLink()}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-[14px] font-semibold text-black transition active:scale-[0.98]"
        style={{
          background: `linear-gradient(180deg, ${GOLD_SOFT} 0%, ${GOLD} 60%, #8B5E22 100%)`,
          boxShadow: `0 16px 40px -16px ${GOLD}90, inset 0 1px 0 rgba(255,255,255,0.45)`,
        }}
      >
        <Share2 className="h-4 w-4" strokeWidth={2.4} />
        Invite to earn rewards
      </button>

      {/* Secondary row */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          onClick={copyLink}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] py-3 text-[12.5px] font-medium text-white/80 transition active:scale-[0.98]"
        >
          {justCopied ? (
            <Check className="h-3.5 w-3.5" strokeWidth={2.4} style={{ color: GOLD }} />
          ) : (
            <Copy className="h-3.5 w-3.5" strokeWidth={2} />
          )}
          {justCopied ? "Copied" : code ? code : "Copy link"}
        </button>
        <button
          onClick={onShareClick}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] py-3 text-[12.5px] font-medium text-white/80 transition active:scale-[0.98]"
        >
          QR code
        </button>
      </div>

      {/* My prizes link */}
      <button
        onClick={() => navigate("/settings/referrals/prizes")}
        className="mt-4 flex w-full items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 text-left transition active:scale-[0.99]"
      >
        <span className="text-[13.5px] font-medium text-white">My Prizes</span>
        <span className="inline-flex items-center gap-1 text-[12px] text-white/45">
          {signups} earned
          <ChevronRight className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>

      {/* Stats */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5">
          <div className="flex items-center gap-1.5 text-white/45">
            <Users className="h-3.5 w-3.5" strokeWidth={2} style={{ color: GOLD }} />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em]">Invited</span>
          </div>
          <div className="mt-1.5 text-[24px] font-light tabular-nums text-white">{refs.length}</div>
        </div>
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5">
          <div className="flex items-center gap-1.5 text-white/45">
            <Wallet className="h-3.5 w-3.5" strokeWidth={2} style={{ color: GOLD }} />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em]">Balance</span>
          </div>
          <div
            className="mt-1.5 text-[24px] font-light tabular-nums"
            style={{ color: GOLD_SOFT }}
          >
            ${available.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Task cards */}
      <p className="mt-6 mb-2 px-1 text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/40">
        Ways to earn
      </p>
      <div className="space-y-2">
        {[
          {
            title: "Invite a friend to register",
            desc: `They get ${CREDITS_PER_SIGNUP} credits — so do you.`,
            count: refs.length,
          },
          {
            title: "Invite a friend to subscribe",
            desc: `${COMMISSION_PCT}% cash on every payment, for life.`,
            count: subscribed,
          },
        ].map((t) => (
          <div
            key={t.title}
            className="flex items-center gap-3 rounded-2xl px-4 py-3.5"
            style={{
              background:
                "linear-gradient(120deg, rgba(201,162,76,0.10) 0%, rgba(255,255,255,0.03) 55%)",
              border: "1px solid hsl(0 0% 100% / 0.07)",
            }}
          >
            <div className="min-w-0 flex-1">
              <p className="text-[13.5px] font-medium leading-tight text-white">{t.title}</p>
              <p className="mt-1 text-[11.5px] text-white/50">{t.desc}</p>
            </div>
            <span className="shrink-0 text-[12px] tabular-nums text-white/45">{t.count}</span>
            <button
              onClick={() => shareLink()}
              className="shrink-0 rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold text-black transition active:scale-95"
              style={{ background: `linear-gradient(180deg, ${GOLD_SOFT}, ${GOLD})` }}
            >
              Invite
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/settings/referrals/tasks")}
        className="mt-3 flex w-full items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 text-left transition active:scale-[0.99]"
      >
        <span className="text-[13.5px] font-medium text-white">All tasks</span>
        <ChevronRight className="h-4 w-4 text-white/45" strokeWidth={2} />
      </button>

      <p className="mt-4 text-center text-[11px] text-white/35 tabular-nums">
        Lifetime earned ${totalEarned.toFixed(2)}
      </p>
    </div>
  );
}