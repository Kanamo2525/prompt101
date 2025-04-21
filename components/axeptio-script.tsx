"use client"

import Script from "next/script"

export default function AxeptioScript() {
  return (
    <Script
      id="axeptio-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.axeptioSettings = {
            clientId: "6805bc59b269673e20789919",
            cookiesVersion: "prompt101-fr-EU",
            googleConsentMode: {
              default: {
                analytics_storage: "denied",
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied",
                wait_for_update: 500
              }
            }
          };
           
          (function(d, s) {
            var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true; e.src = "//static.axept.io/sdk.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");
        `,
      }}
    />
  )
}
