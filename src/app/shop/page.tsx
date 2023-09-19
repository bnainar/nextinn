import { CustomToaster } from "../components/ui/CustomToaster";
import { RentHeader } from "./Header";
import { NewListingModal } from "./listings/create/NewListingModal";

export default function RentPage() {
  return (
    <div>
      <RentHeader />
      <NewListingModal />
      <CustomToaster />
    </div>
  );
}
