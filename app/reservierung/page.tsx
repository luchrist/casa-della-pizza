import config from "@/config/restaurant";

const dayMap = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

function getTodayName() {
  return dayMap[new Date().getDay()];
}

export default function KontaktPage() {
  const todayName = getTodayName();
  const phoneClean = config.contact.phone.replace(/\s/g, "");
  const mapsUrl = config.mapsUrl;

  return (
    <main className="min-h-screen bg-bone" style={{ overflowX: "clip" }}>
      <header className="border-b border-ink/10">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-[2px] md:px-10">
          <a href="/" className="group flex items-center gap-3 md:gap-4">
            <img
              src="/assets/logo-mark.png"
              alt={`${config.name} Logo`}
              className="h-20 w-20 object-contain md:h-28 md:w-28"
            />
            <span className="font-display text-[22px] tracking-tight text-ink md:text-[28px]">
              {config.name}
            </span>
          </a>
          <a
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 transition-colors hover:text-ink md:text-[11px] md:tracking-[0.22em]"
          >
            ← Zurück
          </a>
        </nav>
      </header>

      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 md:text-[11px] md:tracking-[0.22em]">
              <span className="block h-[6px] w-[6px] rotate-45 bg-rosso-600" />
              <span>Kontakt</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-[34px] leading-[1.02] tracking-tight text-ink md:text-[64px] lg:text-[78px]">
              Bestellen,
              <br />
              <span className="italic text-basilico-700">abholen, liefern lassen.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink/70 md:text-[17px]">
              Du erreichst uns am schnellsten telefonisch. Für Partypizzen
              oder besondere Wünsche ruf am besten frühzeitig an, dann
              planen wir den Ofen entsprechend.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-12 md:mt-20 md:gap-x-10 md:gap-y-16">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 md:text-[11px] md:tracking-[0.22em]">
              Anrufen &amp; Bestellen
            </div>
            <a
              href={`tel:${phoneClean}`}
              className="mt-4 block font-display text-[32px] tracking-tight text-ink hover:text-rosso-600 md:text-[44px]"
            >
              {config.contact.phone}
            </a>

            <a
              href={`tel:${phoneClean}`}
              className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full bg-rosso-600 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-bone transition-transform active:scale-[0.98] md:px-7 md:py-4 md:text-[12px]"
            >
              <span className="relative z-10">Jetzt anrufen</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </a>

            <div className="mt-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 md:text-[11px] md:tracking-[0.22em]">
                Adresse
              </div>
              <p className="mt-4 font-display text-[24px] leading-tight tracking-tight text-ink md:text-[28px]">
                {config.address.street}
                <br />
                {config.address.city}
                <br />
                <span className="text-ink/50">{config.address.country}</span>
              </p>
              {mapsUrl && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-rosso-600 hover:text-ink"
                >
                  In Google Maps öffnen <span aria-hidden>→</span>
                </a>
              )}
            </div>

            {config.contact.facebook && (
              <div className="mt-12">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 md:text-[11px] md:tracking-[0.22em]">
                  Facebook
                </div>
                <a
                  href={config.contact.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 block font-mono text-[14px] text-ink hover:text-rosso-600"
                >
                  Casa della Pizza
                </a>
              </div>
            )}
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 md:text-[11px] md:tracking-[0.22em]">
              Öffnungszeiten
            </div>
            <ul className="mt-6 divide-y divide-ink/12">
              {config.openingHours.map((entry) => {
                const today = entry.day === todayName;
                return (
                  <li
                    key={entry.day}
                    className="flex items-center justify-between gap-4 py-2.5 md:py-3"
                  >
                    <span className="flex shrink-0 items-center gap-3 font-display text-[16px] tracking-tight text-ink md:text-[18px]">
                      {today && (
                        <span
                          aria-label="Heute geöffnet"
                          className="block h-[7px] w-[7px] rounded-full bg-basilico-500"
                        />
                      )}
                      {entry.day}
                    </span>
                    <span
                      className={`shrink-0 whitespace-nowrap text-right font-mono text-[10px] tracking-[0.02em] sm:text-[11px] md:text-[12px] md:tracking-[0.05em] ${
                        today ? "text-ink" : "text-ink/55"
                      }`}
                    >
                      {entry.hours}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 md:text-[11px] md:tracking-[0.22em]">
                Gut zu wissen
              </div>
              <ul className="mt-4 space-y-3 text-[14px] leading-relaxed text-ink/70 md:text-[15px]">
                <li>Abholung direkt am Tresen, Lieferung nach Absprache.</li>
                <li>
                  Partypizzen auf Vorbestellung: ruf einfach einen Tag
                  vorher kurz durch.
                </li>
                <li>
                  Treuekarte vor Ort, jede Pizza zählt zur nächsten
                  kostenlosen.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
