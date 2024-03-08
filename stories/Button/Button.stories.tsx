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

export const DownloadResume = Template.bind({});
DownloadResume.args = {
  label: "Download Resume",
  backgroundColor: "#FF004D",
  fontColor: "white",
  borderColor: "#FF004D",
  Disable: false,
};

export const Connect = Template.bind({});
Connect.args = {
  label: "Connect",
  backgroundColor: "#387ADF",
  fontColor: "white",
  borderColor: "#387ADF",
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
