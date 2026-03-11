import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  alt?: string;
}

export default function PageHero({ title, subtitle, image, alt }: PageHeroProps) {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={alt || title}
          className="w-full h-full object-cover brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-200 text-lg md:text-xl font-light tracking-wide"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
