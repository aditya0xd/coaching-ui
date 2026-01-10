interface FooterProps {
  name?: string;
}

export function Footer({ name = "orbitnest" }: FooterProps) {
  return (
    <footer className="w-full bg-background border-t border-border py-8 text-center text-muted-foreground text-sm">
      <p>{new Date().getFullYear()} © {name}. All rights reserved.</p>
    </footer>
  );
}
