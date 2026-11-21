import { useState } from "react";
import { Play, Pause, ArrowDownRight } from "lucide-react";

interface VoicePreset {
  name: string;
  locale: string;
  sampleRate: string;
  duration: string;
  bars: number[];
}

const PRESETS: VoicePreset[] = [
  {
    name: "Nadia",
    locale: "EN-US",
    sampleRate: "48kHz",
    duration: "03.2s",
    bars: [22, 46, 30, 74, 58, 92, 44, 82, 66, 38, 88, 70, 52, 95, 60, 40, 78, 54, 32, 68, 48, 84, 36, 56, 42, 26],
  },
  {
    name: "Tomas",
    locale: "ES-ES",
    sampleRate: "48kHz",
    duration: "04.1s",
    bars: [34, 62, 78, 48, 86, 54, 70, 42, 94, 64, 50, 76, 88, 40, 58, 82, 68, 46, 72, 90, 52, 44, 66, 38, 50, 30],
  },
  {
    name: "Hana",
    locale: "JA-JP",
    sampleRate: "48kHz",
    duration: "02.8s",
    bars: [18, 36, 54, 42, 68, 84, 60, 46, 72, 92, 78, 52, 64, 48, 86, 70, 40, 58, 76, 44, 62, 50, 34, 46, 28, 20],
  },
];

export function HeroWaveform() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const preset = PRESETS[activeIndex];

  return (
    <aside
      aria-label="Interactive audio waveform inspired by Resonance"
      className="rounded-xl border border-line bg-surface p-5 sm:p-6 space-y-5"
    >
      <div className="flex items-center justify-between gap-3">
        <div
          role="tablist"
          aria-label="Voice signal presets"
          className="inline-flex items-center gap-1 rounded-lg bg-paper p-1 border border-line"
        >
          {PRESETS.map((item, idx) => {
            const selected = idx === activeIndex;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveIndex(idx)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  selected
                    ? "bg-ink text-paper"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <span className="font-mono text-xs text-ink-muted tabular-nums">
          {preset.locale} / {preset.sampleRate}
        </span>
      </div>

      {/* Waveform Stage */}
      <div className="flex items-center gap-3.5 py-2">
        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-label={isPlaying ? "Pause waveform preview" : "Play waveform preview"}
          className="w-11 h-11 rounded-full bg-ink text-paper hover:opacity-90 flex items-center justify-center shrink-0 transition-opacity cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" aria-hidden="true" />
          ) : (
            <Play className="w-4 h-4 fill-current translate-x-[1px]" aria-hidden="true" />
          )}
        </button>

        <div
          className={`flex-1 flex items-center justify-between gap-[3px] h-14 ${
            isPlaying ? "waveform-playing" : ""
          }`}
          aria-hidden="true"
        >
          {preset.bars.map((height, idx) => {
            const isHighlighted = idx < 11;
            const duration = 0.9 + ((idx * 17) % 7) * 0.14;
            const delay = (idx * 65) % 600;
            return (
              <span
                key={`${preset.name}-${idx}`}
                className={`waveform-bar w-[3px] rounded-full ${
                  isHighlighted ? "bg-accent" : "bg-line-strong"
                }`}
                style={{
                  height: `${height}%`,
                  ["--bar-duration" as string]: `${duration.toFixed(2)}s`,
                  ["--bar-delay" as string]: `${delay}ms`,
                }}
              />
            );
          })}
        </div>

        <span className="font-mono text-xs text-ink-muted tabular-nums shrink-0">
          {preset.duration}
        </span>
      </div>

      <div className="pt-3.5 border-t border-line flex items-center justify-between gap-3 text-xs">
        <span className="text-ink-muted">
          Signal motif from <span className="text-ink font-medium">Resonance</span>
        </span>
        <a
          href="#project-resonance"
          className="inline-flex items-center gap-1 text-ink-secondary hover:text-accent font-medium transition-colors py-1"
        >
          <span>Inspect project</span>
          <ArrowDownRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
