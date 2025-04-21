import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique de confidentialité | prompt101.fr",
  description: "Politique de protection des données personnelles du site prompt101.fr",
}

export default function ConfidentialitePage() {
  return (
    <div className="container max-w-4xl py-10">
      <h1 className="text-3xl font-bold mb-8">Politique de protection des données personnelles</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Préambule</h2>
        <p className="mb-4">
          Next‑ai.fr, exploitant le site <strong>Prompt101.fr</strong> (ci‑après « Prompt101 »), attache une importance
          particulière au respect de la vie privée et à la protection des données à caractère personnel.
        </p>
        <p className="mb-4">
          Next‑ai.fr, qui recueille ou utilise vos données à caractère personnel pour les besoins de son activité, agit
          en tant que <strong>responsable de traitement</strong> (ci‑après « Next‑ai », « nous ») et s&apos;engage à
          mettre en œuvre des mesures adéquates pour assurer la protection, la confidentialité et la sécurité de toute
          personne dont les données sont collectées, en conformité avec les exigences légales applicables, notamment le
          Règlement (UE) 2016/679 (« RGPD ») et la législation nationale.
        </p>
        <p className="mb-4">
          La présente Politique a pour objectif de vous informer des engagements pris par Next‑ai afin de veiller au
          respect de vos données à caractère personnel.
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Champ d&apos;application</h2>
        <p className="mb-4">
          Cette Politique s&apos;applique à l&apos;ensemble des traitements de données à caractère personnel mis en
          œuvre par Next‑ai, en tant que responsable de traitement, au sein de l&apos;Union européenne et relatifs aux
          personnes extérieures (ci‑après « vous »), notamment : clients, prospects, partenaires, candidats au
          recrutement, utilisateurs de nos services, internautes.
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Définitions</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Donnée à caractère personnel</strong> : toute information permettant d&apos;identifier directement
            ou indirectement une personne physique.
          </li>
          <li>
            <strong>Traitement</strong> : toute opération appliquée à une donnée à caractère personnel (collecte,
            enregistrement, utilisation, transmission, etc.).
          </li>
          <li>
            <strong>Responsable de traitement</strong> : entité juridique qui détermine les finalités et les moyens du
            traitement.
          </li>
        </ul>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsable de traitement</h2>
        <p className="mb-4">
          Le responsable de traitement est <strong>Next‑ai.fr</strong>, représentée par{" "}
          <strong>Kristy Anamoutou</strong>, joignable à :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Adresse électronique</strong> : promp101fr+contact@gmail.com
          </li>
          <li>
            <strong>Adresse postale</strong> : Salbris, France
          </li>
        </ul>
        <p className="mb-4">
          Le <strong>Délégué à la Protection des Données (DPO)</strong> est joignable à : contact@prompt101.fr
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Catégories de données collectées</h2>
        <p className="mb-4">
          Next‑ai veille à collecter et à traiter des données pertinentes, adéquates, non excessives et strictement
          nécessaires à l&apos;atteinte des finalités déterminées. Nous nous assurons que vos données sont exactes,
          complètes et, si nécessaire, mises à jour.
        </p>
        <p className="mb-4">Nous recueillons notamment des données lorsque :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>vous créez un compte ou demandez l&apos;accès à nos services ;</li>
          <li>vous naviguez sur le site Prompt101.fr ;</li>
          <li>vous assistez à un webinaire ou un événement que nous organisons ;</li>
          <li>vous vous abonnez à notre newsletter ou acceptez de recevoir nos communications commerciales ;</li>
          <li>vous postulez à une offre d&apos;emploi chez Next‑ai ;</li>
          <li>vous nous contactez pour toute question.</li>
        </ul>
        <p className="mb-4">Les données collectées peuvent comprendre :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Identité</strong> : prénom, nom ;
          </li>
          <li>
            <strong>Coordonnées</strong> : adresse e‑mail, numéro de téléphone ;
          </li>
          <li>
            <strong>Données professionnelles</strong> : nom de l&apos;entreprise, fonction ;
          </li>
          <li>
            <strong>Données de connexion et de navigation</strong> (voir section « Cookies ») ;
          </li>
          <li>Tout autre contenu que vous nous transmettez spontanément.</li>
        </ul>
        <p className="mb-4">
          Le caractère obligatoire des champs à renseigner est signalé par un astérisque. Tout défaut de réponse peut
          empêcher le traitement de votre demande.
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Finalités et bases légales</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="py-3 px-4 border-b border-r text-left">Finalité</th>
                <th className="py-3 px-4 border-b text-left">Base légale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b border-r">
                  Fournir l&apos;accès aux services de Prompt101 (création de compte, exécution de vos commandes)
                </td>
                <td className="py-3 px-4 border-b">Exécution du contrat</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="py-3 px-4 border-b border-r">
                  Vous adresser nos informations associatives, actualités et offres personnalisées
                </td>
                <td className="py-3 px-4 border-b">
                  Intérêt légitime (développement de l&apos;activité) ou consentement lorsque requis
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-r">
                  Analyser la navigation afin d&apos;améliorer le site et nos services
                </td>
                <td className="py-3 px-4 border-b">Intérêt légitime (amélioration continue)</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="py-3 px-4 border-b border-r">Répondre à vos questions et demandes de support</td>
                <td className="py-3 px-4 border-b">Intérêt légitime (communication)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Destinataires des données</h2>
        <p className="mb-4">
          Vos données ne sont communiquées qu&apos;à des destinataires habilités, internes ou externes, lorsque cela est
          nécessaire :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Équipes internes habilitées de Next‑ai ;</li>
          <li>Prestataires techniques assurant l&apos;hébergement, le paiement ou l&apos;envoi d&apos;e‑mails ;</li>
          <li>Autorités compétentes, lorsque la loi l&apos;exige ;</li>
          <li>Potentiels acquéreurs, en cas d&apos;opération de fusion ou cession (vous en serez informé).</li>
        </ul>
        <p className="mb-4">
          Tout transfert hors UE est encadré par les garanties appropriées prévues par le RGPD (clauses contractuelles
          types, décision d&apos;adéquation, etc.).
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Durées de conservation</h2>
        <p className="mb-4">
          Next‑ai conserve vos données le temps nécessaire à la réalisation des finalités poursuivies, puis archive ou
          supprime celles‑ci conformément à la réglementation et aux délais de prescription applicables. Par exemple :
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Données relatives aux comptes : pendant la durée du contrat puis 5 ans à compter de sa cessation ;</li>
          <li>Prospection : 3 ans après votre dernier contact ou jusqu&apos;au retrait de votre consentement ;</li>
          <li>Candidatures non retenues : 2 ans après le dernier contact.</li>
        </ul>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="mb-4">
          Lors de votre navigation sur Prompt101.fr, des cookies ou traceurs peuvent être installés sur votre terminal
          afin, notamment, de permettre le fonctionnement du site, de mesurer l&apos;audience ou de personnaliser le
          contenu. Pour en savoir plus ou paramétrer vos choix, consultez notre{" "}
          <Link href="/cookies" className="text-primary hover:underline">
            Politique Cookies
          </Link>
          .
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sécurité</h2>
        <p className="mb-4">
          Next‑ai met en place des mesures techniques et organisationnelles appropriées pour protéger vos données
          (contrôles d&apos;accès, chiffrement, sauvegardes, etc.).
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
        <p className="mb-4">Conformément au RGPD, vous disposez :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            d&apos;un <strong>droit d&apos;information</strong> ;
          </li>
          <li>
            d&apos;un <strong>droit d&apos;accès</strong> à vos données ;
          </li>
          <li>
            d&apos;un <strong>droit de rectification</strong> ;
          </li>
          <li>
            d&apos;un <strong>droit à l&apos;effacement</strong> (dans les limites légales) ;
          </li>
          <li>
            d&apos;un <strong>droit à la limitation</strong> du traitement ;
          </li>
          <li>
            d&apos;un <strong>droit à la portabilité</strong> ;
          </li>
          <li>
            d&apos;un <strong>droit d&apos;opposition</strong> au traitement fondé sur l&apos;intérêt légitime ou la
            prospection ;
          </li>
          <li>
            d&apos;un <strong>droit d&apos;introduire une réclamation</strong> auprès de la CNIL ;
          </li>
          <li>
            d&apos;un <strong>droit de définir le sort de vos données après votre décès</strong> (France).
          </li>
        </ul>
        <p className="mb-4">Pour exercer ces droits, contactez :</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Courriel</strong> :{" "}
            <a href="mailto:dpo@prompt101.fr" className="text-primary hover:underline">
              promp101fr+dpo@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Modification de la Politique</h2>
        <p className="mb-4">
          Next‑ai pourra mettre à jour la présente Politique à tout moment afin de l&apos;adapter aux évolutions légales
          ou fonctionnelles de Prompt101. La date de mise à jour apparaît ci‑dessous. Nous vous invitons à la consulter
          régulièrement.
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Liens vers des sites tiers</h2>
        <p className="mb-4">
          Prompt101 peut contenir des liens vers des sites ou services tiers. Next‑ai ne contrôle pas leurs pratiques et
          décline toute responsabilité quant à leurs politiques de confidentialité. Nous vous invitons à consulter
          lesdites politiques directement auprès de ces tiers.
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-4">
          Pour toute question relative à la présente Politique, vous pouvez écrire à :{" "}
          <a href="mailto:contact@prompt101.fr" className="text-primary hover:underline">
            promp101fr+contact@gmail.com
          </a>
        </p>
      </section>

      <hr className="my-8 border-t border-gray-200" />

      <div className="mt-10">
        <p className="text-sm text-muted-foreground italic">Dernière mise à jour : 18 avril 2025</p>
      </div>
    </div>
  )
}
