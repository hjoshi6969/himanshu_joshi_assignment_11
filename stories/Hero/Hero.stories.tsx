import React from "react";
import Hero from "./Hero";

export default {
  title: "Hero",
  component: Hero,
  argTypes: {
    Mobile: { control: 'boolean' },
  },
}  

const Template = (args) => <Hero {...args} />;

export const PCVersion = Template.bind({});
PCVersion.args = {
  link: "https://wallpaper.dog/large/17167859.gif",
  Mobile: false,
};

export const MobileVersion = Template.bind({});
MobileVersion.args = {
  link: "https://wallpaper.dog/large/17167859.gif",
  Mobile: false, 
};
