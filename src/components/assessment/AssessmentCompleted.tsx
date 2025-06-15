
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const AssessmentCompleted = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center h-full">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
                className="w-24 h-24 bg-launchpad-green rounded-full flex items-center justify-center mb-6"
            >
                <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </motion.div>
            <h2 className="text-3xl font-display font-bold text-slate-800 mb-2">Assessment Complete!</h2>
            <p className="text-slate-600 text-lg">
                Amazing! We're now generating your personalized entrepreneurial profile.
            </p>
        </div>
    );
};

export default AssessmentCompleted;
