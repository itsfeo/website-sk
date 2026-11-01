# Sri & Kavi — Wedding Invitation Website

A responsive, static wedding invitation site for the Poruwa ceremony. It uses plain HTML, CSS and JavaScript, so it can be hosted on almost any web host without a backend.

## Included
- `index.html` — all wedding invitation content
- `styles.css` — responsive styling
- `script.js` — live countdown to the ceremony
- `assets/engagement-2.jpg`, `engagement-5.jpg`, `engagement-6.jpg`, `engagement-7.jpg` — your photos, already converted to black and white

## Wedding details currently included
- Couple: Sri & Kavi
- Date: Tuesday, 19 January 2027
- Poruwa ceremony: 11:00 AM Sri Lanka time
- Venue: DoubleTree by Hilton Weerawila, Sri Lanka
- Contact: Sri — 077 733 2896; Kavi — 076 710 9168

## Preview locally
Open `index.html` in a browser. Internet access is used only to load the Google Fonts; the rest of the site is static.

## Publish to your hosting provider
1. Extract the ZIP.
2. Upload the contents of the `srinath-kavi-wedding` folder to your hosting provider's web root (often `public_html`, `www`, or `htdocs`).
3. Point your DNS record(s) to the hosting provider as instructed by that provider.
4. Enable HTTPS/SSL in your hosting provider's control panel.
5. Open the site on a phone and test both contact links and the Google Maps directions.

You can also deploy this folder directly to static hosting such as GitHub Pages, Cloudflare Pages, Netlify or an object-storage website endpoint.

## Add more photos
1. Put the image in `assets/` (the site’s CSS shows every image in black and white anyway).
2. In `index.html`, copy one `<figure class="g-item">…</figure>` block in the gallery and change the image path in both `data-full` and `src`.

## RSVP responses in Google Sheets
1. Create a new Google Sheet (any name).
2. Open **Extensions > Apps Script**, delete the sample code, paste in the contents of `google-apps-script.gs`, and save.
3. Click **Deploy > New deployment**, choose type **Web app**. Set *Execute as*: **Me** and *Who has access*: **Anyone**. Deploy and approve the permission prompts.
4. Copy the **Web app URL** and paste it into `script.js`, replacing `PASTE_YOUR_WEB_APP_URL_HERE`.
5. Re-upload `script.js`, submit a test RSVP, and check the new **RSVP** tab in your sheet.
If you later edit the Apps Script, use **Deploy > Manage deployments > Edit > New version** so the same URL keeps working.

## Before sharing with guests
- Confirm the venue's preferred official name/address and whether a separate reception or homecoming event should be listed.
- Check that the phone numbers are correct and that you are happy to publish them on a public website.
- Consider whether you want a guest RSVP form. This version has contact links but no RSVP storage/backend.
- Your cousin's site was used as a general reference for the idea of a wedding-specific invitation; this design is original and not a copy of its page.
