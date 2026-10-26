// Paste this into Extensions > Apps Script in your Google Sheet.
const SHEET_NAME = "RSVP";

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted at", "Full name", "Attending?", "Anything else we need to know?"]);
    sheet.setFrozenRows(1);
  }
  const p = e.parameter;
  // Prefix with an apostrophe-safe guard so text starting with = + - @ is never treated as a formula.
  const safe = (v) => /^[=+\-@]/.test(v || "") ? "'" + v : (v || "");
  sheet.appendRow([new Date(), safe(p.fullname), safe(p.attendance), safe(p.notes)]);
  return ContentService.createTextOutput("ok");
}
