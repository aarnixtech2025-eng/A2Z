import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  const whatsappNumber = "919831098320";

  const whatsappMessage =
    "Hello A2Z Seals, I want information about hydraulic seals and seal kits.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with A2Z Seals on WhatsApp"
      className="
        group fixed right-5 top-[62%] z-[9999]
        flex h-14 w-14 -translate-y-1/2
        items-center justify-center
        rounded-full bg-[#25D366]
        text-3xl text-white
        shadow-[0_8px_22px_rgba(37,211,102,0.45)]
        transition-all duration-300
        animate-bounce
        hover:scale-110 hover:bg-[#1ebe5d]
        hover:shadow-[0_12px_28px_rgba(37,211,102,0.60)]
        hover:[animation-play-state:paused]
        active:scale-95
      "
    >
      <FaWhatsapp />

      {/* Tooltip */}
      <span
        className="
          pointer-events-none absolute right-[68px]
          whitespace-nowrap rounded-lg
          bg-[#061a38] px-3 py-2
          text-xs font-bold text-white
          opacity-0 shadow-lg
          transition-all duration-300
          group-hover:opacity-100
        "
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}

export default FloatingWhatsApp;