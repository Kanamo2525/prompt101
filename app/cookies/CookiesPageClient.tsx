"use client"

import { Breadcrumb } from "@/components/breadcrumb"
import Link from "next/link"

export default function CookiesPageClient() {
  return (
    <div className="container max-w-4xl py-8 md:py:12">
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Politique de Cookies", href: "/cookies" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight mt-6 mb-4">Politique de Cookies</h1>
      <p className="text-muted-foreground mb-8">Dernière mise à jour : 21 avril 2024</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Qu'est-ce qu'un cookie ?</h2>
          <p className="text-base leading-relaxed mb-4">
            Un cookie est un petit fichier texte stocké par votre navigateur lorsque vous visitez un site web. Les
            cookies permettent aux sites web de mémoriser vos préférences, d'améliorer votre expérience utilisateur et
            de collecter des informations sur votre navigation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Comment utilisons-nous les cookies ?</h2>
          <p className="text-base leading-relaxed mb-4">
            Sur Prompt101.fr, nous utilisons des cookies pour diverses raisons, notamment pour :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Comprendre comment vous utilisez notre site</li>
            <li>Améliorer votre expérience de navigation</li>
            <li>Analyser le trafic de notre site</li>
            <li>Personnaliser le contenu en fonction de vos préférences</li>
            <li>Mémoriser vos préférences de thème (clair/sombre)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types de cookies utilisés</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Cookies essentiels</h3>
              <p className="text-base leading-relaxed mb-4">
                Ces cookies sont nécessaires au bon fonctionnement du site. Ils vous permettent de naviguer sur le site
                et d'utiliser ses fonctionnalités essentielles. Vous ne pouvez pas les refuser car le site ne pourrait
                pas fonctionner correctement sans eux.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-6">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Nom</th>
                      <th className="text-left py-2">Finalité</th>
                      <th className="text-left py-2">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">next-auth.session-token</td>
                      <td className="py-2">Gestion des sessions utilisateur</td>
                      <td className="py-2">Session</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">theme</td>
                      <td className="py-2">Mémorisation du thème choisi (clair/sombre)</td>
                      <td className="py-2">1 an</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">Cookies analytiques</h3>
              <p className="text-base leading-relaxed mb-4">
                Ces cookies nous permettent de comprendre comment les visiteurs interagissent avec notre site web. Ils
                nous aident à mesurer le nombre de visiteurs, à voir quelles pages sont les plus populaires et comment
                les utilisateurs naviguent sur le site.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-6">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Nom</th>
                      <th className="text-left py-2">Finalité</th>
                      <th className="text-left py-2">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">_ga</td>
                      <td className="py-2">Google Analytics - Distinguer les utilisateurs uniques</td>
                      <td className="py-2">2 ans</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">_ga_SESTM49210</td>
                      <td className="py-2">Google Analytics - Maintenir l'état de la session</td>
                      <td className="py-2">2 ans</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">_gid</td>
                      <td className="py-2">Google Analytics - Distinguer les utilisateurs</td>
                      <td className="py-2">24 heures</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">_gat</td>
                      <td className="py-2">Google Analytics - Limiter le taux de demandes</td>
                      <td className="py-2">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">Cookies de préférences</h3>
              <p className="text-base leading-relaxed mb-4">
                Ces cookies permettent à notre site web de se souvenir des choix que vous avez faits et de fournir des
                fonctionnalités améliorées et personnalisées.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-6">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Nom</th>
                      <th className="text-left py-2">Finalité</th>
                      <th className="text-left py-2">Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">axeptio_cookies</td>
                      <td className="py-2">Axeptio - Stocke vos préférences de consentement aux cookies</td>
                      <td className="py-2">13 mois</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">axeptio_all_vendors</td>
                      <td className="py-2">Axeptio - Stocke vos préférences pour tous les fournisseurs</td>
                      <td className="py-2">13 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gestion des cookies</h2>
          <p className="text-base leading-relaxed mb-4">
            Vous pouvez gérer vos préférences en matière de cookies à tout moment en cliquant sur le bouton "Gérer mes
            cookies" en bas de page. Ce bouton ouvre le panneau de configuration d'Axeptio, notre solution de gestion du
            consentement.
          </p>

          <p className="text-base leading-relaxed mb-4">
            Vous pouvez également configurer votre navigateur pour qu'il refuse tous les cookies ou vous avertisse
            lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner
            correctement si vous désactivez les cookies.
          </p>

          <h3 className="text-xl font-medium mb-3">
            Instructions pour gérer les cookies dans les navigateurs courants :
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Google Chrome</strong> : Menu → Paramètres → Confidentialité et sécurité → Cookies et autres
              données des sites
            </li>
            <li>
              <strong>Mozilla Firefox</strong> : Menu → Options → Vie privée et sécurité → Cookies et données de sites
            </li>
            <li>
              <strong>Safari</strong> : Préférences → Confidentialité → Cookies et données de sites web
            </li>
            <li>
              <strong>Microsoft Edge</strong> : Menu → Paramètres → Confidentialité, recherche et services → Cookies
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Modifications de notre politique de cookies</h2>
          <p className="text-base leading-relaxed mb-4">
            Nous pouvons mettre à jour notre politique de cookies de temps à autre. Nous vous encourageons à consulter
            régulièrement cette page pour rester informé des changements. La date de la dernière mise à jour est
            indiquée en haut de cette page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-base leading-relaxed mb-4">
            Si vous avez des questions concernant notre politique de cookies, n'hésitez pas à nous contacter à l'adresse
            suivante :{" "}
            <a href="mailto:promp101fr+contact@gmail.com" className="text-primary hover:underline">
              promp101fr+contact@gmail.com
            </a>
          </p>
        </section>

        <div className="mt-8">
          <p className="text-base leading-relaxed">
            Pour plus d'informations sur notre traitement des données personnelles, veuillez consulter notre{" "}
            <Link href="/confidentialite" className="text-primary hover:underline">
              Politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() => {
            // @ts-ignore
            if (typeof window !== "undefined" && window._axeptio) {
              // @ts-ignore
              window._axeptio.showCookieConsent()
            }
          }}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Gérer mes cookies
        </button>
      </div>
    </div>
  )
}
