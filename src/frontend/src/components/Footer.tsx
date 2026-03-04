import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          © 2025. Built with{" "}
          <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using{" "}
          <a
            href="https://caffeine.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
