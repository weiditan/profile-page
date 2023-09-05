import { ReactNode } from "react";

const ProfileSection = ({
  id,
  title,
  children,
}: { id: string, title: string, children: ReactNode }) => {
  return (
    <div
      className={"my-20"}
      id={id}
    >
      <div className="flex items-center px-4">
        <hr className="grow border-black dark:border-white" />
        <h1 className={"px-4"}>
          {title}
        </h1>
        <hr className="grow border-black dark:border-white" />
      </div>
      <div className="px-4 py-10">
        {children}
      </div>
    </div>
  );
};

export default ProfileSection;
