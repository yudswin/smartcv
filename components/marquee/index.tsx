"use client"
import { useEffect, useRef, useState, useMemo, ReactNode } from "react";
import { FaBolt, FaCommentDots, FaFeather, FaGoogle, FaRobot, FaSearch, FaSmileBeam, FaUserCircle, FaWind, FaGithub } from "react-icons/fa";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import { SiGooglegemini, SiGithubcopilot } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiClaudeFill } from "react-icons/ri";
import Image from "next/image";


function wrap(min: number, max: number, value: number) {
    const range = max - min;
    return (((value - min) % range) + range) % range + min;
}

const MotionDiv = motion.div;

type Tweet = {
    username: string;
    name: string;
    text: string;
    link: string;
};

const defaultTweets: Tweet[] = [
    {
        username: "@ChatGPT",
        name: "ChatGPT",
        text: "This Resume Builder app nails the balance between aesthetics and functionality. Impressive stuff!",
        link: "https://openai.com/chatgpt"
    },
    {
        username: "@GeminiAI",
        name: "Gemini",
        text: "Sleek UI, smart UX. This resume app could be your next job-winning tool 🚀",
        link: "https://deepmind.google/gemini"
    },
    {
        username: "@ClaudeAI",
        name: "Claude",
        text: "Minimal, elegant, and effective – just what you'd want in a resume tool.",
        link: "https://www.anthropic.com/index/claude"
    },
    {
        username: "@Copilot",
        name: "GitHub Copilot",
        text: "Resume Builder app is cleanly coded and a joy to interact with. Top-notch developer UX.",
        link: "https://github.com/features/copilot"
    },
    {
        username: "@DeepSeekAI",
        name: "DeepSeek",
        text: "A powerful resume tool with precision and polish. Excellent for professionals and coders alike.",
        link: "https://deepseek.com"
    },
    {
        username: "@GrokAI",
        name: "Grok",
        text: "It's smart, fast, and fun - this resume builder has some serious flair!",
        link: "https://x.ai"
    }
];

const brandIcons: Record<string, ReactNode> = {
    "@ChatGPT": <AiOutlineOpenAI size={50} className="shrink-0 text-emerald-500" />,
    "@GeminiAI": <SiGooglegemini size={50} className="shrink-0 text-blue-500" />,
    "@ClaudeAI": <RiClaudeFill size={50} className="shrink-0 text-orange-600" />,
    "@Copilot": <SiGithubcopilot size={50} className="shrink-0 text-gray-800 dark:text-gray-300" />,
    "@PerplexityAI": <FaSearch size={50} className="shrink-0 text-indigo-500 dark:text-indigo-300" />,
    "@MistralAI": <FaWind size={50} className="shrink-0 text-sky-400 dark:text-sky-300" />,
    "@LLaMA3": <FaFeather size={50} className="shrink-0 text-pink-400 dark:text-pink-300" />,
    "@GroqAI": <FaBolt size={50} className="shrink-0 text-yellow-500 dark:text-yellow-400" />,
    "@PiAI": <FaSmileBeam size={50} className="shrink-0 text-orange-400 dark:text-orange-300" />,
    "@DeepSeekAI": <Image src="/deepseek-color.svg" alt="Deepseek" width={50} height={50} className="shrink-0" />,
    "@GrokAI": <>
        <Image src="/grok.svg" alt="GrokAI" width={50} height={50} className="dark:hidden dark:-rotate-90 scale-100 block transition-all" />
        <Image src="/grok.webp" alt="GrokAI" width={50} height={50} className="hidden rotate-90 transition-all dark:block dark:rotate-0" />
    </>,
};

interface CardProps {
    tweet: Tweet;
    rotation: number;
    isFirst: boolean;
    onPause: () => void;
    onResume: () => void;
}

const Card: React.FC<CardProps> = ({ tweet, rotation, isFirst, onPause, onResume }) => (
    <a
        href={tweet.link}
        rel="noreferrer"
        target="_blank"
        className={`tweet-card flex flex-col justify-start p-6 border rounded-[25px] shadow-md hover:rotate-${-rotation} ${isFirst ? '' : 'ml-5'} min-w-[320px] max-w-[340px] min-h-[180px] no-underline transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:bg-[#060606] dark:border-[#333] dark:text-white bg-white border-gray-200 text-gray-900`}
        style={{ transform: `rotate(${rotation}deg)` }}
        onMouseEnter={onPause}
        onMouseLeave={onResume}
    >
        <div className="flex gap-4 items-center mb-6">
            {brandIcons[tweet.username] || <FaUserCircle size={50} className="shrink-0 text-gray-400 dark:text-gray-400" />}
            <div className="flex flex-col">
                <span className="font-extrabold">{tweet.name}</span>
                <span className="text-xs text-gray-500 dark:text-[#999]">{tweet.username}</span>
            </div>
        </div>
        <span className="font-light leading-tight text-xs whitespace-pre-wrap text-gray-900 dark:text-white">{tweet.text}</span>
    </a>
);

interface MarqueeProps {
    tweets?: Tweet[];
    speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ tweets = defaultTweets, speed = 50 }) => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const baseX = useMotionValue(0);
    const [fullWidth, setFullWidth] = useState(0);
    const [paused, setPaused] = useState(false);

    const repeatedTweets = useMemo(() => [...tweets, ...tweets], [tweets]);
    const tweetRotations = useMemo(
        () => tweets.map((_, i) => (i % 2 === 0 ? 5 : -5)),
        [tweets]
    );

    useEffect(() => {
        if (trackRef.current) {
            setFullWidth(trackRef.current.scrollWidth);
        }
    }, [repeatedTweets]);

    const halfWidth = fullWidth / 2;
    const x = useTransform(baseX, (v) => wrap(-halfWidth, 0, v));

    useAnimationFrame((_, delta) => {
        if (!paused && halfWidth > 0) {
            const moveBy = (speed * delta) / 1000;
            baseX.set(baseX.get() - moveBy);
        }
    });

    return (
        <div className="relative w-full overflow-hidden marquee-container py-8 bg-white dark:bg-[#060606]">
            <MotionDiv ref={trackRef} className="marquee-track flex gap-6" style={{ x }}>
                {repeatedTweets.map((tweet, index) => {
                    const rotation = tweetRotations[index % tweets.length];
                    return (
                        <Card
                            key={index}
                            tweet={tweet}
                            rotation={rotation}
                            isFirst={index === 0}
                            onPause={() => setPaused(true)}
                            onResume={() => setPaused(false)}
                        />
                    );
                })}
            </MotionDiv>
            {/* Gradient overlay for light/dark mode using Tailwind classes only */}
            <div className="gradient-overlay absolute pointer-events-none inset-0 bg-[linear-gradient(90deg,_#fff_0%,_transparent_10%,_transparent_90%,_#fff_100%)] dark:bg-[linear-gradient(90deg,_#060606_0%,_transparent_10%,_transparent_90%,_#060606_100%)]" />
        </div>
    );
};

export default Marquee;