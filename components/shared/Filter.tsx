import React from "react";
// Importing React and necessary components from a UI library

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// Importing custom select dropdown components for UI functionality

interface Props {
  filters: { name: string; value: string }[];
  otherClasses?: string;
  containerClasses?: string;
}
// Defining the types for the props:
// 1. `filters` is an array of objects, each containing a `name` and a `value` string.
// 2. `otherClasses` is an optional string for applying additional CSS classes to the select trigger.
// 3. `containerClasses` is an optional string for applying additional CSS classes to the container div.

const Filter = ({ filters, otherClasses, containerClasses }: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
      {/* The outer div for the filter dropdown, applying dynamic container classes */}
      <Select>
        {/* Wrapping the SelectTrigger and SelectContent components inside a Select */}
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          {/* The button that triggers the select dropdown, allowing additional classes */}
          <div className="line-clamp-1 flex-1 text-left">
            {/* Styling to ensure long text gets truncated */}
            <SelectValue placeholder="Select a Filter" />
            {/* Displays the selected value or a placeholder text if none is selected */}
          </div>
        </SelectTrigger>
        <SelectContent>
          {/* The dropdown content that appears when the select trigger is clicked */}
          <SelectGroup>
            {/* Grouping all select items */}
            {filters.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {/* Rendering each filter option, using its value as a key */}
                {item.name}
                {/* Display the name of the filter */}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
// Exporting the Filter component to be used elsewhere in the app
