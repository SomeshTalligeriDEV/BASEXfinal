import React from 'react';
import { Button } from './Button';

interface ProphecyCardProps {
  thumbnail: string;
  title: string;
  viralScore: number;
  metrics: {
    views: string;
    ctr: string;
    avgWatchTime: string;
    sentiment: string;
  };
  onSealProphecy?: () => void;
}

export const ProphecyCard: React.FC<ProphecyCardProps> = ({
  thumbnail,
  title,
  viralScore,
  metrics,
  onSealProphecy,
}) => {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
      <div className="relative aspect-video mb-4">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-md w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-purple-500/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {viralScore}% Viral
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-4 line-clamp-2">{title}</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-purple-400 text-sm">Est. Views</p>
          <p className="text-white font-semibold">{metrics.views}</p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-teal-400 text-sm">CTR</p>
          <p className="text-white font-semibold">{metrics.ctr}</p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-crimson-400 text-sm">Avg Watch</p>
          <p className="text-white font-semibold">{metrics.avgWatchTime}</p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-purple-400 text-sm">Sentiment</p>
          <p className="text-white font-semibold">{metrics.sentiment}</p>
        </div>
      </div>
      
      {onSealProphecy && (
        <Button 
          onClick={onSealProphecy}
          className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
        >
          Seal Prophecy on Base
        </Button>
      )}
    </div>
  );
};