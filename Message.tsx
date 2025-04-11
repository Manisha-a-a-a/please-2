import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Future Husband,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
        I love every single time with you. Be it fighting, loving, caring.
        Never knew a man so far will have so much value in my life
        that i will cry even if you have smallest scratch.
        Loving you was the best decision ever and im so proud of you.
        Always know, no matter what the time and situation is, im always with you ♡.
        I hope you have the best and healthiest life and achieve everything
        you want cause baby, you deserve it, you deserve all the happiness in the world ♡.
        Downfall ho ya upgrade, sab sathme karenge na? I believe in you baby more
        than i do in myself hehe... i will fight for you and i will fight for us.
        Manifesting my end with you and giving you all the love and care you deserve.
        I will try my best for you baby. I love you sooooo sooooooooooo much.❤
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, i wish you the happiest birthday my love
        </p>
      </motion.div>
    </div>
  );
};

export default Message;