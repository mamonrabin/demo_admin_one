import * as React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Trash, Plus } from "lucide-react";
import { ColorPicker } from "antd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ---------------- Inventory Types ---------------- */

export const inventoryTypes = [
  { id: 1, name: "Color", key: "colorInventory" },
  { id: 2, name: "Size", key: "levelInventory" },
  { id: 3, name: "Color - Size", key: "colorLevelInventory" },
  { id: 4, name: "Without Any", key: "inventory" },
];

/* ---------------- Types ---------------- */

type InventoryItem = {
  color?: string;
  colorName?: string;
  size?: string;
  quantity: string;
};

type FormValues = {
  inventoryType: string;
  inventories: InventoryItem[];
};

/* ---------------- Helpers ---------------- */

const getDefaultInventory = (): InventoryItem => ({
  color: "",
  colorName: "",
  size: "",
  quantity: "",
});

/* ---------------- Component ---------------- */

export function CreateInventeryType() {
  const { control, register, watch } = useForm<FormValues>({
    defaultValues: {
      inventoryType: "",
      inventories: [getDefaultInventory()],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "inventories",
  });

  const selectedInventoryType = watch("inventoryType");

  return (
    <div className="flex flex-col gap-4">
      {/* Inventory Type */}
      <div className="flex flex-col gap-2">
        <p className="text-sm">
          Inventory Type <span className="text-red-600">*</span>
        </p>

        <Controller
          name="inventoryType"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full h-10">
                <SelectValue placeholder="Select Inventory" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Inventory</SelectLabel>
                  {inventoryTypes.map((item) => (
                    <SelectItem key={item.id} value={item.key}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {/* Inventory Items */}
      {selectedInventoryType !== "" &&
        fields.map((field, index) => (
          <div
            key={field.id}
            className="grid md:grid-cols-4 gap-2 border px-3 py-6 rounded-md relative"
          >
            {/* Color */}
            {(selectedInventoryType === "colorInventory" ||
              selectedInventoryType === "colorLevelInventory") && (
              <Controller
                control={control}
                name={`inventories.${index}.color`}
                render={({ field }) => (
                  <ColorPicker
                    value={field.value || "#1677ff"}
                    showText
                    allowClear
                    onChange={(color) => field.onChange(color?.toHexString())}
                  />
                )}
              />
            )}

            {/* Color Name */}
            {(selectedInventoryType === "colorInventory" ||
              selectedInventoryType === "colorLevelInventory") && (
              <Input
                placeholder="Color Name"
                {...register(`inventories.${index}.colorName`)}
              />
            )}

            {/* Size */}
            {(selectedInventoryType === "levelInventory" ||
              selectedInventoryType === "colorLevelInventory") && (
              <Input
                placeholder="Size"
                {...register(`inventories.${index}.size`)}
              />
            )}

            {/* Quantity */}
            <Input
              placeholder="Quantity"
              {...register(`inventories.${index}.quantity`)}
            />

            {/* Remove */}
            {fields.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => remove(index)}
              >
                <Trash className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}

      {/* Add Inventory Item */}
      {selectedInventoryType !== "" &&
        selectedInventoryType !== "inventory" && (
          <Button
            type="button"
            variant="outline"
            onClick={() => append(getDefaultInventory())}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        )}
    </div>
  );
}
