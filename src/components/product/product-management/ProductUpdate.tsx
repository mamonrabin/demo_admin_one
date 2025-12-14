import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";


const ProductUpdate = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
             <button className="bg-[#2B748A] flex items-center gap-0.5 hover:bg-[#2b86a1] duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                  Update
                </button>
        </SheetTrigger>
        <SheetContent className="md:max-w-4xl">
          <div className="p-6">
            <h2 className="text-lg font-medium border-b pb-2">Order Information</h2>

            <div>
                <p className="mt-4"><span className="font-medium">Order ID:</span> ORD-12345</p>
                <h2 className="mt-2 border-b">Product Info:</h2>
                <div className="mt-4">
                  <p><span className="font-medium">Product Name:</span> Product A</p>
                  <p><span className="font-medium">Quantity:</span> 2</p>
                  <p><span className="font-medium">Price:</span> ৳650</p>
                  <p><span className="font-medium">Color:</span> Red</p>
                  <p><span className="font-medium">Size:</span> M</p>
                  <p><span className="font-medium">discount:</span> ৳50</p>
                  <p><span className="font-medium">Shipping:</span> ৳60</p>
                  <p className="mt-2 font-semibold text-lg"><span className="font-medium uppercase text-[#2B748A]">total:</span> ৳760</p>
                </div>
                <h2 className="mt-4 border-b">Customer Info:</h2>
                <div className="mt-4">
                  <p>Name: John Doe</p>
                  <p>Email: john@gmai.com</p>
                  <p>Phone: +8801746770324</p>
                  <p>Adress: Road No:04, dokhan Beshil, Mirpur-1 Dhaka,Bamgladesh</p>
                </div>
                <h2 className="mt-4 border-b">Order Status:</h2>
                <div className="mt-4">
                  <p>Status: In Order</p>
                  
                </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductUpdate;
