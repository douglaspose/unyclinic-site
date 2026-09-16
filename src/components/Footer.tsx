import Logo from "./Logo";
import Icon from "./ui/Icon";
import { footer, brand, whatsapp, whatsappHref } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-850 bg-ink-950">
      <div className="container-x">
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_2fr] lg:py-16">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist-500">
              {brand.legal}
            </p>
            <div className="mt-5 flex flex-col items-start gap-2.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mist-400 transition-colors hover:text-[#4ee585]"
              >
                <Icon name="whatsapp" size={15} />
                {whatsapp.display}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="inline-block text-sm text-mist-400 transition-colors hover:text-pulse-300"
              >
                {brand.email}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-medium tracking-wider text-mist-600 uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-mist-400 transition-colors duration-200 hover:text-mist-50"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* O respiro extra embaixo é onde o botão flutuante de WhatsApp
            pousa — sem ele, o botão cobriria esta linha. */}
        <div className="flex flex-col gap-3 border-t border-ink-850/70 pt-7 pb-24 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist-600">{brand.copyright}</p>
          <p className="text-xs text-mist-600">{footer.clientNote}</p>
        </div>
      </div>
    </footer>
  );
}
