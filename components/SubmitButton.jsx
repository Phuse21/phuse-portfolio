import { Button } from "./ui/button";
import Image from "next/image";

const SubmitButton = ({ isLoading, children }) => {
  return (
    <Button type="submit" disabled={isLoading} size="md" className="max-w-40">
      {isLoading ? (
        <div className="flex text-sm items-center gap-1">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            height={28}
            width={28}
            className="animate-spin "
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
