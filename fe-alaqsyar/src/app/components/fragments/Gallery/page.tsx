import Image from "next/image";

interface GalleryItemProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  isWide?: boolean;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  href,
  src,
  alt,
  title,
  description,
  isWide = false,
}) => (
  <a
    href={href}
    className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${
      isWide ? "md:col-span-2 md:h-80" : "md:h-80"
    }`}
  >
    <Image
      width={500}
      height={500}
      src={src}
      loading="lazy"
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <div className="flex flex-col relative">
      <span className="relative ml-4 mb-3 inline-block text-2xl text-white md:ml-5 md:text-2xl font-bold">
        {title}
      </span>
      <p className="relative ml-4 mb-3 inline-block text-lg text-white md:ml-5 md:text-lg font-medium">
        {description}
      </p>
    </div>
  </a>
);

interface GalleryProps {
  items: GalleryItemProps[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => (
  <div className="bg-white h-full py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        {items.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
