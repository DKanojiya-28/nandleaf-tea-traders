import { MessageCircle } from "lucide-react"

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/917588509084"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[62px] h-[62px] rounded-full bg-[#25D366] hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
    >
      <MessageCircle size={30} className="text-white" />
    </a>
  )
}

export default WhatsappButton