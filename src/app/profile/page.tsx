"use client";
import React from "react";
import { motion } from "framer-motion";
import ProfileInfoForm from "../components/profile/ProfileInfoForm";

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="pt-28 pb-12 p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <ProfileInfoForm />
        </motion.div>
      </main>
    </div>
  );
};

export default Profile;
