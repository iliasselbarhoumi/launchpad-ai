import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Heart,
  MessageCircle,
  ThumbsUp,
  Send,
  Save,
  Clock,
  User,
  BarChart2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
} from "lucide-react";

const PlatformDemo = () => {
  return (
    <div className="relative max-w-5xl mx-auto mb-20">
      {/* Gradient background */}
      <div className="absolute inset-0 -m-10 bg-gradient-to-br from-launcherpad-purple/20 via-launcherpad-purple/20 to-launcherpad-purple/20 rounded-3xl blur-3xl opacity-40"></div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
        {/* Platform UI Header - Tabs and Navigation */}
        <div className="bg-white border-b border-gray-200 flex items-center px-6 py-3">
          <div className="flex space-x-1 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            <div className="px-4 py-2 text-launcherpad-purple bg-launcherpad-purple/10 rounded-t-lg font-medium text-sm border-b-2 border-launcherpad-purple">
              Cues (24)
            </div>
            <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-t-lg font-medium text-sm">
              Heatbox (12)
            </div>
            <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-t-lg font-medium text-sm">
              Seeds (156)
            </div>
            <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-t-lg font-medium text-sm">
              AI Agents
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-green-700">
                248 Seeds
              </span>
            </div>
            <div className="flex items-center bg-orange-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-orange-700">
                12 Streak
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Main Content Area - LinkedIn Style Post with AI-Generated Comment */}
        <div className="bg-gray-50 p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Panel - Profile and Post */}
            <div className="col-span-8 space-y-6">
              {/* Prompt Area */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-launcherpad-purple/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-launcherpad-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">
                      Hey Roy, I found a post that's relevant to your ICO with
                      65% match. What do you want me to do?
                    </p>
                    <div className="mt-3 bg-launcherpad-purple/5 p-3 rounded-lg">
                      <p className="text-xs text-gray-600 font-medium">
                        Generate an insightful comment about the market trends.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn Post */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium text-gray-900">
                          Michael Anderson
                        </h3>
                        <div className="ml-2 text-xs text-white bg-blue-600 px-1.5 py-0.5 rounded">
                          LinkedIn
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        Growth Lead at TechCorp • 2h ago
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-700">
                      Just launched our new AI-powered analytics dashboard and
                      the initial feedback has been incredible! 🚀 We're seeing
                      a 47% improvement in user engagement and a 3x increase in
                      data processing speed. Would love to hear your thoughts on
                      the future of AI in analytics.
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 py-2 border-t border-b border-gray-100 text-gray-500 text-sm">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>124</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>38</span>
                    </div>
                    <div className="ml-auto flex items-center space-x-1 bg-launcherpad-purple/10 text-launcherpad-purple px-2 py-1 rounded-md">
                      <Save className="w-4 h-4" />
                      <span className="text-xs font-medium">Save to Seeds</span>
                    </div>
                  </div>

                  {/* AI Generated Comment */}
                  <div className="mt-4 relative">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-600">
                        <Sparkles className="w-3 h-3 mr-1 text-launcherpad-purple" />
                        Generated Comment
                      </div>
                      <div className="ml-2 text-xs text-gray-500">
                        AI Generated
                      </div>
                      <div className="ml-auto">
                        <button className="bg-green-500 text-white px-3 py-1 rounded-md text-xs font-medium flex items-center">
                          <Check className="w-3 h-3 mr-1" />
                          Approve
                        </button>
                      </div>
                    </div>

                    <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-200">
                      The integration of AI in analytics represents a
                      significant leap forward in how businesses process and
                      utilize data. Your 47% engagement improvement highlights
                      the value of intuitive, AI-driven interfaces that present
                      insights in more actionable ways. As AI continues to
                      evolve, we'll likely see more predictive analytics
                      capabilities that not only tell us what happened but guide
                      strategic decision-making in real-time. Exciting times
                      ahead for the analytics space!
                    </div>
                  </div>
                </div>

                {/* Engagement Score */}
                <div className="bg-launcherpad-purple/5 p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Engagement Score
                    </span>
                    <span className="text-launcherpad-purple font-bold">
                      +25
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-launcherpad-purple h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    75/100 points to next level
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border-t border-gray-200">
                  <button className="text-gray-500 flex items-center text-sm">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Previous
                  </button>
                  <button className="text-red-500 flex items-center text-sm">
                    <X className="w-4 h-4 mr-1" />
                    Irrelevant
                  </button>
                  <button className="text-gray-500 flex items-center text-sm">
                    Next
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Panel - Context and Insights */}
            <div className="col-span-4 space-y-4">
              {/* Warmth Level */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Warmth Level
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-launcherpad-purple rounded-full"></div>
                  <span className="text-launcherpad-purple font-medium">
                    Warm
                  </span>
                </div>
              </div>

              {/* Previous Touchpoints */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Previous Touchpoints
                </h3>
                <div className="text-launcherpad-purple font-medium text-sm">
                  3 Interactions
                </div>
              </div>

              {/* Engagement Potential */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Engagement Potential
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div
                    className="bg-launcherpad-purple h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <div className="text-right text-sm font-medium text-launcherpad-purple">
                  85%
                </div>
              </div>

              {/* Relationship Status */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Relationship Status
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-launcherpad-purple rounded-full"></div>
                  <span className="text-launcherpad-purple font-medium">
                    Warm - 3 Previous Interactions
                  </span>
                </div>
              </div>

              {/* Topics of Interest */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Topics of Interest
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-launcherpad-purple/10 text-launcherpad-purple text-xs px-2 py-1 rounded-md">
                    AI Analytics
                  </span>
                  <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md">
                    SaaS
                  </span>
                  <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded-md">
                    Growth
                  </span>
                </div>
              </div>

              {/* Best Time to Engage */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Best Time to Engage
                </h3>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-launcherpad-purple" />
                  <span className="text-launcherpad-purple font-medium">
                    Active Now
                  </span>
                </div>
              </div>

              {/* Recommended Actions */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 text-launcherpad-purple mr-1" />
                  Recommended Actions
                </h3>
                <div className="space-y-2">
                  <button className="w-full bg-launcherpad-purple text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send to Sequence
                  </button>
                  <button className="w-full border border-launcherpad-purple text-launcherpad-purple py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                    <User className="w-4 h-4 mr-2" />
                    Give to Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI Element */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-8 top-1/3 z-10"
      >
        <div className="animate-float bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white/20 flex items-center">
          <div className="bg-[#6936F5]/20 rounded-lg p-2 mr-3">
            <Heart className="w-4 h-4 text-[#6936F5]" />
          </div>
          <div>
            <div className="text-gray-800 text-xs font-medium">
              New interaction
            </div>
            <div className="text-gray-600 text-xs">Liked your comment</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlatformDemo;
