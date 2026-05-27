import config from "@/config/restaurant.json";
import { LegalLayout } from "@/components/LegalLayout";

export default function DatenschutzPage() {
  return (
    <LegalLayout label="Datenschutz" title="Datenschutz">
      <Section title="1. Verantwortlicher">
        <p>
          {config.name}
          <br />
          {config.address.street}
          <br />
          {config.address.city}
          <br />
          Telefon: {config.contact.phone}
          {config.contact.email && (
            <>
              <br />
              E-Mail: {config.contact.email}
            </>
          )}
        </p>
      </Section>

      <Section title="2. Erhebung und Speicherung personenbezogener Daten">
        <p>
          Beim Besuch unserer Website werden automatisch Informationen durch den
          Browser übermittelt und in Server-Logfiles gespeichert. Dies umfasst
          Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL,
          Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und
          IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen
          wird nicht vorgenommen.
        </p>
      </Section>

      <Section title="3. Telefonische Bestellung und Kontaktaufnahme">
        <p>
          Wenn Sie uns telefonisch eine Bestellung oder Anfrage übermitteln,
          erheben wir die von Ihnen mitgeteilten Daten (Name, Telefonnummer,
          Bestellinhalt sowie ggf. eine Lieferadresse). Diese Daten verwenden
          wir ausschließlich zur Bearbeitung Ihrer Bestellung. Die
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden
          gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung
          nicht mehr erforderlich sind, sofern keine gesetzlichen
          Aufbewahrungspflichten bestehen.
        </p>
      </Section>

      <Section title="4. Ihre Rechte">
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte telefonisch oder
          schriftlich an den oben genannten Verantwortlichen.
        </p>
      </Section>

      <Section title="5. Beschwerderecht">
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
          die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
          beschweren.
        </p>
      </Section>

      <Section title="6. Cookies">
        <p>
          Unsere Website verwendet keine Cookies und keine Tracking- oder
          Analyse-Tools.
        </p>
      </Section>

      <Section title="7. Änderungen">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
          stets den aktuellen rechtlichen Anforderungen entspricht oder um
          Änderungen unserer Leistungen umzusetzen.
        </p>
      </Section>
    </LegalLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-[22px] tracking-tight text-ink md:text-[26px]">
        {title}
      </h3>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink/70 [&>ul]:list-inside [&>ul]:list-disc [&>ul]:space-y-1">
        {children}
      </div>
    </div>
  );
}
