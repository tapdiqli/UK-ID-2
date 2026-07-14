import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-cream px-4 py-20">
      <div className="text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-radial text-white">
          <Icon name="shield" size={30} />
        </span>
        <p className="mt-6 font-display text-6xl font-extrabold text-forest-700">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold text-ink">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back to the casinos.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="/" size="md">
            Back to home
          </LinkButton>
          <LinkButton href="/casinos" variant="outline" size="md">
            Compare casinos
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
