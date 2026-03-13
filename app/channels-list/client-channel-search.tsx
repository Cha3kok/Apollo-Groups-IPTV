'use client';

import React, { useState, useMemo } from 'react';
import { Search, Globe } from 'lucide-react';
import Image from 'next/image';

interface ClientChannelSearchProps {
    initialChannels: any[];
    countries: string[];
    countryCounts: Record<string, number>;
}

const COUNTRY_MAP: Record<string, string> = {
    'IL': 'Israel',
    'US': 'USA',
    'UK': 'United Kingdom',
    'FR': 'France',
    'DE': 'Germany',
    'ES': 'Spain',
    'IT': 'Italy',
    'TR': 'Turkey',
    'RU': 'Russia',
    'BR': 'Brazil',
    'AR': 'Argentina',
    'MX': 'Mexico',
    'CA': 'Canada',
    'AU': 'Australia',
    'NL': 'Netherlands',
    'BE': 'Belgium',
    'PT': 'Portugal',
    'PL': 'Poland',
    'GR': 'Greece',
    'RO': 'Romania',
    'HU': 'Hungary',
    'CZ': 'Czechia',
    'AT': 'Austria',
    'CH': 'Switzerland',
    'SE': 'Sweden',
    'NO': 'Norway',
    'DK': 'Denmark',
    'FI': 'Finland',
    'IN': 'India',
    'PK': 'Pakistan',
    'AE': 'UAE',
    'SA': 'Saudi Arabia',
    'EG': 'Egypt',
    'MA': 'Morocco',
    'TN': 'Tunisia',
    'DZ': 'Algeria',
    'LB': 'Lebanon',
    'JO': 'Jordan',
    'SY': 'Syria',
    'IQ': 'Iraq',
    'KW': 'Kuwait',
    'QA': 'Qatar',
    'OM': 'Oman',
    'BH': 'Bahrain',
    'CN': 'China',
    'JP': 'Japan',
    'KR': 'South Korea',
    'TH': 'Thailand',
    'VN': 'Vietnam',
    'ID': 'Indonesia',
    'PH': 'Philippines',
    'MY': 'Malaysia',
    'SG': 'Singapore',
    'ZA': 'South Africa',
    'NG': 'Nigeria',
    'KE': 'Kenya',
    'GH': 'Ghana',
    'ASIA': 'Asia',
    'EU': 'Europe',
    'LATAM': 'Latin America',
    'MENA': 'Middle East',
    'AF': 'Africa',
    'WW': 'Worldwide',
};

const getFlagUrl = (code: string) => {
    const specialCodes: Record<string, string> = {
        'UK': 'gb',
        'GR': 'gr',
        'ASIA': 'un',
        'EU': 'eu',
        'WW': 'un'
    };
    const c = specialCodes[code] || code.toLowerCase();
    if (['asia', 'latam', 'mena', 'af'].includes(c)) return null;
    return `https://flagcdn.com/w40/${c}.png`;
};

export default function ClientChannelSearch({ initialChannels, countries, countryCounts }: ClientChannelSearchProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(60);

    const filteredChannels = useMemo(() => {
        let result = initialChannels;

        if (selectedCountry) {
            result = result.filter(c => c.category?.startsWith(`${selectedCountry}|`));
        }

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(c =>
                c.name?.toLowerCase().includes(term) ||
                c.category?.toLowerCase().includes(term)
            );
        }

        return result;
    }, [searchTerm, selectedCountry, initialChannels]);

    const displayChannels = filteredChannels.slice(0, visibleCount);

    return (
        <>
            {/* Search Section */}
            <div className="relative max-w-3xl mx-auto mb-10">
                <div className="absolute -inset-1 bg-[#10B981] rounded-[2rem] blur opacity-10"></div>
                <div className="relative bg-[#151B23] border border-[#30363D] rounded-[2rem] shadow-xl overflow-hidden flex items-center">
                    <Search className="ml-6 text-[#94A3B8] w-6 h-6" />
                    <input
                        type="text"
                        placeholder="Search Apollo Groups channels (e.g. Sports, Movies...)"
                        className="w-full pl-4 pr-8 py-6 bg-transparent outline-none text-xl font-semibold text-[#F8FAFC] placeholder-[#30363D]"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setVisibleCount(60);
                        }}
                    />
                </div>
            </div>

            {/* Country Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
                <button
                    onClick={() => {
                        setSelectedCountry(null);
                        setVisibleCount(60);
                    }}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${!selectedCountry
                        ? 'bg-[#10B981] text-[#0B0F13] shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : 'bg-[#151B23] text-[#94A3B8] border border-[#30363D] hover:border-[#10B981] hover:text-[#F8FAFC]'
                    }`}
                >
                    <span>All</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-lg ${!selectedCountry ? 'bg-[#0B0F13]/20 text-[#0B0F13]' : 'bg-[#30363D] text-[#94A3B8]'}`}>
                        {initialChannels.length.toLocaleString()}
                    </span>
                </button>
                {countries.map(country => {
                    const flagUrl = getFlagUrl(country);
                    return (
                        <button
                            key={country}
                            onClick={() => {
                                setSelectedCountry(country);
                                setVisibleCount(60);
                            }}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${selectedCountry === country
                                ? 'bg-[#10B981] text-[#0B0F13] shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                                : 'bg-[#151B23] text-[#94A3B8] border border-[#30363D] hover:border-[#10B981] hover:text-[#F8FAFC]'
                            }`}
                        >
                            {flagUrl ? (
                                <div className="relative w-5 h-3.5 rounded-sm overflow-hidden flex-shrink-0">
                                    <Image
                                        src={flagUrl}
                                        alt={country}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            ) : (
                                <Globe className="w-4 h-4 flex-shrink-0" />
                            )}
                            <span>{COUNTRY_MAP[country] || country}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-lg ${selectedCountry === country ? 'bg-[#0B0F13]/20 text-[#0B0F13]' : 'bg-[#30363D] text-[#94A3B8]'}`}>
                                {countryCounts[country]?.toLocaleString()}
                            </span>
                        </button>
                    );
                })}
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
                                    alt={`${channel.name} - Apollo Groups Channel`}
                                    fill
                                    unoptimized
                                    className="object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                            </div>
                            <h2 className="font-bold text-[12px] text-[#F8FAFC] line-clamp-2 min-h-[34px] leading-tight mb-2 uppercase tracking-tight">
                                {channel.name}
                            </h2>
                            <div className="flex items-center gap-1 text-[9px] font-extrabold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1.5 rounded-xl uppercase truncate">
                                <Globe className="w-3 h-3" />
                                {channel.category || 'International Channel'}
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
                        Load More Channels
                    </button>
                </div>
            )}
        </>
    );
}
