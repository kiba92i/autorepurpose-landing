# AutoRepurpose — Landing Page (statique)

Site statique prêt pour **GitHub Pages**.

## Déploiement GitHub Pages
1. Pousser tous les fichiers à la **racine** de la branche `main`.
2. Repo → **Settings** → **Pages** → Source: `Deploy from a branch`.
3. Branch: `main` — Folder: `/ (root)` → **Save**.
4. L’URL sera: `https://<USERNAME>.github.io/<REPO>/`.

## Formulaire (collecte emails)
Par défaut, le formulaire stocke l'email dans `localStorage` (démo).
Remplacez la logique dans `script.js` par un appel webhook (Typeform/Tally/Airtable) ou un backend.

### Exemple Netlify Forms (si vous migrez)
```html
<form name="waitlist" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="waitlist">
  <input type="email" name="email" required>
  <button type="submit">S'inscrire</button>
</form>
```

## Personnalisation

Texte: `index.html`

Styles: `styles.css`

Icônes/illustrations: `/assets`

## SEO

Meta & Open Graph déjà configurés.

---

# 4) Ce dont j’ai besoin de toi (pour aller plus loin)
- Si tu souhaites **remplacer le localStorage par un vrai stockage** : donne-moi le **webhook** (Typeform/Tally/Airtable) et le format attendu (`POST` URL, champs).
- Si tu veux **activer Stripe Checkout** (précommande) : envoie **clé publique** et **ID de prix**.

Tu peux maintenant demander à Codex de **créer ce repo** avec ces fichiers et d’activer GitHub Pages.
