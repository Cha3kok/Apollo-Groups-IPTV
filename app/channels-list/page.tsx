import React from 'react';
import { Search, Tv, Globe } from 'lucide-react';
import Image from 'next/image';
import ClientChannelSearch from './client-channel-search';

// Use SSR to fetch channels at build/request time for maximum SEO
async function getChannels() {
    // In production, you would fetch from your DB or API.
    // Given the local JSON setup, simulating a require/fetch for Server Component:
    try {
        const fs = require('fs');
        const path = require('path');
        const dataPath = path.join(process.cwd(), 'public', 'data', 'channels.json');
        const fileContent = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(fileContent);
    } catch (e) {
        console.error('Error loading channels:', e);
        return [];
    }
}

export const metadata = {
    title: 'רשימת הערוצים הרשמית | IPTV ישראל',
    description: 'גלו את רשימת ערוצי ה-IPTV המלאה של IPTV ישראל כולל ספורט, סרטים וסדרות מכל העולם באיכות 4K.',
}

export default async function ChannelsPage() {
    const allChannels = await getChannels();

    return (
        <div className="min-h-screen bg-[#0B0F13] py-10 px-4 text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto">
                {/* --- SEO Optimized Header --- */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-6xl font-black text-[#F8FAFC] mb-4 tracking-tighter uppercase italic">
                        רשימת הערוצים הרשמית של <span className="text-[#10B981]">IPTV ישראל</span>
                    </h1>

                    <div className="max-w-3xl mx-auto mb-6">
                        <p className="text-[#94A3B8] text-lg font-medium leading-relaxed">
                            גלו את <span className="text-[#F8FAFC] font-bold">הליינאפ היציב ביותר של IPTV ישראל</span>.
                            גישה ליותר מ-{allChannels.length.toLocaleString()} ערוצי פרימיום כולל
                            <span className="text-[#10B981] font-bold"> ספורט ב-4K, סרטים ובידור בינלאומי</span>.
                            חוויית הסטרימינג הטובה ביותר לשנת 2026.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <span className="bg-[#151B23] border border-[#30363D] text-[#94A3B8] text-[10px] font-bold px-3 py-1 rounded-full uppercase">#1 IPTV ישראל</span>
                        <span className="bg-[#151B23] border border-[#30363D] text-[#94A3B8] text-[10px] font-bold px-3 py-1 rounded-full uppercase">איכות 4K Ultra HD</span>
                        <span className="bg-[#151B23] border border-[#30363D] text-[#94A3B8] text-[10px] font-bold px-3 py-1 rounded-full uppercase">כיסוי עולמי מורחב</span>
                    </div>
                </div>

                {/* Client Component for Interactive Searching and Display */}
                <ClientChannelSearch initialChannels={allChannels} />

                {/* --- SEO Footer Text --- */}
                <footer className="mt-20 pt-10 border-t border-[#30363D] text-[#94A3B8] text-xs leading-relaxed max-w-4xl mx-auto text-center">
                    <p>
                        <strong>IPTV ישראל</strong> מציעה את רשימת ערוצי ה-IPTV האמינה בעולם.
                        המנוי שלנו כולל למעלה מ-49,000 קטגוריות כולל ספורט באיכות גבוהה, סרטים וחדשות 
                        מרשתות ב<strong>ארה"ב, קנדה, בריטניה וערוצי פרימיום בינלאומיים</strong>.
                        השירות מותאם לכל מכשירי הסטרימינג, ומבטיח זמינות של 99.9% ואיכות פרימיום.
                    </p>
                </footer>
            </div>
        </div>
    );
}