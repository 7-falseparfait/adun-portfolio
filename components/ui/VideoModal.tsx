"use client";
import { X } from "lucide-react";
import React, { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string; // The YouTube ID (e.g., "dQw4w9WgXcQ")
  videoUrl?: string; // Direct URL (e.g., Cloudinary mp4)
}

const VideoModal = ({ isOpen, onClose, videoId, videoUrl }: VideoModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop (Dark & Blurred) */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-50"
      >
        <X size={40} />
      </button>

      {/* Video Container */}
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        {videoUrl ? (
          <video
            src={videoUrl}
            className="w-full h-full object-contain"
            controls
            autoPlay
            playsInline
          />
        ) : videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
      </div>
    </div>
  );
};

export default VideoModal;
