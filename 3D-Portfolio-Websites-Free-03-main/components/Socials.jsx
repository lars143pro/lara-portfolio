import Link from "next/link";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiCalendarLine,
  RiMailLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-xl">
      {/* PRO TIP: Using a common class variable keeps your code clean 
        and ensures the glow is consistent across all icons.
      */}
      {[
        { icon: <RiFacebookLine />, href: "https://www.facebook.com/profile.php?id=61575887027234", label: "Facebook" },
        { icon: <RiInstagramLine />, href: "https://www.instagram.com/alampatdesigncreatives/", label: "Instagram" },
        { icon: <RiWhatsappLine />, href: "https://wa.me/639155828673", label: "WhatsApp" },
        { icon: <RiCalendarLine />, href: "https://calendly.com/laranerona", label: "Calendly" },
        { icon: <RiMailLine />, href: "mailto:alrasx6@gmail.com", label: "Email" },
      ].map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target={social.label !== "Email" ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="relative group hover:text-accent transition-all duration-300"
          aria-label={social.label}
        >
          {/* THE ICON */}
          <span className="relative z-10 group-hover:drop-shadow-[0_0_12px_rgba(0,242,255,1)]">
            {social.icon}
          </span>

          {/* HIDDEN GLOW EFFECT - This makes a subtle "ping" behind the icon on hover */}
          <span className="absolute inset-0 bg-accent/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-all duration-500 -z-10" />
        </Link>
      ))}
    </div>
  );
};

export default Socials;