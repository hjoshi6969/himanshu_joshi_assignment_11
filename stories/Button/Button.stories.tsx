import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    borderColor: { control: 'color' },
    Disable: { control: 'boolean' },
  },
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  backgroundColor: "#008cff",
  fontColor: "white",
  borderColor: "#008cff",
  Disable: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  backgroundColor: "white",
  fontColor: "black",
  borderColor: "black",
  Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
  label: "Disabled",
  backgroundColor: "lightgrey",
  fontColor: "black",
  borderColor: "lightgrey",
  Disable: true,
};
