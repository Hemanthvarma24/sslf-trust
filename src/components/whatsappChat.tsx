import Image from "next/image";
import whatsappIcon from "@/assets/whatsapp.png";

const WhatsAppChatButton = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center animate-bounce">
      <p className="text-[#0b0a45] font-bold text-sm mb-2">Let&apos;s Talk</p>
      <a
        href="https://api.whatsapp.com/send?phone=+919094099940&amp;text=Hello! I’d love to learn more about SSLF Trust’s mission and upcoming events. Please share details on how I can contribute, volunteer, or donate."
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full shadow-lg"
        aria-label="Chat with us on WhatsApp"
      >
        <Image 
          src={whatsappIcon} 
          alt="WhatsApp Chat" 
          className="w-full h-full" 
          priority
        />
      </a>
    </div>
  );
};

export default WhatsAppChatButton;
