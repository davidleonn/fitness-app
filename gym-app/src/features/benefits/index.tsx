import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { SelectedPage } from "@/utils/types";
import HText from "@/utils/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <div className="md:my-3/5 md:my-5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="mt-8 text-sm">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-5 items-center justify-between gap-8 md:flex"></div>
      </motion.div>
    </section>
  );
};

export default Benefits;
