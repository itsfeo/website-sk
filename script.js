(function () {
  // The ceremony is listed at 11:00 AM Sri Lanka time (UTC+05:30).
  const target = new Date("2027-01-19T11:00:00+05:30").getTime();
  const fields = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };
  const note = document.getElementById("countdown-note");

  function updateCountdown() {
    const now = Date.now();
    let remaining = target - now;
    if (remaining <= 0) {
      Object.values(fields).forEach((field) => { field.textContent = "0"; });
      note.textContent = "Today is the day — we look forward to celebrating with you!";
      return;
    }
    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;
    fields.days.textContent = Math.floor(remaining / day);
    remaining %= day;
    fields.hours.textContent = Math.floor(remaining / hour);
    remaining %= hour;
    fields.minutes.textContent = Math.floor(remaining / minute);
    fields.seconds.textContent = Math.floor((remaining % minute) / 1000);
    note.textContent = "We can’t wait to celebrate with you.";
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
(function () {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  const img = lb.querySelector("img");
  const close = () => { lb.hidden = true; img.removeAttribute("src"); };
  document.querySelectorAll(".g-btn").forEach((b) => b.addEventListener("click", () => {
    img.src = b.dataset.full; img.alt = b.querySelector("img").alt; lb.hidden = false;
  }));
  lb.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
})();

(function () {
  // Paste your Google Apps Script web app URL here (see README.md, "RSVP responses in Google Sheets").
  const RSVP_ENDPOINT = "https://script.google.com/macros/s/AKfycbwjhBerAojHqmmt5mtpa3AeXX97kRODmJPgIdAtGhBUR7uw_tuDHmW8sc14RW8tvt8h/exec";

  const form = document.getElementById("rsvp-form");
  if (!form) return;
  const status = document.getElementById("rsvp-status");
  const button = document.getElementById("rsvp-submit");
  const show = (msg, cls) => { status.textContent = msg; status.className = "rsvp-status " + cls; };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("fullname") || "").toString().trim();
    if (!name) { show("Please enter your full name.", "err"); return; }
    if (!data.get("attendance")) { show("Please choose one of the options.", "err"); return; }
    if (data.get("website")) { return; } // spam trap
    if (RSVP_ENDPOINT.indexOf("PASTE_") === 0) {
      show("The RSVP form isn’t connected yet. Please contact us directly.", "err");
      return;
    }
    button.disabled = true;
    show("Sending…", "");
    try {
      await fetch(RSVP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          fullname: name,
          attendance: data.get("attendance").toString(),
          notes: (data.get("notes") || "").toString().trim()
        })
      });
      form.reset();
      show("Thank you! Your RSVP has been received.", "ok");
    } catch (err) {
      show("Sorry, something went wrong. Please try again or contact us directly.", "err");
    } finally {
      button.disabled = false;
    }
  });
})();
