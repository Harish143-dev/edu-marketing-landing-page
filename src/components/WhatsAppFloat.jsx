import React from 'react'
import { MessageCircleMore } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

function WhatsAppFloat() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      href="https://wa.me/919789099499?text=Hi%20EyeLevel%2C%20I%27d%20like%20a%20free%20admission%20marketing%20audit%20for%20my%20institution."
      className="fixed bottom-6 right-6 z-[999] flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/10 bg-[#1c6b49] shadow-[0_6px_18px_rgba(0,0,0,0.22)] backdrop-blur-sm"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EyeLevel Growth Studio on WhatsApp for a free admission marketing audit"
      title="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.35, ease: 'easeOut' }
          : { duration: 0.45, delay: 0.25, ease: [0.22, 1, 0.36, 1] }
      }
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircleMore className="h-[26px] w-[26px] text-white" aria-hidden="true" strokeWidth={2.2} />
    </motion.a>
  )
}

export default WhatsAppFloat
