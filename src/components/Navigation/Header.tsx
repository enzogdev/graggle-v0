import { launchOnboarding } from "./Onboarding";
import ThemeSwitcher from "./ThemeSwitcher";
launchOnboarding();
export default function Header() {
  return (
    <header className="w-full flex justify-between items-center dark:text-gray-100">
      <span className="text-3xl font-bold tracking-tighter dark:text-gray-100">
        graggle
      </span>
      <ThemeSwitcher />
    </header>
  );
}
