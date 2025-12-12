import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { OPerRowPage } from "./OPerRowPage";

const OPagination = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between">
      <div className="flex items-center md:gap-2 gap-1 md:text-sm text-[12px]">
        <p>Rows per page</p>
        <div>
            <OPerRowPage/>
        </div>
        <p>Page 1 of 18</p>
      </div>
      <div>
        <Pagination className="">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
              <PaginationLink href="#">2</PaginationLink>
              <PaginationLink href="#">3</PaginationLink>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default OPagination;
