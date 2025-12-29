import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales | prompt101.fr",
  description: "Mentions légales et informations juridiques du site prompt101.fr",
}

export default function MentionsLegalesPage() {
  return (
    <div className="container max-w-3xl py-10">
      <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Édition du site</h2>
        <p className="mb-4">Le site prompt101.fr est édité par Kristy Anamoutou,</p>
        <p className="mb-4">
          <strong>Responsable de publication :</strong> Kristy Anamoutou
          <br />
          <strong>Adresse :</strong> Loir et Cher (41), France, Europe
          <br />
          <strong>Email :</strong> contact@prompt101.fr 
          <br />
          <strong>SIRET :</strong>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
        <p className="mb-4">Le site prompt101.fr est hébergé par Vercel Inc.</p>
        <p className="mb-4">
          <strong>Vercel Inc.</strong>
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723
          <br />
          États-Unis
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
        <p className="mb-4">
          Le contenu du site prompt101.fr est protégé par la licence Creative Commons Attribution - Pas
          d&apos;Utilisation Commerciale - Pas de Modification 4.0 International (CC BY-NC-ND 4.0).
        </p>
        <p className="mb-4">Vous êtes autorisé à :</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Partager — copier, distribuer et communiquer le matériel par tous moyens et sous tous formats</li>
        </ul>
        <p className="mb-4">Selon les conditions suivantes :</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Attribution</strong> — Vous devez créditer l&apos;Œuvre, intégrer un lien vers la licence et
            indiquer si des modifications ont été effectuées à l&apos;Œuvre. Vous devez indiquer ces informations par
            tous les moyens raisonnables, sans toutefois suggérer que l&apos;Offrant vous soutient ou soutient la façon
            dont vous avez utilisé son Œuvre.
          </li>
          <li>
            <strong>Pas d&apos;Utilisation Commerciale</strong> — Vous n&apos;êtes pas autorisé à faire un usage
            commercial de cette Œuvre, tout ou partie du matériel la composant.
          </li>
          <li>
            <strong>Pas de modifications</strong> — Dans le cas où vous effectuez un remix, que vous transformez, ou
            créez à partir du matériel composant l&apos;Œuvre originale, vous n&apos;êtes pas autorisé à distribuer ou
            mettre à disposition l&apos;Œuvre modifiée.
          </li>
        </ul>
        <p className="mb-4">
          Pour plus d&apos;informations sur cette licence, consultez{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Protection des données personnelles</h2>
        <p className="mb-4">
          Le site prompt101.fr respecte la vie privée de ses utilisateurs et se conforme strictement aux lois en vigueur
          sur la protection des données personnelles (Règlement général sur la protection des données - RGPD, Loi
          Informatique et Libertés).
        </p>
        <p className="mb-4">Les informations recueillies sur ce site sont traitées par Kristy Anamoutou afin de :</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Permettre la navigation sur le site</li>
          <li>Gérer les demandes de contact</li>
          <li>Améliorer l&apos;expérience utilisateur</li>
          <li>Établir des statistiques de fréquentation</li>
        </ul>
        <p className="mb-4">
          Conformément à la réglementation applicable, vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, et de portabilité des données vous concernant, ainsi que du droit de s&apos;opposer au
          traitement pour motif légitime, droits que vous pouvez exercer en vous adressant à contact@prompt101.fr.
        </p>
        <p className="mb-4">
          Pour plus d&apos;informations sur la façon dont nous traitons vos données, consultez notre{" "}
          <a href="/confidentialite" className="text-primary hover:underline">
            Politique de confidentialité
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
        <p className="mb-4">
          Le site prompt101.fr peut utiliser des cookies pour améliorer l&apos;expérience de navigation des
          utilisateurs. Un cookie est un petit fichier texte stocké sur votre appareil qui permet d&apos;enregistrer des
          informations relatives à votre navigation.
        </p>
        <p className="mb-4">Les cookies utilisés sur ce site peuvent être de différentes natures :</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cookies techniques nécessaires au fonctionnement du site</li>
          <li>Cookies de mesure d&apos;audience</li>
          <li>Cookies de préférences (comme le mode sombre/clair)</li>
        </ul>
        <p className="mb-4">
          Vous pouvez à tout moment désactiver l&apos;utilisation de cookies en sélectionnant les paramètres appropriés
          de votre navigateur.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Limitation de responsabilité</h2>
        <p className="mb-4">
          Les informations contenues sur le site prompt101.fr sont aussi précises que possible et le site est
          périodiquement mis à jour. Toutefois, des erreurs ou omissions peuvent survenir. L&apos;utilisateur reconnaît
          utiliser ces informations sous sa responsabilité exclusive.
        </p>
        <p className="mb-4">prompt101.fr ne peut être tenu responsable :</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Des dommages directs ou indirects résultant de l&apos;accès ou de l&apos;utilisation du site</li>
          <li>Des dommages résultant de l&apos;impossibilité d&apos;accéder au site</li>
          <li>Des conséquences de l&apos;utilisation des prompts et méthodes présentés sur le site</li>
        </ul>
        <p className="mb-4">
          Les liens hypertextes mis en place dans le cadre du site peuvent renvoyer vers des sites externes dont le
          contenu ne peut engager la responsabilité de prompt101.fr.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Droit applicable et juridiction compétente</h2>
        <p className="mb-4">
          Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français
          seront compétents.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
        <p className="mb-4">
          Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l&apos;adresse
          suivante : contact@prompt101.fr
        </p>
      </section>

      <div className="mt-10 border-t pt-6">
        <p className="text-sm text-muted-foreground">
          Dernière mise à jour :{" "}
          {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </div>
  )
}
