import React, { useState } from 'react';
import { ProphecyCard } from '@/components/ui/ProphecyCard';
import { Button } from '@/components/ui/Button';

export default function Dashboard() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [prophecy, setProphecy] = useState<any>(null);

  const handleSummonProphecy = async () => {
    // TODO: Implement prophecy generation logic
    setProphecy({
      thumbnail: 'https://i.ytimg.com/vi/sample/maxresdefault.jpg',
      title: 'How to Build Amazing Apps in 2025',
      viralScore: 78,
      metrics: {
        views: '2.4M',
        ctr: '8.2%',
        avgWatchTime: '4:32',
        sentiment: '92%'
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-4">
            Summon Your Prophecy
          </h1>
          <p className="text-white/60 text-lg mb-8">
            Unveil the viral destiny of your YouTube video
          </p>
          
          <div className="flex gap-4 mb-12">
            <input
              type="text"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="Paste YouTube URL here..."
              className="flex-1 bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-all"
            />
            <Button
              onClick={handleSummonProphecy}
              className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 px-8"
            >
              Summon Prophecy
            </Button>
          </div>
          
          {prophecy && (
            <div className="max-w-2xl mx-auto">
              <ProphecyCard {...prophecy} onSealProphecy={() => {}} />
            </div>
          )}
        </div>

        {/* Recent Prophecies */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Recent Prophecies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add sample prophecy cards here */}
          </div>
        </div>
      </main>
    </div>
  );
}