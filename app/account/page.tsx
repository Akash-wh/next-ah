import AccountLogin from "../components/AccountLogin";

export default function AccountPage() {
  return (
    <>
      <AccountLogin
        eyebrow="THE AUREL ACCOUNT"
        title="Welcome back."
        description="Your personal space for considered style. Sign in to view your orders and manage your account."
        forgotPasswordUrl="/account/forgot-password"
        registerUrl="/account/register"
        supportEmail="support@yourdomain.com"
      />
    </>
  );
}
