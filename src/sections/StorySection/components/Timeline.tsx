import { icons } from "@/config/icons";
import { useScrollAnimation } from "@/hooks";
import { TimelineItem } from "@/sections/StorySection/components/TimelineItem";
import { staggerContainer } from "@/utils/animation-variants";
import { motion } from "framer-motion";

export const Timeline = () => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.1 });

  // Animation variants
  const slideInLeft80 = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const slideInRight80 = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const lineVariant = {
    hidden: { height: "0%" },
    visible: {
      height: "100%",
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div
      ref={ref}
      className="relative box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]"
    >
      {/* Timeline glowing animations */}
      <style>{`
        @keyframes timeline-dot-glow-breathe-1 {
          0%, 100% { box-shadow: 0 0 20px rgba(139,92,246,0.6); }
          50% { box-shadow: 0 0 32px rgba(139,92,246,0.9); }
        }
        @keyframes timeline-dot-glow-breathe-2 {
          0%, 100% { box-shadow: 0 0 24px rgba(139,92,246,0.7); }
          50% { box-shadow: 0 0 40px rgba(139,92,246,1); }
        }
        .timeline-dot-variant-1 {
          animation: timeline-dot-glow-breathe-1 3s ease-in-out infinite;
        }
        .timeline-dot-variant-2 {
          animation: timeline-dot-glow-breathe-2 3s ease-in-out infinite;
        }
      `}</style>

      {/* Vertical glowing line */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={lineVariant}
        className="absolute bg-[linear-gradient(rgba(139,92,246,0.6),rgba(168,85,247,0.4),rgba(139,92,246,0.6))] shadow-[0_0_20px_rgba(139,92,246,0.5)] h-full w-0.5 left-8 md:left-1/2 md:-translate-x-1/2 origin-top"
      />

      {/* Timeline Items */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >

        {/* 1️⃣ TuduTechLab */}
        <TimelineItem
          variant="mb-16 md:flex-row"
          iconSrc={icons.timeline1}
          iconAlt="Icon"
          title="Team Lead Android Developer"
          organization="TuduTechLab"
          period="Aug 2025 → Present"
          customVariants={slideInLeft80}
          bulletPoints={[
            { text: "Leading native Android development using Kotlin & Java" },
            { text: "Architecting scalable modules & clean MVVM architecture" },
            { text: "Mentoring junior developers & code reviews" },
            { text: "Driving CI/CD, automation & performance optimization", isLast: true }
          ]}
        />

        {/* 2️⃣ WebsCare */}
        <TimelineItem
          variant="mb-16 md:flex-row-reverse"
          iconSrc={icons.timeline1}
          iconAlt="Icon"
          title="Senior Android Developer"
          organization="WebsCare"
          period="Sep 2025 → Present"
          customVariants={slideInRight80}
          bulletPoints={[
            { text: "Developing high-quality Android apps for global clients" },
            { text: "Collaborating with UI/UX & product teams" },
            { text: "Improving architecture, stability & performance" },
            { text: "Mentoring interns & junior engineers", isLast: true }
          ]}
        />

        {/* 3️⃣ FutureTech */}
        <TimelineItem
          variant="mb-16 md:flex-row"
          iconSrc={icons.timeline2}
          iconAlt="Icon"
          title="Senior Android Developer"
          organization="FutureTech"
          period="Jan 2025 – Aug 2025"
          customVariants={slideInLeft80}
          bulletPoints={[
            { text: "Led development of enterprise Android modules" },
            { text: "Improved crash-free rate & performance tuning" },
            { text: "Worked across design, backend & QA teams" },
            { text: "Mentored junior developers", isLast: true }
          ]}
        />

        {/* 4️⃣ Enfotrix */}
        <TimelineItem
          variant="md:flex-row-reverse"
          iconSrc={icons.timeline2}
          iconAlt="Icon"
          title="Android Developer"
          organization="Enfotrix"
          period="Aug 2022 – Jan 2025"
          customVariants={slideInRight80}
          bulletPoints={[
            { text: "Developed 12+ real-world Android applications" },
            { text: "Implemented MVVM, Room, Coroutines & API integrations" },
            { text: "Built offline-ready workflows & ML features" },
            { text: "Trained interns & conducted workshops", isLast: true }
          ]}
        />

      </motion.div>
    </div>
  );
};