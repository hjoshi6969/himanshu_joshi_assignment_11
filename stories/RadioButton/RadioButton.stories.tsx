import React from "react";
import RadioButton from "./RadioButton";

export default {
  title: "RadioButton",
  component: RadioButton,
}

const Template = (args) => <RadioButton {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  disable: false,
  label: "Option"
};

export const Disabled = Template.bind({});
Disabled.args = {
    disable: true,
    label: "Option",
};
