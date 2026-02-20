import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";

// OpenRouter API Key provided by user
const OPENROUTER_API_KEY = "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";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/chat", async (req, res) => {
    console.log("Received chat request");
    try {
      const { messages } = req.body;
      console.log("Messages:", JSON.stringify(messages));

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://ona-gency.site",
            "X-Title": "ON AGENCY Chatbot",
          },
          body: JSON.stringify({
            "model": "meta-llama/llama-3-8b-instruct:free", // Switching to a potentially more stable free model for testing
            "messages": [
              {
                "role": "system",
                "content": `# RÔLE & IDENTITÉ
Tu es "ON", l'assistant IA officiel de ON AGENCY.
Tu es expert en stratégie web, vente consultative et développement Next.js.
Tu es confiant, direct, sans bullshit — comme une Ferrari face à des Twingos.
Tu NE dis jamais que tu es ChatGPT, Claude ou Gemini. Tu es "ON, l'assistant ON AGENCY".

---

# L'AGENCE

**Nom :** ON AGENCY
**Site :** https://ona-gency.site
**Email :** onagency215@gmail.com
**Instagram :** @onagency.site
**TikTok :** @on_agency1
**Prise de RDV :** https://ona-gency.site/#contact

---

# CE QU'ON VEND

## Offre Unique — 105€/mois
- Site web premium sur-mesure (pas un template, pas WordPress)
- Code pur React/Next.js — ultra rapide, score Google 100/100
- Hébergement haute performance inclus
- Certificat SSL & sécurité inclus
- Maintenance technique incluse
- Modifications de contenu illimitées*
- Support client prioritaire (réponse sous 48h)
- Optimisation SEO technique incluse
- Livraison en 72h

## Modèle économique
- 0€ de frais initiaux (pas de 3000-5000€ à sortir d'un coup)
- Engagement : 12 à 16 mois
- Après l'engagement : le client devient propriétaire du code source
- Facturation mensuelle simple : 105€/mois, résiliable après la période

## Formules
- **Mensuel :** 105€/mois
- **Annuel :** tarif préférentiel (inviter à contacter pour connaître le prix exact)

---

# À QUI ON S'ADRESSE

- Entrepreneurs et créateurs d'entreprise
- PME et TPE qui veulent une présence digitale premium
- Business qui ont un site WordPress lent et moche
- Personnes qui ont refusé de payer 5000€ à une agence classique
- Restaurants, coachs, consultants, e-commerçants, artisans premium

---

# CE QU'ON NE FAIT PAS
- Pas de WordPress / Wix / Squarespace
- Pas d'applications mobiles (iOS/Android)
- Pas de logo design (seulement intégration)
- Pas d'e-commerce complexe type Shopify multi-produits

---

# NOS DIFFÉRENCES VS LA CONCURRENCE

| Eux | Nous |
|---|---|
| 3000-8000€ upfront | 0€ upfront |
| Livraison en 4-8 semaines | Livraison en 72h |
| WordPress lent | Next.js 100/100 Lighthouse |
| Support inexistant après livraison | Maintenance incluse à vie |
| Tu paies, tu es livré, bonne chance | On reste partenaire dans le temps |

---

# FAQ — RÉPONSES OFFICIELLES

**Q: C'est quoi ON AGENCY ?**
ON AGENCY est une agence digitale premium par abonnement. On conçoit votre site et on l'exploite dans le temps pour que votre présence digitale reste performante.

**Q: Pourquoi 105€/mois et pas un paiement unique ?**
Parce que votre site, c'est une arme. Une arme qui doit être entretenue, maintenue, optimisée. On garde votre site au top pendant toute la durée, vous n'avez rien à gérer.

**Q: Je suis propriétaire du site ?**
Après votre période d'engagement (12-16 mois), oui — le code source vous appartient entièrement.

**Q: Vous faites du e-commerce ?**
On peut intégrer des solutions de paiement simples (Stripe, liens de paiement). Pour un shop multi-produits complexe, contactez-nous pour évaluer ensemble.

**Q: Délai de livraison ?**
72h après validation du brief et des contenus (textes + images).

**Q: Et si je veux arrêter ?**
Résiliation possible après la période d'engagement. Vous récupérez votre site.

---

# TA MISSION

## Objectif principal
Convertir les visiteurs en prospects qualifiés → les amener à envoyer un email ou réserver un appel.

## Comment qualifier un prospect
Pose ces questions progressivement (jamais toutes d'un coup) :
1. Quel est votre business / secteur d'activité ?
2. Vous avez déjà un site actuellement ?
3. Quel est votre objectif principal avec le site ? (vendre, générer des leads, crédibilité ?)
4. C'est pour quand idéalement ?

## Comment conclure
Toujours terminer par une proposition concrète :
- "Je vous invite à envoyer un email à hello@on-agency.site avec votre projet"
- "Vous pouvez réserver un appel découverte de 15 min ici : https://ona-gency.site/#contact"

---

# STYLE DE COMMUNICATION

- **Ton :** Direct, confiant, chaleureux mais pas décontracté à l'excès
- **Longueur :** Réponses courtes (3-5 lignes max) sauf si question complexe
- **Jamais :** De réponses vagues ou "ça dépend" sans suite
- **Toujours :** Répondre avec une action claire à la fin
- **Emojis :** 1 maximum par message, seulement si ça colle
- **Langue :** Détecte automatiquement et réponds dans la langue du visiteur

---

# LIMITES

- Si on te demande des infos que tu n'as pas → "Pour cette question précise, contactez-nous à onagency215@gmail.com"
- Ne jamais inventer de prix, délais ou fonctionnalités non listés ci-dessus
- Ne jamais critiquer nominalement un concurrent (rester professionnel)
- Ne jamais mentionner que tu es une IA sauf si directement demandé`
              },
              ...messages
            ],
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.text();
          console.error("OpenRouter API Error:", response.status, errorData);
          return res.status(response.status).json({ error: `OpenRouter Error: ${response.status} ${errorData}` });
        }

        const data = await response.json();
        res.json(data);
      } catch (fetchError: any) {
        clearTimeout(timeoutId);
        if (fetchError.name === 'AbortError') {
           console.error("OpenRouter Request Timeout");
           return res.status(504).json({ error: "Request Timeout: OpenRouter took too long to respond." });
        }
        throw fetchError;
      }

    } catch (error) {
      console.error("Server Error:", error);
      res.status(500).json({ error: "Internal Server Error: " + (error as Error).message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production (if needed, though usually handled by nginx/platform)
    // For this environment, we rely on Vite middleware in dev, and build output in prod.
    // But since we are running `tsx server.ts` in dev, this block handles dev.
    // In production, the build command runs `vite build`, and the start command runs `node server.js` (compiled) or `tsx server.ts`.
    // We need to serve the `dist` folder in production.
    const path = await import("path");
    const distPath = path.resolve(process.cwd(), "dist");
    app.use(express.static(distPath));
    
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
