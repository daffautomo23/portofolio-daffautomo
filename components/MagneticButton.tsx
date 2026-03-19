'use client';

import { ReactNode, useRef, useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils'; // Assuming I'll create a lib/utils.ts for tailwind-merge/clsx

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    as?: 'button' | 'a';
    href?: string;
}

export default function MagneticButton({
    children,
    className,
    onClick,
    as = 'button',
    href
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const wrapperProps = {
        ref,
        onMouseMove: handleMouse,
        onMouseLeave: reset,
        onClick,
        className: cn("relative inline-flex z-10", className)
    };

    const Component = as === 'a' ? 'a' : 'button';

    return (
        <div {...wrapperProps}>
            <motion.div
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                <Component href={href} className="flex h-full w-full items-center justify-center">
                    {children}
                </Component>
            </motion.div>
        </div>
    );
}
