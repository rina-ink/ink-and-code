"use client";

import { useRef } from "react";

export default function StarTrail() {
    const trailRef = useRef<HTMLDivElement>(null);
    const lastStarTime = useRef(0);

    const createStar = (
        clientX: number,
        clientY: number,
        interval: number
    ) => {
        const now = performance.now();

        if (now - lastStarTime.current < interval) return;

        lastStarTime.current = now;

        const trail = trailRef.current;

        if (!trail) return;

        const rect = trail.getBoundingClientRect();

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const star = document.createElement("span");

        const symbols = ["·", "·", "·", "✦", "✧"];

        star.className = "cursor-star";

        star.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        star.style.setProperty(
            "--star-x",
            `${Math.random() * 24 - 12}px`
        );

        star.style.setProperty(
            "--star-y",
            `${Math.random() * 24 - 12}px`
        );

        star.style.setProperty(
            "--star-size",
            `${0.45 + Math.random() * 0.4}rem`
        );

        trail.appendChild(star);

        window.setTimeout(() => {
            star.remove();
        }, 1800);
    };

    const handlePointerMove = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        const interval = event.pointerType === "touch" ? 18 : 35;

        createStar(
            event.clientX,
            event.clientY,
            interval
        );
    };

    return (
        <div
            ref={trailRef}
            className="star-trail"
            onPointerMove={handlePointerMove}
            aria-hidden="true"
        />
    );
}