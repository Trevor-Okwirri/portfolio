"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Development",
    description:
      "Specializing in creating visually appealing and user-friendly interfaces using modern technologies like React and frameworks such as Tailwind CSS.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    description:
      "Expert in building responsive and efficient mobile applications with Flutter, delivering seamless experiences across iOS and Android devices.",
  },
  {
    icon: SwatchIcon,
    title: "Backend Development",
    description:
      "Proficient in developing robust server-side applications using Laravel and Express.js, ensuring secure and scalable backend solutions.",
  },
  {
    icon: HashtagIcon,
    title: "Web Optimization",
    description:
      "Focused on enhancing the performance of web applications through optimization techniques that improve speed, responsiveness, and SEO.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    description:
      "Designs interfaces that are both functional and aesthetically pleasing, creating engaging user experiences that meet both business and user needs.",
  },
  {
    icon: DocumentTextIcon,
    title: "Quality Assurance",
    description:
      "Dedicated to maintaining high standards through rigorous testing and debugging to ensure reliable, bug-free, and secure applications.",
  },
];

export function Skills() {
  return (
    <section className="px-8 py-16 bg-gray-100">
      <div className="container mx-auto mb-16 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 text-3xl font-bold"
        >
          What I Do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full text-gray-600 lg:w-10/12"
        >
          I&apos;m a versatile developer with expertise in both frontend and
          backend technologies. From crafting stunning web and mobile
          applications to optimizing performance and ensuring quality, I bring a
          comprehensive skill set to every project.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, idx) => (
          <SkillCard
            key={idx}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
