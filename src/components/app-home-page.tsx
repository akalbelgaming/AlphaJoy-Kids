
"use client";

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Type, Hash, Square, Fingerprint, BookOpen, Paintbrush, Wand2, Mic, Languages, Brain, HelpCircle, FileText } from 'lucide-react';
import { AppLogo } from './app-logo';
import { AdBanner } from './ad-placeholder';

const activities = [
  { href: '/letters', icon: <Type />, title: 'Trace Letters', description: 'Learn ABCs by tracing', color: 'bg-red-100 text-red-600', aiHint: 'alphabet blocks' },
  { href: '/numbers', icon: <Hash />, title: 'Trace Numbers', description: 'Practice writing 1 to 100', color: 'bg-blue-100 text-blue-600', aiHint: 'number blocks' },
  { href: '/counting', icon: <Fingerprint />, title: 'Learn to Count', description: 'Count objects on screen', color: 'bg-green-100 text-green-600', aiHint: 'counting apples' },
  { href: '/shapes', icon: <Square />, title: 'Color Shapes', description: 'Color beautiful shapes', color: 'bg-yellow-100 text-yellow-600', aiHint: 'geometric shapes' },
  { href: '/coloring', icon: <Wand2 />, title: 'AI Coloring Book', description: 'AI draws pages for you', color: 'bg-purple-100 text-purple-600', aiHint: 'magic coloring' },
  { href: '/drawing', icon: <Paintbrush />, title: 'Free Drawing', description: 'Unleash your creativity', color: 'bg-pink-100 text-pink-600', aiHint: 'art canvas' },
  { href: '/reading', icon: <BookOpen />, title: 'Practice Reading', description: 'Trace and read words', color: 'bg-indigo-100 text-indigo-600', aiHint: 'open book' },
  { href: '/story', icon: <Brain />, title: 'Story Time', description: 'Listen to fun stories', color: 'bg-orange-100 text-orange-600', aiHint: 'storybook' },
  { href: '/poem', icon: <Mic />, title: 'English Poems', description: 'Listen to classic rhymes', color: 'bg-teal-100 text-teal-600', aiHint: 'microphone music' },
  { href: '/hindi', icon: <Languages />, title: 'Hindi Alphabets', description: 'Trace क, ख, ग...', color: 'bg-cyan-100 text-cyan-600', aiHint: 'hindi script' },
  { href: '/hindivowels', icon: <Languages />, title: 'Hindi Vowels', description: 'Trace अ, आ, इ...', color: 'bg-cyan-100 text-cyan-600', aiHint: 'hindi letters' },
  { href: '/kabita', icon: <Mic />, title: 'Hindi Kabita', description: 'Listen to Hindi poems', color: 'bg-rose-100 text-rose-600', aiHint: 'singing bird' },
  { href: '/pahada', icon: <FileText />, title: 'Learn Tables', description: 'Read multiplication tables', color: 'bg-lime-100 text-lime-600', aiHint: 'math chart' },
];

export function AppHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="p-4 bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center gap-4">
          <AppLogo className="h-10 w-10" />
          <h1 className="text-xl font-bold font-headline">AlphaJoy Kids</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activities.map((activity) => (
            <Link href={activity.href} key={activity.href} className="block">
              <Card className="h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
                <CardHeader className={`flex items-center justify-center p-4 ${activity.color}`}>
                   <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/50">
                     {activity.icon && React.cloneElement(activity.icon, { className: "w-8 h-8" })}
                   </div>
                </CardHeader>
                <CardContent className="p-3 text-center">
                  <CardTitle className="text-base font-bold text-foreground">{activity.title}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

       <div className="fixed bottom-0 left-0 right-0 p-2 bg-background/80 backdrop-blur-sm border-t z-10">
        <AdBanner className="max-w-4xl mx-auto"/>
      </div>
    </div>
  );
}
