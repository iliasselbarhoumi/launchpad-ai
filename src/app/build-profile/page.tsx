"use client";
import React from "react";
import ProfileForm from "@/app/components/build-profile/ProfileForm";

const BuildProfile = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-800">
              <span className="bg-gradient-to-r from-launchpad-red to-launchpad-purple bg-clip-text text-transparent">
                Launchpad AI
              </span>
              <span>: Your Entrepreneurial Profile</span>
            </h1>
            <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
              Please tell us a bit about your background, resources, and vision
              to help us tailor your entrepreneurial journey.
            </p>
          </div>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default BuildProfile;
