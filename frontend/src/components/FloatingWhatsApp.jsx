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
        group fixed right-3 bottom-20 z-[9999]
        flex h-12 w-12
        items-center justify-center
        rounded-full bg-[#25D366]
        text-2xl text-white
        shadow-[0_8px_22px_rgba(37,211,102,0.45)]
        transition-all duration-300
        animate-bounce
        hover:scale-110 hover:bg-[#1ebe5d]
        hover:shadow-[0_12px_28px_rgba(37,211,102,0.60)]
        hover:[animation-play-state:paused]
        active:scale-95
        sm:right-4 sm:bottom-24 sm:h-14 sm:w-14 sm:text-3xl
      "
    >
      <FaWhatsapp />

      {/* Tooltip */}
      <span
        className="
          pointer-events-none absolute right-[60px]
          whitespace-nowrap rounded-lg
          bg-[#061a38] px-2.5 py-1.5
          text-[10px] font-bold text-white
          opacity-0 shadow-lg
          transition-all duration-300
          group-hover:opacity-100
          sm:right-[68px] sm:px-3 sm:py-2 sm:text-xs
        "
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}

export default FloatingWhatsApp;