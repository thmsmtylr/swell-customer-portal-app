import Image from "next/image";

interface AvatarProps {
  src?: string;
  storeName: string;
}

export function Avatar(props: AvatarProps) {
  const { src, storeName } = props;
  const firstLetter = storeName[0].toUpperCase();

  if (src) {
    return (
      <div className="h-8 w-8 overflow-hidden rounded-md">
        <Image
          src={src}
          alt={storeName}
          width={32}
          height={32}
          layout="responsive"
        />
      </div>
    );
  }
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-500 font-medium text-white">
      {firstLetter}
    </div>
  );
}
