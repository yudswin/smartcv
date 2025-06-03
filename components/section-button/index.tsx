import React from 'react';
import { Section } from '@/constants/sections';
import { Card, CardContent } from '@/components/shadcn/card';

interface SectionButtonProps {
    section: Section;
    onClick?: () => void;
    selected?: boolean;
    disabled?: boolean;
    className?: string;
}

const SectionButton: React.FC<SectionButtonProps> = ({ section, onClick, selected, disabled, className }) => {
    let Icon: any = undefined;
    if (typeof (section as any).getIcon === 'function') {
        Icon = (section as any).getIcon;
    } else if (typeof section.icon === 'function') {
        Icon = section.icon;
    }
    return (
        <Card
            className={`e text-black cursor-pointer transition border-2 min-w-38 ${selected ? 'border-accent' : 'border-transparent'} hover:border-accent flex flex-col items-center w-38 ${className || ''} ${disabled ? 'pointer-events-none' : ''}`}
            style={{ background: section.color }}
            onClick={disabled ? undefined : onClick}
            tabIndex={0}
            role="button"
            aria-pressed={selected}
            aria-disabled={disabled}
        >
            <CardContent className='flex flex-col justify-center items-center'>
                {Icon && <Icon size={24} />}
                <span className="font-semibold text-center text-sm  w-full break-words">{section.name}</span>
            </CardContent>
        </Card>
    );
};

export default SectionButton;