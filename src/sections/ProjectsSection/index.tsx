// ===============================
// ProjectsSection (index.tsx)
// Part 1/3 — Custom SVG Icons + Imports
// ===============================

import { useScrollAnimation } from "@/hooks";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import { ProjectsHeader } from "@/sections/ProjectsSection/components/ProjectsHeader";
import { staggerContainer } from "@/utils/animation-variants";
import { motion } from "framer-motion";

// ===============================
// Custom Minimal Solid SVG Icons
// ===============================

// UrduDocs Icon (Document + Pen)
const UrduDocsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 2h9l5 5v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path d="M14 2v5h5" opacity="0.6" />
    <path d="M7 14h7v2H7zM7 10h10v2H7z" opacity="0.8" />
  </svg>
);

// LUP Icon (Book + Audio Wave)
const LupIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 3h9a4 4 0 0 1 4 4v14H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path d="M17 7a4 4 0 0 1 4 4v7h-4z" opacity="0.7" />
    <path d="M8 11h1v4H8zm3-2h1v6h-1zm3 1h1v5h-1z" opacity="0.9" />
  </svg>
);

// SnoreTracker Icon (Moon + Waveform)
const SnoreTrackerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a7 7 0 1 0 7 9 6 6 0 1 1-7-9z" />
    <path d="M6 16h1v3H6zm3-2h1v5H9zm3-1h1v6h-1zm3 2h1v4h-1z" opacity="0.9" />
  </svg>
);

// BG Remove Icon (Cutout Silhouette)
const BgRemoveIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h8v8H3zM13 13h8v8h-8z" opacity="0.8" />
    <path d="M14 3l7 7M3 14l7 7" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// QR App Icon (QR Pattern)
const QrAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3z" />
    <path d="M15 15h3v3h-3zM18 18h3v3h-3z" opacity="0.8" />
  </svg>
);

// Event Planner Icon (Calendar)
const EventPlannerIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 4h18v18H3z" opacity="0.8" />
    <path d="M3 9h18M7 2v4M17 2v4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// BitBlom Icon (Finance / Chart)
const BitblomIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 20V10h3v10zM10 20V4h3v16zM16 20v-6h3v6z" />
    <circle cx="12" cy="4" r="2" opacity="0.8" />
  </svg>
);

// Task Manager Icon (Checklist)
const TaskManagerIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 4h14v16H5z" opacity="0.6" />
    <path d="M8 8h8v2H8zm0 4h8v2H8zm0 4h5v2H8z" />
  </svg>
);

// AI Sound Detection Icon (Waveform)
const SoundAIIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 10h2v4H4zm3-3h2v10H7zm3 1h2v8h-2zm3-2h2v12h-2zm3 3h2v6h-2z" />
  </svg>
);

// Language Learner Icon (Book + Chat Bubble)
const LanguageLearnerIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 3h12v14H4z" opacity="0.7" />
    <path d="M16 7h4v10h-4l-2 3v-3H16z" />
  </svg>
);

// CricDex Icon (Cricket Ball)
const CricDexIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8" opacity="0.9" />
    <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Tourist Guide Icon (Location Pin)
const TouristGuideIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
    <circle cx="12" cy="9" r="3" fill="black" opacity="0.5" />
  </svg>
);




// ===============================
// Part 2/3 — ProjectsSection Body + ProjectCards
// ===============================

export const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation({ amount: 0.1 });

  return (
    <section
      id="projects"
      className="relative bg-zinc-950 overflow-hidden px-6 py-32 md:px-8"
    >
      {/* Background Overlays (kept as requested) */}
      <div className="absolute inset-0 bg-[linear-gradient(oklab(0.381_0.100917_-0.144194_/0.1)_0%,rgba(0,0,0,0)_50%,oklab(0.381_0.100917-0.144194_/_0.1)_100%)]"></div>
      <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.3)_0%,rgba(0,0,0,0)_70%)] blur-[80px] opacity-20 md:opacity-30"></div>

      <div ref={ref} className="relative max-w-screen-xl mx-auto">
        <ProjectsHeader />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >

          {/* ======================================== */}
          {/* 1. UrduDocs */}
          {/* ======================================== */}
          <ProjectCard
            href="https://github.com/ZubairShafi-dev/UrduDocs_"
            icon={<UrduDocsIcon />}
            title="UrduDocs"
            description="A modern Urdu document creation and editing app featuring OCR, templates, formatting tools, and seamless sharing."
            tags={["Kotlin", "OCR", "Firebase", "Canvas UI"]}
            metrics={[
              { label: "OCR Accuracy", value: "92%" },
              { label: "Templates", value: "25+" },
              { label: "Active Users", value: "1.2K" },
            ]}
            variant="blue"
          />

          {/* ======================================== */}
          {/* 2. LUP */}
          {/* ======================================== */}
          <ProjectCard
            href="https://github.com/ZubairShafi-dev/LUP_"
            icon={<LupIcon />}
            title="LUP – Reading Companion"
            description="An AI-powered reading assistant converting scanned pages into clean, human-like audio with multilingual TTS."
            tags={["Kotlin", "ML Kit", "Room DB", "TTS"]}
            metrics={[
              { label: "Pages Scanned", value: "18K" },
              { label: "Languages", value: "6" },
              { label: "Processing", value: "1.4s" },
            ]}
            variant="cyan"
          />

          {/* ======================================== */}
          {/* 3. Snore Tracker */}
          {/* ======================================== */}
          <ProjectCard
            href="https://github.com/ZubairShafi-dev/SnoreApp_"
            icon={<SnoreTrackerIcon />}
            title="Snore Tracker"
            description="AI-powered sleep monitoring system detecting snoring patterns, breathing irregularities, and generating nightly reports."
            tags={["TFLite", "Audio DSP", "Jetpack", "Room"]}
            metrics={[
              { label: "Model Accuracy", value: "94%" },
              { label: "Latency", value: "1.1s" },
              { label: "Samples Trained", value: "3K" },
            ]}
            variant="cyan"
          />

          {/* ======================================== */}
          {/* 4. BG Remove */}
          {/* ======================================== */}
          <ProjectCard
            href="https://github.com/ZubairShafi-dev/BGRemover_"
            icon={<BgRemoveIcon />}
            title="BG Remove"
            description="An AI-driven background removal and photo editing tool with templates, stickers, and export-ready canvas."
            tags={["ML Kit", "Canvas Editor", "Firebase"]}
            metrics={[
              { label: "Cutout Accuracy", value: "89%" },
              { label: "Tools", value: "12" },
              { label: "Export Time", value: "1.8s" },
            ]}
            variant="green"
          />

          {/* ======================================== */}
          {/* 5. QR Generator & Scanner */}
          {/* ======================================== */}
          <ProjectCard
            href="https://github.com/ZubairShafi-dev/QRCode_"
            icon={<QrAppIcon />}
            title="QR Generator & Scanner"
            description="A modern QR creation and scanning app featuring custom formats, offline mode, and instant history tracking."
            tags={["Kotlin", "CameraX", "Room DB"]}
            metrics={[
              { label: "Scan Speed", value: "<100ms" },
              { label: "QR Types", value: "10+" },
              { label: "Offline", value: "Yes" },
            ]}
            variant="red"
          />

          {/* ======================================== */}
          {/* 6. Event Planner */}
          {/* ======================================== */}
          <ProjectCard
            icon={<EventPlannerIcon />}
            title="Event Planner"
            description="A full event management solution including tasks, guests, RSVPs, and reminders powered by Firebase."
            tags={["Kotlin", "Firebase", "MVVM", "Navigation"]}
            metrics={[
              { label: "Events", value: "500+" },
              { label: "Sync", value: "Realtime" },
              { label: "Rating", value: "4.5★" },
            ]}
            variant="blue"
          />

          {/* ======================================== */}
          {/* 7. BitBlom Investment App */}
          {/* ======================================== */}
          <ProjectCard
            icon={<BitblomIcon />}
            title="BitBlom"
            description="Investment and earnings platform with secure payouts, plans, referrals, admin dashboard, and Firebase backend."
            tags={["Kotlin", "Firestore", "Cloud Functions"]}
            metrics={[
              { label: "Plans", value: "6" },
              { label: "Retention", value: "72%" },
              { label: "Crash-Free", value: "99.2%" },
            ]}
            variant="red"
          />

          {/* ======================================== */}
          {/* 8. Task Manager */}
          {/* ======================================== */}
          <ProjectCard
            icon={<TaskManagerIcon />}
            title="Task Manager"
            description="A clean productivity app for tasks, reminders, scheduling, and category-based organization."
            tags={["Kotlin", "Room", "AlarmManager", "Jetpack"]}
            metrics={[
              { label: "Reminders", value: "8K+" },
              { label: "Precision", value: "±2s" },
              { label: "Offline", value: "Yes" },
            ]}
            variant="green"
          />

          {/* ======================================== */}
          {/* 9. AI Sound Detection */}
          {/* ======================================== */}
          <ProjectCard
            icon={<SoundAIIcon />}
            title="AI Sound Detection"
            description="An experimental TFLite-based model that detects sound categories with real-time waveform visualization."
            tags={["TFLite", "Audio DSP", "Kotlin"]}
            metrics={[
              { label: "Accuracy", value: "88%" },
              { label: "Classes", value: "4" },
              { label: "FPS", value: "35" },
            ]}
            variant="cyan"
          />

          {/* ======================================== */}
          {/* 10. Language Learner App */}
          {/* ======================================== */}
          <ProjectCard
            href="https://github.com/ZubairShafi-dev/LanguageLearner_"
            icon={<LanguageLearnerIcon />}
            title="Language Learner"
            description="A complete learning platform with lessons, quizzes, progress tracking, and multilingual support."
            tags={["Kotlin", "Jetpack Compose", "Firebase"]}
            metrics={[
              { label: "Lessons", value: "120+" },
              { label: "Languages", value: "4" },
              { label: "Completion", value: "68%" },
            ]}
            variant="cyan"
          />

          {/* ======================================== */}
          {/* 11. CricDex */}
          {/* ======================================== */}
          <ProjectCard
            href="https://github.com/Deepajha14/Rog-Free"
            icon={<CricDexIcon />}
            title="CricDex"
            description="Cricket analytics platform providing match insights, score stats, and fast data visualization."
            tags={["Kotlin", "API", "Charts"]}
            metrics={[
              { label: "Data Points", value: "5K+" },
              { label: "Accuracy", value: "91%" },
              { label: "Latency", value: "300ms" },
            ]}
            variant="red"
          />

          {/* ======================================== */}
          {/* 12. Tourist Guide App */}
          {/* ======================================== */}
          <ProjectCard
            href="https://github.com/ZubairShafi-dev/Tourist_User"
            icon={<TouristGuideIcon />}
            title="Tourist Guide"
            description="A tourism app with landmark info, offline maps, categories, and smart recommendations."
            tags={["Kotlin", "Maps", "Firebase"]}
            metrics={[
              { label: "Landmarks", value: "350+" },
              { label: "Offline", value: "Yes" },
              { label: "Session Time", value: "4.2m" },
            ]}
            variant="green"
          />

        </motion.div>
      </div>
    </section>
  );
};
// ===============================
// End of ProjectsSection
// ===============================

export default ProjectsSection;