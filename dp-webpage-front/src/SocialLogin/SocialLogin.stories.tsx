import { FaFacebookF, FaGoogle } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

export default {
  title: "SocialLogin",
  component: SocialLogin,
}

const Template = args => <SocialLogin {...args } />

export const Google = Template.bind({});

Google.args = {
  link: "https://www.google.com",
  icon: <FaGoogle />
}

export const Facebook = Template.bind({});

Facebook.args = {
  link: "https://www.google.com",
  icon: <FaFacebookF />
}

export const Empty = Template.bind({});

Empty.args = { }
