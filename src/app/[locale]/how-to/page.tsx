import RoadMap from "@/components/how-to/RoadMap";

const items = [
  {
    label: "1",
    title: "Create Your DHS Account",
    text:
      `Welcome aboard.Your trading journey begins with a few simple steps; designed for safety and security.
      1.Go to www.dhs.exchange/signup.
      2.Enter your Full Name, Email, and Password, then confirm it.
      3.Enable Two-Factor Authentication (required) for added protection.
      4.Accept our Terms & Conditions and Privacy Policy, then click Start Trading the Direct Way.
      5.At DHS, safety isn’t an option; it’s our standard.
      `,
  },
  {
    label: "2",
    title: "Set Up Two-Factor (2FA)",
    text:
     `Your security comes first.
    Before you trade, you’ll need to activate 2FA; a quick, one-time step that protects your account from unauthorized access.
    1.Scan the QR code with your authenticator app (Google Authenticator, Authy, etc.)
    2.Or enter the manual code displayed below it.
    3.Enter the 6-digit verification code shown in your app and confirm.
    Once done, your account gains an extra layer of protection; always active, always secure.
      `,
  },
  {
    label: "3",
    title: "Verify Your Email",
    text:
     `We’ll send you a verification link to the email address you registered.
     1.Open the message and click Verify Email to confirm ownership.
     2.You’ll see the progress:
     "Verifying Email…"
     "Email Verified Successfully" → then click Continue to Login
     3.Didn’t receive the email? Just hit Resend after 60 seconds; it’s that simple.
     4.Transparency builds trust. Every account on DHS is verified and protected from day one.
      `,
  },
  {
    label: "4",
    title: "Complete Your KYC Verification",
    text:
      `DHS is licensed under Dubai’s Virtual Assets Regulatory Authority (VARA); which means every trader must verify their identity.
     1.Upload the following documents securely through your dashboard:
     -A valid ID (passport or Emirates ID)
     -Proof of address (recent utility bill or bank statement)
     -A selfie for facial verification
     2.Verification usually takes less than 24 hours. Once approved, you’ll receive full trading access.
      `,
  },
  {
    label: "5",
    title: "Fund Your Wallet",
    text:
     `After verification, you’re ready to start.
     1.Choose how you want to fund your account:
     -AED Deposits via regulated UAE banking partners.
     -Crypto Deposits from external wallets.
     2.All deposits are encrypted, tracked, and confirmed in real time; because transparency is our promise.
      `,
  },
  {
    label: "6",
    title: "Start Trading",
    text:
     `Welcome to the market.
     1.Browse Markets, choose your favourite pair (e.g. BTC/USDT), select Market or Limit order, and confirm your trade.
     2.Your crypto will appear instantly in your DHS Wallet.
     3.Simple. Secure. Seamless.
     4.⚠️ Reminder: Trading crypto involves risk. DHS promotes responsible trading; never invest more than you can afford to lose.
      `,
  },
  {
    label: "7",
    title: "Stay Protected",
    text:
    `Your account is now active; but security doesn’t stop here.
    1.Keep 2FA always enabled.
    2.Review your account activity regularly.
    3.Never share your passwords or verification codes.
    4.At DHS, every login, trade, and transfer is monitored by our 24/7 protection system; ensuring your safety, always.
      `,
  },
];

export default function Page() {
  return (
    <div className="bg-blue-whale">
      <div className="px-4 md:px-6 xl:max-w-[70%] mx-auto pt-10 md:pt-14">
        {/* Page Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
            How to Sign Up on DHS Exchange
          </h1>
          <div className="mt-3 md:mt-4">
            <span className="inline-block bg-gradient-to-r from-[#b22f26] via-[#e47a5a] to-[#b22f26] bg-clip-text text-transparent text-base md:text-lg font-semibold">
              Direct. Honest. Safe.
            </span>
          </div>
          <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your first step into secure, transparent, and compliant digital asset trading.
          </p>
          <div className="mt-5 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-gradient-to-r from-[#117f60] to-[#e47a5a]" />
          </div>
        </div>
      </div>
      <RoadMap items={items} />
    </div>
  );
}