'use client';

import React, { useState, useMemo } from 'react';
import { Search, Globe } from 'lucide-react';
import Image from 'next/image';

interface ClientChannelSearchProps {
    initialChannels: any[];
}

export default function ClientChannelSearch({ initialChannels }: ClientChannelSearchProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(60);

    const filteredChannels = useMemo(() => {
        if (!searchTerm) return initialChannels;
        const term = searchTerm.toLowerCase();
        return initialChannels.filter(c =>
            c.name?.toLowerCase().includes(term) ||
            c.category?.toLowerCase().includes(term)
        );
    }, [searchTerm, initialChannels]);

    const displayChannels = filteredChannels.slice(0, visibleCount);

    return (
        <>
            {/* Search Section */}
            <div className="relative max-w-3xl mx-auto mb-16">
                <div className="absolute -inset-1 bg-[#10B981] rounded-[2rem] blur opacity-10"></div>
                <div className="relative bg-[#151B23] border border-[#30363D] rounded-[2rem] shadow-xl overflow-hidden flex items-center">
                    <Search className="ms-6 text-[#94A3B8] w-6 h-6" />
                    <input
                        type="text"
                        placeholder="חיפוש בערוצי IPTV ישראל (לדוגמה: ספורט, קולנוע...)"
                        className="w-full ps-4 pe-8 py-6 bg-transparent outline-none text-xl font-semibold text-[#F8FAFC] placeholder-[#30363D]"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setVisibleCount(60);
                        }}
                    />
                </div>
            </div>

            {/* --- Channels Grid --- */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                {displayChannels.map((channel, index) => {
                    const rawLogo = channel.logo?.replace('https://', '').replace('http://', '') || '';
                    const proxiedLogo = `https://images.weserv.nl/?url=${encodeURIComponent(rawLogo)}&w=300&h=300&fit=contain&errorredirect=https://placehold.co/300x300/151B23/10B981?text=TV`;

                    return (
                        <div key={`${channel.id}-${index}`} className="group bg-[#151B23] rounded-3xl p-4 border border-[#30363D] hover:border-[#10B981] hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300">
                            <div className="relative aspect-square rounded-2xl bg-[#0B0F13] mb-4 overflow-hidden flex items-center justify-center border border-[#30363D]">
                                <Image
                                    src={proxiedLogo}
                                    alt={`${channel.name} - IPTV ישראל Channel`}
                                    fill
                                    unoptimized // Since passing through external Weserv proxy
                                    className="object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                            </div>
                            <h2 className="font-bold text-[12px] text-[#F8FAFC] line-clamp-2 min-h-[34px] leading-tight mb-2 uppercase tracking-tight">
                                {channel.name}
                            </h2>
                            <div className="flex items-center gap-1 text-[9px] font-extrabold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1.5 rounded-xl uppercase truncate">
                                <Globe className="w-3 h-3" />
                                {channel.category || 'ערוץ בינלאומי'}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Load More */}
            {visibleCount < filteredChannels.length && (
                <div className="mt-20 text-center pb-20">
                    <button
                        onClick={() => setVisibleCount(prev => prev + 60)}
                        className="px-12 py-5 bg-[#10B981] text-[#0B0F13] font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-[#10B981]/10"
                    >
                        טען ערוצים נוספים
                    </button>
                </div>
            )}
        </>
    );
}
