import { useCallback, useMemo } from "react";
import { useLoginStore } from "../stores/loginModalStore";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

interface useFavProps {
  listingId: string;
  currentUser?: User | null;
}

const useFav = ({ listingId, currentUser }: useFavProps) => {
  const login = useLoginStore((s) => s.handleLoginModalChange);
  const router = useRouter();

  const isFav = useMemo(() => {
    const favList = currentUser?.favIds || [];
    return favList.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFav = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        login(true);
        return;
      }
      let promise: Promise<any>;
      if (isFav) promise = axios.delete(`/api/favorite/${listingId}`);
      else promise = axios.post(`/api/favorite/${listingId}`);

      toast.promise(promise, {
        loading: "Loading...",
        success: () => {
          router.refresh();
          return "Toggled favorite";
        },
        error: "Failed to toggle favorite",
      });
    },
    [currentUser, login, isFav, listingId, router]
  );

  return { isFav, toggleFav };
};

export default useFav;
