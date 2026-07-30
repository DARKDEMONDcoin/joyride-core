/** @doc Mobile referral hero — oil-slick credit cards, live program stats and invite tasks. */
import { UserPlus, BadgeCheck, Coins } from "lucide-react";
import PrizeFan, { type CreditCard } from "./PrizeFan";
import { useReferrals } from "../../ReferralsPage";
import { CREDITS_PER_SIGNUP, COMMISSION_PCT } from "./tokens";

const CARDS: CreditCard[] = [
  { value: "365", unit: "Days", caption: "Membership Credits", hue: 288 },
  { value: "3", unit: "Days", caption: "Membership Credits", hue: 186 },
  { value: "30", unit: "Days", caption: "Membership Credits", hue: 32 },
];

export default function MoonshotHero() {
  const { refs, shareLink, signups, totalEarned, available } = useReferrals();

  const subscribed = refs.filter(
    (r) => r.status === "active" || r.status === "approved",
  ).length;

  const stats = [
    { label: "Invites", value: String(signups || refs.length) },
    { label: "Subscribed", value: String(subscribed) },
    { label: "Earned", value: `$${(totalEarned ?? 0).toFixed(2)}` },
    { label: "Available", value: `$${(available ?? 0).toFixed(2)}` },
  ];

  const tasks = [
    {
      icon: UserPlus,
      title: "Invite a friend to join Megsy",
      reward: `+${CREDITS_PER_SIGNUP} credits for both of you`,
      count: signups || refs.length,
    },
    {
      icon: BadgeCheck,
      title: "Invite a friend to subscribe to Megsy Membership",
      reward: `+${COMMISSION_PCT}% commission on every payment`,
      count: subscribed,
    },
  ];

  return (
    <div className="flex min-h-[calc(100dvh-56px)] flex-col px-5 pb-8">
      <div className="mt-10">
        <PrizeFan cards={CARDS} />
      </div>

      <h2
        className="mt-2 text-center text-[24px] leading-tight text-white"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400 }}
      >
        3-Day Membership Credits
      </h2>

      <button
        onClick={() => shareLink()}
        className="mx-auto mt-6 w-full max-w-[300px] rounded-full bg-white py-3 text-[15px] font-semibold text-black transition active:scale-[0.97]"
      >
        Invite to earn chances
      </button>

      {/* Live program stats */}
      <div
        className="mt-6 grid grid-cols-4 gap-px overflow-hidden rounded-2xl"
        style={{ background: "hsl(0 0% 100% / 0.06)" }}
      >
        {stats.map((s) => (
          <div key={s.label} className="px-1 py-3 text-center" style={{ background: "#0b0b0b" }}>
            <p className="text-[15px] font-semibold text-white">{s.value}</p>
            <p className="mt-0.5 text-[10.5px] text-white/50">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="flex-1" />

      <p className="mt-8 text-center text-[13.5px] text-white/75">
        Complete any task below — you and your friend each get {CREDITS_PER_SIGNUP} credits,
        plus {COMMISSION_PCT}% of every payment they make.
      </p>

      <div className="mt-4 space-y-3">
        {tasks.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl px-4 py-4"
            style={{
              background: "hsl(0 0% 100% / 0.055)",
              border: "1px solid hsl(0 0% 100% / 0.06)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                style={{ background: "hsl(0 0% 100% / 0.08)" }}
              >
                <t.icon className="h-[19px] w-[19px] text-white/90" strokeWidth={1.7} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] leading-snug text-white">{t.title}</p>
                <p className="mt-0.5 flex items-center gap-1 text-[12px] text-white/55">
                  <Coins className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {t.reward} · {t.count} done
                </p>
              </div>
            </div>
            <button
              onClick={() => shareLink()}
              className="mt-3.5 w-full rounded-full bg-white py-2.5 text-[14.5px] font-semibold text-black transition active:scale-[0.98]"
            >
              Invite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
