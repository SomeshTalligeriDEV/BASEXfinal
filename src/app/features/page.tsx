import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const features = [
  {
    icon: '🔮',
    title: 'AI Viral Prophecy',
    description: 'Harness the power of advanced AI to predict your content\'s viral potential'
  },
  {
    icon: '⛓',
    title: 'On-Chain Transparency',
    description: 'Every prophecy is sealed on the Base blockchain for immutable verification'
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    description: 'Track performance metrics and insights as they happen'
  },
  {
    icon: '🧠',
    title: 'Kami Insights',
    description: 'Receive spiritual guidance from our AI oracle for content optimization'
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Banner */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Unleash Prophetic Power on Base
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Discover how KamiBase Prophet empowers creators with divine foresight
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-8 hover:glow transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold gradient-text mb-4">
                {feature.title}
              </h3>
              <p className="text-white/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-lg px-8 py-4">
              Try KamiBase Prophet Now
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}