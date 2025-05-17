import React from "react";
import { useState } from "react";
import Label from "../form/Label.tsx";
import Input from "../form/input/InputField.tsx";
import Select from "../form/Select.tsx";
import DatePicker from "../form/date-picker.tsx";
import TextArea from "../form/input/TextArea.tsx";
import Button from "../ui/button/Button.tsx";

const PopupGoals = () => {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  return (
    <>
      <div className="h-150 w-300 rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="space-y-6">
          <div>
            <Label htmlFor="input">Title</Label>
            <Input type="text" id="input" />
          </div>
          <div>
            <Label>Description</Label>
            <TextArea
              value={message}
              onChange={(value) => setMessage(value)}
              rows={6}
            />
            <div>
              <Label htmlFor="input">Target Amount</Label>
              <Input type="number" id="input" />
            </div>
            
          </div>
          <div>
          <DatePicker
            id="date-picker"
            label="Goal End Date"
            placeholder="Goal Completion Date"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString });
            }}
          />
        </div>
        <Button size="md" variant="primary">
          Submit
        </Button>
        </div>
      </div>
    </>
  );
};

export default PopupGoals;
