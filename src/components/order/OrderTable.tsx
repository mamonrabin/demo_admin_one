"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OderList } from "@/src/api/orderApi";
import { ODeliverSeleotor } from "./ODeliverSeleotor";
import { Printer } from "lucide-react";
import OView from "./OView";

const OrderTable = () => {
  return (
    <div>
      <Table>
        <TableHeader className="bg-[#2B748A]">
          <TableRow className="text-white!">
            <TableHead className="text-white">SL</TableHead>
            <TableHead className="text-white">Order ID</TableHead>
            <TableHead className="text-white">Products</TableHead>
            <TableHead className="text-white">Subtotal</TableHead>
            <TableHead className="text-white">Discount</TableHead>
            <TableHead className="text-white">Shipping</TableHead>
            <TableHead className="text-white">Total</TableHead>
            <TableHead className="text-white">Payment</TableHead>
            <TableHead className="text-white">Customer</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Delivery Option</TableHead>
            <TableHead className="text-white">Send to Courier</TableHead>
            <TableHead className="text-white">Invoice</TableHead>
            <TableHead className="text-white">Delete</TableHead>
            <TableHead className="text-white">View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {OderList.map((order, index) => (
            <TableRow key={order.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{order.order_id}</TableCell>
              <TableCell className="bg-[#2B748A]/5">
                <p>Title: {order.product.title}</p>
                <p>Price: {order.product.price} * {order.product.quantity}</p>
                <p>Color: {order.product.color}</p>
                <p>Size: {order.product.size}</p>
              </TableCell>
              <TableCell>৳ {order.price}</TableCell>
              {
                order.couponDiscount ? (
                  <TableCell>৳ {order.couponDiscount}</TableCell>
                ) : (
                  <TableCell>N/A</TableCell>
                )
              }
              <TableCell>৳ {order.shipping}</TableCell>
              <TableCell>৳ {order.total}</TableCell>
              <TableCell>{order.Payment}</TableCell>
              <TableCell className="bg-[#2B748A]/5">
                <p>Name: {order.customer.name}</p>
                <p>Email: {order.customer.email}</p>
                <p>Phone: {order.customer.Phone}</p>
                <p>Address: {order.customer.address}</p>
              </TableCell>
              <TableCell>{order.status}</TableCell>

              <TableCell>
                <ODeliverSeleotor />
              </TableCell>

              <TableCell>
                <button className="bg-[#2B748A] hover:bg-[#2b86a1] duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                  Stedfast
                </button>
              </TableCell>

              <TableCell >
                <div className="cursor-pointer bg-[#2B748A] hover:bg-[#2b86a1] duration-300 text-white px-4 py-2 rounded text-sm">
                    <Printer size={20}  />
                </div>
              </TableCell>

              <TableCell>
                <button  className="bg-red-500 hover:bg-red-700 duration-300 cursor-pointer text-white px-4 py-2 rounded text-sm">
                  Delete
                </button>
              </TableCell>
              <TableCell>
               <OView/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
