import Theme, { ThemeButton, ThemeLabel } from "@/components/theme";

export default function Home() {
  return (
    <Theme>
      <main className="flex flex-col gap-2 items-center justify-center min-h-screen">
        <ThemeLabel />
        <div>
          <ThemeButton />
        </div>
      </main>
    </Theme>
  );
}
