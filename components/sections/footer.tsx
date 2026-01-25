import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border px-6 md:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-primary" />
                <div className="w-2.5 h-2.5 rounded-full border-2 border-primary" />
              </div>
              <span className="text-lg font-bold text-foreground">
                LM Studios
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional web design for growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#packages"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Essential Website
                </Link>
              </li>
              <li>
                <Link
                  href="#packages"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Growth Website
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-medium mb-4">Message Us</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">
                Email: lm.studios.web@gmail.com
              </li>
              <li className="text-muted-foreground text-sm">
                WhatsApp: +27 65 582 7602
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 LM Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
