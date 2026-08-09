import LoginBanner from "./components/LoginBanner";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {

  return (

    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-100">

      <LoginBanner />

      <LoginForm />

    </div>

  );

}