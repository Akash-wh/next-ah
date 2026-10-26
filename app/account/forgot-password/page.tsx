
import AccountForgetPassword from "@/app/components/AccountForgetPassword";

export default function ForgotPassword() {
  return (
    <AccountForgetPassword
      eyebrow="THE AUREL ACCOUNT"
      title="Let's get you back."
      description="A password reset is just a few steps away. Enter your registered email address to get started."
      loginUrl="/account"
      registerUrl="/account/register"
      supportEmail="support@yourdomain.com"
    />
  );
}
