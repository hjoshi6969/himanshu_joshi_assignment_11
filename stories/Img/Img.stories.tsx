import React from "react";
import Img from "./Img";

export default {
  title: "Img",
  component: Img,
  argTypes: {
    Disable: { control: 'boolean' },
  },
}  

const Template = (args) => <Img {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
  Disable: true, 
};
