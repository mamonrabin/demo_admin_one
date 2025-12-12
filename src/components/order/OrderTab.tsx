import { OCategorySelector } from "./OCategorySelector";
import { ODownloadSelector } from "./ODownloadSelector";
import { ORangeSelector } from "./ORangeSelector";

const OrderTab = () => {
  return (
    <div>
      <div className="flex items-center justify-end gap-2 mt-4">
        <OCategorySelector />
        <ORangeSelector />
        <ODownloadSelector />
      </div>
    </div>
  );
};

export default OrderTab;
