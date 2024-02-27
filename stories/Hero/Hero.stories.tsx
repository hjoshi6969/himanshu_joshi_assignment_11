import React from "react";
import Hero from "./Hero";

export default {
  title: "Hero",
  component: Hero,
  argTypes: {
    Disable: { control: 'boolean' },
  },
}  

const Template = (args) => <Hero {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  link: "https://wallpaper.dog/large/17167859.gif",
  Disable: false,
};

export const Disable = Template.bind({});
Disable.args = {
  link: "https://wallpaper.dog/large/17167859.gif",
  Disable: true, 
};
