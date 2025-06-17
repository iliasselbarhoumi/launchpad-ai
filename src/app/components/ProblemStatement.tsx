import React from "react";
import {
  X,
  Check,
  PhoneCall,
  Mail,
  MessageSquare,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const ProblemStatement = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-16 overflow-hidden bg-white" id="problem">
      <div className="container-section relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.div variants={itemVariants} className="section-tag">
            Why Traditional Outbound Is Dead
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="heading-lg text-launchpad-dark-blue mb-6"
          >
            Cold Outreach Doesn't Work Anymore. <br />
            <span className="text-launchpad-purple font-extrabold">
              AI Organic Outbound
            </span>{" "}
            Does.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-launchpad-dark-blue/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            The days of cold calls and emails are over. Today's buyers expect
            personalized engagement from people they trust. Launcherpad puts you
            exactly where your buyers make decisions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Traditional Cold Outbound - simplified box */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#F9F6F3] rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-red-50 px-4 py-2 rounded-bl-2xl">
              <X className="w-5 h-5 text-[#EA384C]" />
            </div>

            <h3 className="heading-sm text-launchpad-dark-blue mb-8 flex items-center">
              Traditional Cold Outbound
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-launchpad-dark-blue">
                    1% cold email response rates
                  </p>
                  <p className="text-launchpad-dark-blue/70 mt-1">
                    Millions of emails sent, almost all ignored
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-launchpad-dark-blue">
                    80% of calls screened out
                  </p>
                  <p className="text-launchpad-dark-blue/70 mt-1">
                    Decision makers don't take cold calls
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-4">
                  <X className="w-4 h-4 text-[#EA384C]" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-launchpad-dark-blue">
                    No relationship before outreach
                  </p>
                  <p className="text-launchpad-dark-blue/70 mt-1">
                    Cold outreach feels impersonal and salesy
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <PhoneCall className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">
                  Cold Calls
                </div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <Mail className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">
                  Mass Emails
                </div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-red-50 rounded-xl p-3">
                <MessageSquare className="w-8 h-8 text-[#EA384C] mb-2" />
                <div className="text-sm text-center text-[#EA384C] font-medium">
                  Generic Messages
                </div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#EA384C]"></div>
          </motion.div>

          {/* AI Organic Outbound - simplified box */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-[#F9F6F3] rounded-[20px] p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-launchpad-purple/10 px-4 py-2 rounded-bl-2xl">
              <Check className="w-5 h-5 text-launchpad-purple" />
            </div>

            <h3 className="heading-sm text-launchpad-dark-blue mb-8 flex items-center">
              AI Organic Outbound
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-launchpad-purple/10 text-launchpad-purple rounded-full">
                Launcherpad
              </span>
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-launchpad-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-launchpad-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-launchpad-dark-blue">
                    15x higher conversion rates
                  </p>
                  <p className="text-launchpad-dark-blue/70 mt-1">
                    Build trust before you reach out
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-launchpad-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-launchpad-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-launchpad-dark-blue">
                    Key touchpoints and discussions
                  </p>
                  <p className="text-launchpad-dark-blue/70 mt-1">
                    Tracks the entire buyer's journey
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-launchpad-purple/10 flex items-center justify-center mt-0.5 mr-4">
                  <Check className="w-4 h-4 text-launchpad-purple" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-launchpad-dark-blue">
                    Fully automated growth hacking
                  </p>
                  <p className="text-launchpad-dark-blue/70 mt-1">
                    Enterprise-grade AI engagement
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="aspect-square flex flex-col items-center justify-center bg-launchpad-purple/5 rounded-xl p-3">
                <Users className="w-8 h-8 text-launchpad-purple mb-2" />
                <div className="text-sm text-center text-launchpad-purple font-medium">
                  Engagement
                </div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-launchpad-purple/5 rounded-xl p-3">
                <Zap className="w-8 h-8 text-launchpad-purple mb-2" />
                <div className="text-sm text-center text-launchpad-purple font-medium">
                  Trust Building
                </div>
              </div>

              <div className="aspect-square flex flex-col items-center justify-center bg-launchpad-purple/5 rounded-xl p-3">
                <BarChart3 className="w-8 h-8 text-launchpad-purple mb-2" />
                <div className="text-sm text-center text-launchpad-purple font-medium">
                  Win More Deals
                </div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-launchpad-purple"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
