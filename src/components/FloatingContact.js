import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/212604570150";
const PHONE_URL    = "tel:+212604570150";

function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fc-wrapper">

      {/* Action items — absolutely above the toggle */}
      <div className={`fc-menu ${open ? "fc-menu--open" : ""}`}>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="fc-item"
          onClick={() => setOpen(false)}
        >
          <span className="fc-label">WhatsApp</span>
          <span className="fc-icon fc-icon--wa">
            <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
              <path d="M16 1C7.73 1 1 7.73 1 16c0 2.64.68 5.12 1.87 7.28L1 31l7.93-1.84A15 15 0 0016 31c8.27 0 15-6.73 15-15S24.27 1 16 1zm0 27.5a12.44 12.44 0 01-6.35-1.74l-.45-.27-4.7 1.09 1.12-4.59-.3-.47A12.47 12.47 0 1116 28.5zm6.86-9.33c-.37-.19-2.2-1.09-2.54-1.21-.34-.12-.59-.19-.84.19-.25.37-.96 1.21-1.18 1.46-.21.25-.43.28-.8.09-.37-.19-1.57-.58-2.99-1.85-1.1-.99-1.85-2.21-2.07-2.58-.22-.37-.02-.57.16-.76.17-.17.37-.43.56-.65.19-.22.25-.37.37-.62.12-.25.06-.47-.03-.65-.09-.19-.84-2.03-1.15-2.78-.3-.73-.61-.63-.84-.64-.22-.01-.47-.01-.72-.01-.25 0-.65.09-.99.47-.34.37-1.3 1.27-1.3 3.1s1.33 3.6 1.52 3.85c.19.25 2.62 4 6.35 5.61.89.38 1.58.61 2.12.78.89.28 1.7.24 2.34.15.71-.11 2.2-.9 2.51-1.77.31-.87.31-1.62.22-1.77-.09-.15-.34-.24-.71-.43z"/>
            </svg>
          </span>
        </a>

        {/* Phone */}
        <a
          href={PHONE_URL}
          className="fc-item"
          onClick={() => setOpen(false)}
        >
          <span className="fc-label">+212 604 570 150</span>
          <span className="fc-icon fc-icon--phone">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </span>
        </a>

      </div>

      {/* Toggle button */}
      <button
        className={`fc-toggle ${open ? "fc-toggle--open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Contact"
      >
        {open ? (
          /* X icon */
          <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          /* Chat icon */
          <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z"/>
          </svg>
        )}
      </button>

    </div>
  );
}

export default FloatingContact;
