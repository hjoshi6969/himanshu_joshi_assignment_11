import React from "react";
import Label from "./Label";

export default {
  title: "Label",
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    borderColor: { control: 'color' },
    Disable: { control:'boolean'},
  },
}

const Template = (args) => <Label {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Simple label",
  backgroundColor: "#ecffec",
  fontColor: "lightgreen",
  borderColor: "lightgreen",
  Disable: false,
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Warning label",
  backgroundColor: "#ffdfdf",
  fontColor: "red",
  borderColor: "red",
  Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
  label: "Warning label",
  backgroundColor: "#75757532",
  fontColor: "grey",
  borderColor: "grey",
  Disable: true,
};

