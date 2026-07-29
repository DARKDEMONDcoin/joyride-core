/** @doc Mobile referral hero — fanned membership-credit cards, invite CTA and task cards. */
import { useNavigate } from "react-router-dom";
import { ChevronRight, Plus, UserPlus, Music4 } from "lucide-react";
import PrizeFan, { type CreditCard } from "./PrizeFan";
import { useReferrals } from "../../ReferralsPage";
import { CREDITS_PER_SIGNUP } from "./tokens";

const CARDS: CreditCard[] = [
  {
    value: "365",
    unit: "Days",
    caption: "Membership Credits",
    face: "linear-gradient(150deg,#ffffff 0%,#e9e9ea 55%,#c9c9cc 100%)",
  },
  {
    value: "3",
    unit: "Days",
    caption: "Membership Credits",
    face: "linear-gradient(135deg,#a9ecec 0%,#7fd8dd 45%,#5fb9c9 100%)",
  },
  {
    value: "30",
    unit: "Days",
    caption: "Membership Credits",
    face: "linear-gradient(140deg,#cfe0fb 0%,#9fbcf3 55%,#7f9fe6 100%)",
  },
];

export default function MoonshotHero() {
  const navigate = useNavigate();
  const { refs, shareLink } = useReferrals();

  const subscribed = refs.filter((r) => r.status === "active" || r.status === "approved").length;

  const tasks = [
    {
      icon: UserPlus,
      title: "Invite a friend to join Megsy",
      count: refs.length,
    },
    {
      icon: Music4,
      title: "Invite a friend to subscribe to Megsy Membership",
      count: subscribed,
    },
  ];

  return (
    <div className="flex min-h-[calc(100dvh-56px)] flex-col px-5 pb-8">
      {/* Fanned membership credit cards */}
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
        className="mx-auto mt-6 rounded-lg px-5 py-2.5 text-[15px] text-white/90 transition active:scale-[0.97]"
        style={{ background: "hsl(0 0% 100% / 0.10)" }}
      >
        Invite to earn chances
      </button>

      <button
        onClick={() => navigate("/settings/referrals/prizes")}
        className="mx-auto mt-4 inline-flex items-center gap-1 text-[15px] text-white/65 transition active:opacity-70"
      >
        My Prizes
        <ChevronRight className="h-4 w-4" strokeWidth={2} />
      </button>

      <div className="flex-1" />

      <p className="mt-10 text-center text-[13.5px] text-white/80">
        Complete any task below, and both of you get [ {CREDITS_PER_SIGNUP} ] credits.
      </p>

      <div className="mt-4 space-y-3">
        {tasks.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl px-4 py-4"
            style={{
              background: "hsl(0 0% 100% / 0.055)",
              border: "1px solid hsl(0 0% 100% / 0.05)",
            }}
          >
            <div className="flex items-start gap-3">
              <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-white/85" strokeWidth={1.7} />
              <p className="min-w-0 text-[16px] leading-snug text-white">{t.title}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span
                className="grid h-9 w-9 place-items-center rounded-full text-white/80"
                style={{ background: "hsl(0 0% 100% / 0.08)" }}
                aria-hidden
              >
                <Plus className="h-4 w-4" strokeWidth={2} />
              </span>
              <button
                onClick={() => shareLink()}
                className="rounded-full bg-white px-6 py-2 text-[14px] font-medium text-black transition active:scale-95"
              >
                Invite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
