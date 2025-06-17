"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Unplug, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./components/ui/button";
import Link from "next/link";
const NotFound = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center bg-white shadow-xl rounded-2xl p-8 md:p-16 max-w-2xl w-full border border-slate-200/80"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-launchpad-purple/10 to-launchpad-purple-light/10"
        >
          <Unplug
            className="h-10 w-10 text-launchpad-purple"
            strokeWidth={1.5}
          />
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold font-display gradient-text mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">
          Ouups, we have a problem.
        </h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          It seems you've ventured into uncharted territory. The page at{" "}
          <code className="bg-slate-100 text-rose-500 p-1 rounded-md text-sm">
            {pathname}
          </code>{" "}
          could not be found.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="press-effect w-full sm:w-auto">
            <Link href="/dashboard">Return to Dashboard</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="press-effect w-full sm:w-auto"
          >
            <Link href="/ideas/list">
              Generate Ideas
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
