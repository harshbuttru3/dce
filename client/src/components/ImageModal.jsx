import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    if (currentIndex === null || !images || images.length === 0) return null;

    const currentImage = images[currentIndex];

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-50"
            >
                <X size={32} />
            </button>

            {/* Previous Button */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-50 p-2 bg-black/20 rounded-full hover:bg-black/40"
            >
                <ChevronLeft size={40} />
            </button>

            {/* Image Container */}
            <div className="max-w-7xl max-h-[90vh] relative flex items-center justify-center">
                <img
                    src={currentImage.imageUrl}
                    alt={currentImage.title || "Gallery View"}
                    className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
                />

                {/* Caption using Title */}
                {currentImage.title && (
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 px-4 rounded">
                        <p className="text-lg font-medium">{currentImage.title}</p>
                    </div>
                )}
            </div>

            {/* Next Button */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-50 p-2 bg-black/20 rounded-full hover:bg-black/40"
            >
                <ChevronRight size={40} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 text-white text-sm bg-black/20 px-3 py-1 rounded-full">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

export default ImageModal;
