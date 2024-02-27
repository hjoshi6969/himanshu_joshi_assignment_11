import React from "react";
import Card from "./mini-Card";

export default {
  title: "Mini-Card",
  component: Card,
  argTypes: {
    background: { control: 'color' },
    Disable: { control: 'boolean' },
  },
}  

const Template = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    background: "#595959",
    Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
    background: "#595959",
    Disable: true, 
};
