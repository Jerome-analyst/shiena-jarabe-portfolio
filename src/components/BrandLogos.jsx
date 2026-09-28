/**
 * Inline brand logos for the toolkit section.
 *
 * Each logo is a simplified, self-drawn mark in the brand's own colors — no
 * external requests, no icon-font dependency. Trademarks belong to their
 * respective owners and are shown here only to indicate familiarity with the
 * tools. Only list tools you actually use.
 *
 * To add one: write a component that returns an <svg viewBox="0 0 32 32">,
 * then register it in `brandLogos` at the bottom under the same `logo` key
 * you use in src/data/content.js.
 */

const box = "h-full w-full";

export function ExcelLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Microsoft Excel">
      <path d="M19 4v24l11-2V6L19 4Z" fill="#33C481" />
      <path d="M19 10h11v2H19v-2Zm0 5h11v2H19v-2Zm0 5h11v2H19v-2Z" fill="#fff" opacity=".35" />
      <path d="M2 7.5 19 5v22L2 24.5v-17Z" fill="#21A366" />
      <path
        d="m6.6 11.3 2.6 4.3 2.8-4.5 2.8-.2-4.1 6.2 4.2 6.4-2.9-.2-2.9-4.7-2.7 4.4-2.6-.2 3.9-5.8-3.8-5.6 2.7-.1Z"
        fill="#fff"
      />
    </svg>
  );
}

export function GoogleSheetsLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Google Sheets">
      <path d="M19 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9l-7-7Z" fill="#21A366" />
      <path d="M19 2v5a2 2 0 0 0 2 2h5l-7-7Z" fill="#fff" opacity=".4" />
      <path
        d="M11 14h10v9H11v-9Zm1.6 1.6v1.7h2.6v-1.7h-2.6Zm4.2 0v1.7h2.6v-1.7h-2.6Zm-4.2 3.2v1.7h2.6v-1.7h-2.6Zm4.2 0v1.7h2.6v-1.7h-2.6Z"
        fill="#fff"
      />
    </svg>
  );
}

export function GoogleWorkspaceLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Google Workspace">
      <path
        d="M28.6 16.3c0-.9-.1-1.8-.2-2.6H16v5h7.1a6 6 0 0 1-2.6 4v3.3h4.2c2.5-2.3 3.9-5.7 3.9-9.7Z"
        fill="#4285F4"
      />
      <path
        d="M16 29c3.5 0 6.5-1.2 8.7-3.1l-4.2-3.3a8 8 0 0 1-12-4.2H4.2v3.4A13 13 0 0 0 16 29Z"
        fill="#34A853"
      />
      <path
        d="M9.9 18.4a7.8 7.8 0 0 1 0-5l-.1-3.4H4.2a13 13 0 0 0 0 11.7l5.7-3.3Z"
        fill="#FBBC05"
      />
      <path
        d="M16 10.2c2 0 3.7.7 5.1 2l3.8-3.8A13 13 0 0 0 4.2 10l5.7 3.4A7.8 7.8 0 0 1 16 10.2Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function OfficeLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Microsoft Office">
      <path d="M3 8.6 18.4 3v26L3 23.4V8.6Z" fill="#EB3C00" />
      <path d="M18.4 3 29 6.7v18.6L18.4 29V3Z" fill="#EB3C00" opacity=".65" />
      <path d="M18.4 8.8 23.6 11v10l-5.2 2.2V8.8Z" fill="#fff" opacity=".9" />
    </svg>
  );
}

export function OutlookLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Email and shared inbox">
      <path d="M14 6h15a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H14V6Z" fill="#0F6CBD" />
      <path d="M14 11h16v6H14v-6Z" fill="#fff" opacity=".25" />
      <path d="M2 5.6 16 3v26L2 26.4V5.6Z" fill="#0364B8" />
      <path
        d="M9 11.2c-2.4 0-4 2-4 4.8s1.6 4.8 4 4.8 4-2 4-4.8-1.6-4.8-4-4.8Zm0 2c1.2 0 2 1.1 2 2.8s-.8 2.8-2 2.8-2-1.1-2-2.8.8-2.8 2-2.8Z"
        fill="#fff"
      />
    </svg>
  );
}

export function SlackLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Slack">
      <path
        d="M9 19.2a2.6 2.6 0 1 1-2.6-2.6H9v2.6Zm1.3 0a2.6 2.6 0 0 1 5.2 0v6.5a2.6 2.6 0 1 1-5.2 0v-6.5Z"
        fill="#E01E5A"
      />
      <path
        d="M12.9 8.8a2.6 2.6 0 1 1 2.6-2.6v2.6h-2.6Zm0 1.3a2.6 2.6 0 0 1 0 5.2H6.4a2.6 2.6 0 1 1 0-5.2h6.5Z"
        fill="#36C5F0"
      />
      <path
        d="M23.1 12.8a2.6 2.6 0 1 1 2.6 2.6h-2.6v-2.6Zm-1.3 0a2.6 2.6 0 0 1-5.2 0V6.3a2.6 2.6 0 1 1 5.2 0v6.5Z"
        fill="#2EB67D"
      />
      <path
        d="M19.1 23.2a2.6 2.6 0 1 1-2.6 2.6v-2.6h2.6Zm0-1.3a2.6 2.6 0 0 1 0-5.2h6.5a2.6 2.6 0 1 1 0 5.2h-6.5Z"
        fill="#ECB22E"
      />
    </svg>
  );
}

export function ZoomLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Zoom">
      <circle cx="16" cy="16" r="13" fill="#2D8CFF" />
      <path
        d="M9 12.6c0-.6.5-1.1 1.1-1.1h7a2.4 2.4 0 0 1 2.4 2.4v4.5c0 .6-.5 1.1-1.1 1.1h-7a2.4 2.4 0 0 1-2.4-2.4v-4.5Zm11.8 1.9 3.2-2.3c.4-.3 1 0 1 .5v6.6c0 .5-.6.8-1 .5l-3.2-2.3v-3Z"
        fill="#fff"
      />
    </svg>
  );
}

export function TrelloLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Trello">
      <rect x="3" y="3" width="26" height="26" rx="4" fill="#0079BF" />
      <rect x="7" y="7" width="8" height="16" rx="1.5" fill="#fff" />
      <rect x="17" y="7" width="8" height="10" rx="1.5" fill="#fff" opacity=".75" />
    </svg>
  );
}

export function AsanaLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Asana">
      <circle cx="16" cy="9" r="4.6" fill="#F06A6A" />
      <circle cx="8.4" cy="21.5" r="4.6" fill="#F06A6A" />
      <circle cx="23.6" cy="21.5" r="4.6" fill="#F06A6A" />
    </svg>
  );
}

export function GmailLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Gmail">
      <path d="M4 8v16a1 1 0 0 0 1 1h3V12.5L16 18l8-5.5V25h3a1 1 0 0 0 1-1V8l-12 8L4 8Z" fill="#EA4335" />
      <path d="M4 8h24l-12 8L4 8Z" fill="#C5221F" />
      <path d="M5 7h22a1 1 0 0 1 1 1v1L16 17 4 9V8a1 1 0 0 1 1-1Z" fill="#EA4335" />
    </svg>
  );
}

export function DriveLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Google Drive">
      <path d="m12 4 10 17.3h-8.8L4 21.3 12 4Z" fill="#FFC107" />
      <path d="M4 21.3h18l-4 6.7H8l-4-6.7Z" fill="#1976D2" />
      <path d="M22 21.3 12 4h8l10 17.3h-8Z" fill="#4CAF50" />
    </svg>
  );
}

/** Generic marks for categories that have no single vendor. */
export function TmsLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="TMS platforms">
      <rect x="2" y="10" width="17" height="11" rx="2" fill="#274c8a" />
      <path d="M19 13h5.5l3.5 4v4H19v-8Z" fill="#f97316" />
      <circle cx="9" cy="23" r="2.6" fill="#8dadd9" />
      <circle cx="23" cy="23" r="2.6" fill="#8dadd9" />
      <circle cx="9" cy="23" r="1" fill="#0d1f3c" />
      <circle cx="23" cy="23" r="1" fill="#0d1f3c" />
    </svg>
  );
}

export function CrmLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="CRM systems">
      <circle cx="16" cy="11" r="4.5" fill="#3663a8" />
      <path d="M6 26a10 10 0 0 1 20 0H6Z" fill="#274c8a" />
      <circle cx="25.5" cy="9" r="3" fill="#f97316" />
    </svg>
  );
}

export function CustomsLogo() {
  return (
    <svg viewBox="0 0 32 32" className={box} role="img" aria-label="Customs documentation">
      <path d="M16 3 27 7v8c0 7-4.6 12.6-11 14C9.6 27.6 5 22 5 15V7l11-4Z" fill="#274c8a" />
      <path d="m11 15.5 3.4 3.4 6.6-6.6" stroke="#f97316" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const brandLogos = {
  excel: ExcelLogo,
  sheets: GoogleSheetsLogo,
  workspace: GoogleWorkspaceLogo,
  office: OfficeLogo,
  outlook: OutlookLogo,
  slack: SlackLogo,
  zoom: ZoomLogo,
  trello: TrelloLogo,
  asana: AsanaLogo,
  gmail: GmailLogo,
  drive: DriveLogo,
  tms: TmsLogo,
  crm: CrmLogo,
  customs: CustomsLogo,
};
