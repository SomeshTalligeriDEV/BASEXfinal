import { Metadata } from "next";
import App from "./app";
import { APP_NAME, APP_DESCRIPTION, APP_OG_IMAGE_URL } from "~/lib/constants";
import { getFrameEmbedMetadata } from "~/lib/utils";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: APP_NAME,
    openGraph: {
      title: APP_NAME,
      description: APP_DESCRIPTION,
      images: [APP_OG_IMAGE_URL],
    },
    other: {
      "fc:frame": JSON.stringify(getFrameEmbedMetadata()),
    },
  };
}

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          <span className="gradient-text">KamiBase Prophet</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 text-center mb-12">
          Awaken your video's kami on Base
        </p>

        <Link href="/dashboard">
          <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-lg px-8 py-4">
            Summon Your First Prophecy
          </Button>
        </Link>
      </div>

      {/* Feature Highlights */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 hover:glow transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 gradient-text">AI Predictions</h3>
            <p className="text-white/60">
              Advanced AI algorithms predict your video's viral potential with precision
            </p>
          </div>

          <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 hover:glow transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Blockchain Storage</h3>
            <p className="text-white/60">
              Immortalize your prophecies on the Base blockchain for transparency
            </p>
          </div>

          <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 hover:glow transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Real-Time Analytics</h3>
            <p className="text-white/60">
              Track your content's performance with detailed metrics and insights
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
