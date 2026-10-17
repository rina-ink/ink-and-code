"use client";

import { useEffect, useRef, useState } from "react";

export default function WakingStar() {
    const [isAwake, setIsAwake] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const wakeUp = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setIsAwake(true);

        timeoutRef.current = setTimeout(() => {
            setIsAwake(false);
        }, 2800);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <button
            type="button"
            className={`waking-star ${isAwake ? "is-awake" : ""}`}
            onPointerEnter={wakeUp}
            onClick={wakeUp}
            onFocus={wakeUp}
            aria-label="Discover hello world"
        >
            <span className="waking-star-symbol" aria-hidden="true">
                ✦
            </span>

            <span className="waking-constellation" aria-hidden="true">
                <span className="waking-line waking-line-1" />
                <span className="waking-line waking-line-2" />

                <span className="waking-dot waking-dot-1">·</span>
                <span className="waking-dot waking-dot-2">·</span>
                <span className="waking-dot waking-dot-3">✧</span>

                <span className="waking-message">
                    hello
                    <br />
                    world
                </span>
            </span>
        </button>
    );
}