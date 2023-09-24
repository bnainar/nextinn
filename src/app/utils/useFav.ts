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
      try {
        if (isFav) await axios.delete(`/api/favorite/${listingId}`);
        else await axios.post(`/api/favorite/${listingId}`);
        toast.success("Toggled favorite");
        router.refresh();
      } catch (e: any) {
        toast.error("Failed to toggle favorite");
        console.log(e);
      }
    },
    [currentUser, login, isFav, listingId, router]
  );

  return { isFav, toggleFav };
};

export default useFav;
