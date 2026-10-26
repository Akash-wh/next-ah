
import AccountRegister from "@/app/components/AccountRegister";

export default function RegisterPage() {
  return (
    <AccountRegister
      eyebrow="THE AUREL ACCOUNT"
      title="Make it personal."
      description="Create your AUREL account for a more considered shopping experience, with your orders and details together in one place."
      loginUrl="/account"
      supportEmail="support@yourdomain.com"
    />
  );
}
