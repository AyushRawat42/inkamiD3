import Image from 'next/image';

type ServiceImageProps = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
};

export function ServiceImage({
  src,
  alt,
  aspect = 'aspect-[4/3]',
  className = '',
  priority = false,
}: ServiceImageProps) {
  return (
    <div
      className={`glass-panel group relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(0,242,255,0.08)] ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 44vw, 92vw"
        className="object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-deep-space/70 via-deep-space/10 to-hyper-violet/20" />
      <div className="absolute inset-0 border border-electric-cyan/10" />
    </div>
  );
}
