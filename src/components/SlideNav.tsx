import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '../data/slideContent';

interface SlideNavProps {
  current: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function SlideNav({ current, onPrev, onNext }: SlideNavProps) {
  const total = slides.length;
  return (
    <div className="bottom-nav">
      <button onClick={onPrev} disabled={current === 0} aria-label="Previous slide">
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>
      <span className="slide-counter">
        {String(current + 1).padStart(2, '0')} — {String(total).padStart(2, '0')}
      </span>
      <button onClick={onNext} disabled={current === total - 1} aria-label="Next slide">
        <ChevronRight size={18} strokeWidth={1.5} />
      </button>
    </div>
  );
}
