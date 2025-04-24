// src/components/TechVisualizations.tsx
import { useState, useEffect } from 'react';

interface TechSkillProps {
    category: string;
    skills: string[];
    animationType: 'code' | 'pulse' | 'matrix' | 'radar';
}

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const TechSkill = ({ category, skills, animationType }: TechSkillProps) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        // Stagger the animations
        const timer = setTimeout(() => {
            setActive(true);
        }, getRandomInt(100, 800));

        return () => clearTimeout(timer);
    }, []);

    const renderCodeAnimation = () => {
        return (
            <div className="relative h-full w-full overflow-hidden flex flex-col">
                <div className="text-sm font-mono overflow-hidden h-full">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="text-[var(--primary-color)]"
                            style={{
                                opacity: active ? 1 : 0,
                                transform: active ? 'translateY(0)' : 'translateY(20px)',
                                transition: `all 0.3s ease-out ${index * 0.1}s`
                            }}
                        >
                            <span className="text-[var(--terminal-green)]">import</span> {skill} <span className="text-[var(--terminal-green)]">from</span> '{category.toLowerCase()}'
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderPulseAnimation = () => {
        return (
            <div className="relative h-full w-full flex flex-wrap justify-center content-center gap-2">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="px-2 py-1 rounded-full text-xs"
                        style={{
                            background: `var(--primary-color)`,
                            color: 'var(--background-color)',
                            opacity: active ? 1 : 0,
                            transform: active ? 'scale(1)' : 'scale(0.5)',
                            transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s`,
                            animation: active ? `pulse${index % 3 + 1} 2s infinite ${index * 0.2}s` : 'none'
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        );
    };

    const renderMatrixAnimation = () => {
        return (
            <div className="relative h-full w-full overflow-hidden">
                {/* Background binary animation */}
                <div className="absolute inset-0 opacity-20 z-0 overflow-hidden">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-[var(--primary-color)] font-mono text-xs"
                            style={{
                                left: `${i * 10}%`,
                                top: active ? '120%' : '-100%',
                                transition: `top ${3 + i * 0.5}s linear infinite`,
                                animationName: active ? 'matrixRainDrop' : 'none',
                                animationDuration: `${5 + getRandomInt(1, 5)}s`,
                                animationIterationCount: 'infinite',
                                animationDelay: `${i * 0.3}s`
                            }}
                        >
                            {Array.from({ length: 20 }).map((_, j) => (
                                <div key={j}>
                                    {Math.random() > 0.5 ? '1' : '0'}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Skills list */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="text-[var(--primary-color)] font-mono my-1"
                            style={{
                                opacity: active ? 1 : 0,
                                transform: active ? 'translateY(0)' : 'translateY(30px)',
                                transition: `all 0.5s ease ${index * 0.12}s`
                            }}
                        >
                            &gt; {skill}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderRadarAnimation = () => {
        return (
            <div className="relative h-full w-full flex items-center justify-center">
                {/* Radar circles */}
                <div className="absolute w-48 h-48 rounded-full border border-[var(--primary-color)] opacity-20"></div>
                <div
                    className="absolute w-36 h-36 rounded-full border border-[var(--primary-color)] opacity-30"
                    style={{
                        animation: active ? 'radar-pulse 3s infinite' : 'none'
                    }}
                ></div>
                <div
                    className="absolute w-24 h-24 rounded-full border border-[var(--primary-color)] opacity-40"
                    style={{
                        animation: active ? 'radar-pulse 3s infinite 0.5s' : 'none'
                    }}
                ></div>

                {/* Radar sweep */}
                <div
                    className="absolute w-24 h-24 origin-center"
                    style={{
                        transformOrigin: 'center',
                        animation: active ? 'radar-sweep 4s linear infinite' : 'none'
                    }}
                >
                    <div className="h-24 w-1 bg-gradient-to-b from-[var(--primary-color)] to-transparent"></div>
                </div>

                {/* Skills displayed as points */}
                {skills.map((skill, index) => {
                    const angle = (360 / skills.length) * index;
                    const radius = 18 + (index % 3) * 6;
                    const x = Math.cos(angle * (Math.PI / 180)) * radius;
                    const y = Math.sin(angle * (Math.PI / 180)) * radius;

                    return (
                        <div
                            key={index}
                            className="absolute w-2 h-2 rounded-full bg-[var(--primary-color)]"
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                                opacity: active ? 1 : 0,
                                transition: `all 0.5s ease ${index * 0.1}s`,
                                boxShadow: '0 0 5px var(--primary-color)'
                            }}
                        >
                            <div
                                className="absolute whitespace-nowrap text-xs text-[var(--primary-color)]"
                                style={{
                                    left: x > 0 ? '100%' : 'auto',
                                    right: x <= 0 ? '100%' : 'auto',
                                    marginLeft: x > 0 ? '5px' : '0',
                                    marginRight: x <= 0 ? '5px' : '0',
                                    top: '0'
                                }}
                            >
                                {skill}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderAnimation = () => {
        switch (animationType) {
            case 'code':
                return renderCodeAnimation();
            case 'pulse':
                return renderPulseAnimation();
            case 'matrix':
                return renderMatrixAnimation();
            case 'radar':
                return renderRadarAnimation();
            default:
                return renderCodeAnimation();
        }
    };

    return (
        <div className="bg-[var(--card-background)] p-6 rounded-lg border border-[var(--border-color)] hover:shadow-[var(--shadow-color)] transition-all duration-300 h-60"
            style={{
                height: 'fit-content',
            }}>
            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4 flex items-center">
                <span className="text-[var(--terminal-green)] mr-2">$</span> {category}
            </h3>
            <div className="h-48 flex items-center justify-center">
                {renderAnimation()}
            </div>
        </div>
    );
};