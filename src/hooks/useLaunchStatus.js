import { useState, useEffect } from 'react';

/**
 * Official Launch Target: Monday, September 7, 2026 at 20:00:00 UTC-3 (America/Fortaleza)
 */
export const LAUNCH_DATE = new Date("2026-09-07T20:00:00-03:00");
export const LAUNCH_TIMESTAMP = LAUNCH_DATE.getTime();

/**
 * Reusable Launch Status Hook
 * Returns live countdown status, calculates remaining time, and handles instant auto-unlock.
 */
export function useLaunchStatus() {
  const [now, setNow] = useState(() => Date.now());
  const [serverOffset, setServerOffset] = useState(0);

  // 1. Initial Time Sync (Fetch server time or fallback gracefully)
  useEffect(() => {
    let isMounted = true;
    async function syncTime() {
      try {
        const res = await fetch('/api/time');
        if (res.ok) {
          const data = await res.json();
          if (data && data.now && isMounted) {
            const offset = data.now - Date.now();
            setServerOffset(offset);
            setNow(data.now);
          }
        }
      } catch (err) {
        // Fallback to client clock if server time fetch fails
      }
    }
    syncTime();
  }, []);

  // 2. Continuous 1-Second Interval Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now() + serverOffset);
    }, 1000);

    return () => clearInterval(timer);
  }, [serverOffset]);

  const currentEffectiveTime = now;
  const remainingMs = Math.max(0, LAUNCH_TIMESTAMP - currentEffectiveTime);
  const isLaunched = currentEffectiveTime >= LAUNCH_TIMESTAMP;

  // Breakdown remaining time units
  const totalSeconds = Math.floor(remainingMs / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num) => String(num).padStart(2, '0');

  return {
    isLaunched,
    remainingMs,
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    rawDays: days,
    rawHours: hours,
    rawMinutes: minutes,
    rawSeconds: seconds,
  };
}
