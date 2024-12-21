"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { FormFieldType } from "./ContactForm";

const RenderField = ({ field, props }) => {
  const { fieldType, placeholder } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input
            {...field}
            placeholder={placeholder}
            autoComplete="off"
            aria-label={placeholder}
          />
        </FormControl>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            className="h-[200px]"
            placeholder={placeholder}
            {...field}
            aria-label={placeholder}
          />
        </FormControl>
      );

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select
            value={field.value || ""}
            onValueChange={(value) => field.onChange(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={placeholder}
                className="text-sm text-gray-500" // Apply smaller text size
              />
            </SelectTrigger>
            <SelectGroup>
              <SelectContent>{props.children}</SelectContent>
            </SelectGroup>
          </Select>
        </FormControl>
      );

    default:
      console.error(`Unsupported field type: ${fieldType}`);
      return <p className="text-red-500">Unsupported field type</p>;
  }
};

const CustomFormField = ({ control, name, ...props }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
