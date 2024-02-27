import React from "react";
import Label from "./Grid";

export default {
  title: "Skill-Grid",
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
  label: "HTML",
  backgroundColor: "red",
  fontColor: "white",
  borderColor: "red",
  Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
  label: "HTML",
  backgroundColor: "red",
  fontColor: "white",
  borderColor: "red",
  Disable: true,
};

