"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ListSkill = ({
  title,
  dataListSkill,
}: { title: string, dataListSkill: Array<{ label: string, iconPath: string, iconPathDark?: string }> }) => {
  const [
    mounted,
    setMounted,
  ] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={"flex items-center"}>
      <div className={"min-w-[120px] text-center"}>
        <h4>
          {title}
        </h4>
      </div>
      <div className="flex flex-wrap gap-3 border-l-2 border-black dark:border-white">
        {
          dataListSkill.map((data, index) => {
            return (
              <div
                className="flex flex-col items-center w-20"
                key={index}
              >
                <div className="relative h-12 w-12">
                  {
                    mounted
                    && (
                      <Image
                        alt={data.label}
                        className="object-contain"
                        sizes="(max-width: 100px) 100vw"
                        src={theme === "dark" && data.iconPathDark ? data.iconPathDark : data.iconPath}
                        fill
                      />
                    )
                  }
                </div>

                <h6 className="mt-1 text-center">
                  {data.label}
                </h6>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ListSkill;