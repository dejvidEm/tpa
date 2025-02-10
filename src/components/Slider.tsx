import React, {
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  forwardRef,
} from "react";

interface SliderProps {
  items: React.ReactNode[]; // Položky slideru
  visibleItems: number; // Počet viditeľných kariet
  showPartialNext?: boolean; // Zobraziť čiastočne ďalší slider
}

const ResponsiveSlider = forwardRef((props: SliderProps, ref) => {
  const { items, visibleItems, showPartialNext = false } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(visibleItems);

  const startX = useRef<number | null>(null);
  const moveX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : visibleItems); // Na mobiloch vždy 1 karta
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visibleItems]);

  const handleNext = () => {
    if (currentIndex + itemsToShow < items.length - 1) { // Stop skôr
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  useImperativeHandle(ref, () => ({
    handleNext,
    handlePrev,
  }));

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    moveX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current !== null && moveX.current !== null) {
      const diff = startX.current - moveX.current;

      if (diff > 50) {
        handleNext();
      } else if (diff < -50) {
        handlePrev();
      }
    }

    startX.current = null;
    moveX.current = null;
  };

  const partialVisibleWidth = window.innerWidth < 768 ? 10 : showPartialNext ? 10 : 0;

  const isLastItemAlmostVisible = currentIndex + itemsToShow >= items.length - 1; // Stop skôr

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
          gap: `${partialVisibleWidth}px`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              width: `${100 / itemsToShow - (partialVisibleWidth / itemsToShow) * (window.innerWidth < 768 ? 0.5 : 1)}%`,
            }}
            className="flex-row pr-2"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Prev
        </button>
        <button onClick={handleNext} disabled={isLastItemAlmostVisible}>
          Next
        </button>
      </div>
    </div>
  );
});

export default ResponsiveSlider;
