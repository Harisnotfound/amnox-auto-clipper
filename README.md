# Amnox Auto Clipper website

A static, responsive product/download website for GitHub Pages, using the dark charcoal, white and restrained purple style of the Amnox desktop app.

## Included
- Responsive landing page with product overview, features, workflow, screenshots, pricing, FAQ and download section
- Six supplied application screenshots in `assets/`
- Privacy Policy and Terms of Use starter pages
- No build tools or framework required

## Publish with GitHub Pages
1. Create a public GitHub repository, for example `amnox-auto-clipper`.
2. Extract this folder and upload **the contents** of this folder to the repository root (so `index.html` is at the root).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish and open the URL shown in Settings → Pages.

## IMPORTANT: connect the real Windows installer
The download button is intentionally disabled because no `.exe` installer was provided with this website project.

Recommended:
1. Create a GitHub Release in your repository.
2. Upload your final, tested installer, e.g. `Amnox-Auto-Clipper-Setup-1.4.0.exe`, as a release asset.
3. Copy the release asset's direct download URL.
4. In `index.html`, find `class="button button-primary download-link"` and replace `href="#"` with the exact release download URL. Remove `aria-disabled="true"` and change the button text to `Download for Windows`.
5. Add the file size, version and SHA-256 checksum to the download area or a release notes page. Do not publish an untested or unsigned installer.

Do not commit large installer files directly to the website repository. GitHub Releases are a better place for downloadable binaries.

## REQUIRED BEFORE PUBLIC LAUNCH
- Replace `REPLACE_WITH_SUPPORT_EMAIL` in `index.html`, `privacy.html` and `terms.html` with a real support address.
- Complete the bracketed placeholders in `privacy.html` and `terms.html`.
- Verify the app's actual data flows, including telemetry, licensing, update checks, logs and third-party services. The privacy policy is deliberately cautious because screenshots alone cannot establish all data practices.
- Confirm the exact license duration, auto-renewal, cancellation, refund, device and lifetime-license terms.
- Confirm the prices and whether taxes/fees apply.
- Test the final `.exe` on a clean Windows machine and scan it before publishing.
- Check you have rights to use all product screenshots, branding and any bundled dependencies.

## Brand
- Product: Amnox Auto Clipper
- Developer credit: Haris
- Listed prices: $3/week, $10/month, $25/lifetime
- Trial shown in app: 3 free clips
- App version visible in supplied screenshot: 1.4.0

## Files
- `index.html` — landing page
- `styles.css` — visual system and responsive layout
- `script.js` — mobile navigation and screenshot lightbox
- `privacy.html` — privacy policy starter
- `terms.html` — terms starter
- `assets/` — logo mark and app screenshots


## Configure the installer download and purchase contacts
1. Upload `AmnoxAutoClipper-Setup-1.0.0.exe` to a published GitHub Release in `Harisnotfound/amnox-auto-clipper`.
2. The download URL is already configured in `script.js` as `https://github.com/Harisnotfound/amnox-auto-clipper/releases/latest/download/AmnoxAutoClipper-Setup-1.0.0.exe`.
3. The download button becomes active automatically once that exact release asset exists in the latest published release.
4. The pricing cards have separate Instagram and email purchase buttons for the $3/week, $10/month and $25/lifetime plans. Email buttons open a pre-filled draft. Instagram opens the Amnox DM link; Instagram may not prefill text on every device, so the script also attempts to copy the plan-specific message for the visitor to paste.
5. Contact email: `amnoxinfo@gmail.com`; Instagram: `@amnoxautocliper`.

These buttons do not send messages silently. The visitor must review and send the email/DM themselves.
