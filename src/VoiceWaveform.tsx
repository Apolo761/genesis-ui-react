import { useEffect, useRef } from 'react';

const BAR_PITCH = 6;
const BAR_INTERVAL_MS = 180;

/** Keep recorded bars fixed in shape and move the whole strip at 33 px/second. */
export function VoiceWaveform({ levels }: { levels: number[] }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const latest = useRef(0);
  latest.current = Math.max(0, Math.min(1, levels[levels.length - 1] || 0));

  useEffect(() => {
    const viewport = root.current;
    const strip = track.current;
    if (!viewport || !strip) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let previous: number | undefined;
    let phase = 0;
    let envelope = 0;
    let count = 2;
    const bar = (level = 0) => {
      const element = document.createElement('i');
      element.style.height = `${3 + level * 25}px`;
      return element;
    };
    const resize = () => {
      count = Math.max(2, Math.ceil(viewport.clientWidth / BAR_PITCH) + 2);
      while (strip.children.length < count) strip.prepend(bar());
      while (strip.children.length > count) strip.firstElementChild?.remove();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    const animate = (time: number) => {
      // Pause visual time across background-tab stalls instead of jumping/catching up.
      const elapsed = previous === undefined ? 0 : Math.min(40, time - previous);
      previous = time;
      const target = latest.current;
      const smoothing = target > envelope ? 65 : 180;
      envelope += (target - envelope) * (1 - Math.exp(-elapsed / smoothing));
      phase += elapsed;
      if (phase >= BAR_INTERVAL_MS) {
        phase -= BAR_INTERVAL_MS;
        if (motion.matches) {
          // Reduced motion retains a stationary live meter without horizontal travel.
          const meter = strip.children.item(count - 2) as HTMLElement | null;
          if (meter) meter.style.height = `${3 + envelope * 25}px`;
        } else {
          strip.firstElementChild?.remove();
          strip.append(bar(envelope));
        }
      }
      strip.style.transform = `translate3d(${-BAR_PITCH * (motion.matches ? 0 : phase / BAR_INTERVAL_MS)}px, 0, 0)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      strip.replaceChildren();
    };
  }, []);

  return <div className="genesis-voice-wave" ref={root} aria-hidden="true">
    <div className="genesis-voice-wave-track" ref={track} />
  </div>;
}
