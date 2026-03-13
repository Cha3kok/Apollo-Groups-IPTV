import React from 'react';
import ClientChannelSearch from './client-channel-search';

// Use SSR to fetch channels at build/request time for maximum SEO
async function getChannels() {
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
    title: 'Full Channel List | Apollo Groups',
    description: 'Browse the complete Apollo Groups channel lineup — sports, movies, series, news, and kids channels from around the world in 4K quality.',
}

export default async function ChannelsPage() {
    const allChannels = await getChannels();

    // Extract unique country prefixes and counts from categories (e.g., "IL| ", "US| ")
    const countryCounts: Record<string, number> = {};
    allChannels.forEach((channel: any) => {
        if (channel.category && channel.category.includes('|')) {
            const prefix = channel.category.split('|')[0].trim();
            if (prefix && prefix.length <= 5) {
                countryCounts[prefix] = (countryCounts[prefix] || 0) + 1;
            }
        }
    });
    const countries = Object.keys(countryCounts).sort();

    return (
        <div className="min-h-screen bg-[#0B0F13] py-10 px-4 text-[#F8FAFC]">
            <div className="max-w-7xl mx-auto">
                {/* --- SEO Optimized Header --- */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-6xl font-black text-[#F8FAFC] mb-4 tracking-tighter uppercase italic">
                        Official Channel List of <span className="text-[#10B981]">Apollo Groups</span>
                    </h1>

                    <div className="max-w-3xl mx-auto mb-6">
                        <p className="text-[#94A3B8] text-lg font-medium leading-relaxed">
                            Discover the <span className="text-[#F8FAFC] font-bold">most stable Apollo Groups lineup</span>.
                            Access {allChannels.length.toLocaleString()}+ premium IPTV channels including
                            <span className="text-[#10B981] font-bold"> 4K Sports, Movies & International Entertainment</span>.
                            The best streaming experience in 2026.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <span className="bg-[#151B23] border border-[#30363D] text-[#94A3B8] text-[10px] font-bold px-3 py-1 rounded-full uppercase">#1 Apollo Groups</span>
                        <span className="bg-[#151B23] border border-[#30363D] text-[#94A3B8] text-[10px] font-bold px-3 py-1 rounded-full uppercase">4K Ultra HD Quality</span>
                        <span className="bg-[#151B23] border border-[#30363D] text-[#94A3B8] text-[10px] font-bold px-3 py-1 rounded-full uppercase">Global Coverage</span>
                    </div>
                </div>

                {/* Client Component for Interactive Searching and Display */}
                <ClientChannelSearch initialChannels={allChannels} countries={countries} countryCounts={countryCounts} />

                {/* --- SEO Footer Text --- */}
                <footer className="mt-20 pt-10 border-t border-[#30363D] text-[#94A3B8] text-xs leading-relaxed max-w-4xl mx-auto text-center">
                    <p>
                        <strong>Apollo Groups</strong> offers the most reliable IPTV channel list in the world.
                        Our subscription includes 49,000+ categories including high-quality sports, movies, and news
                        from networks in <strong>USA, Canada, UK, and premium international channels</strong>.
                        Our service is compatible with all streaming devices and guarantees 99.9% uptime and premium quality.
                    </p>
                </footer>
            </div>
        </div>
    );
}