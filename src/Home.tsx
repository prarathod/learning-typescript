import React from "react";

export type propsHome = {
  type?: string;
  placeholder?: string;
  required?: boolean;
  para: string;
};
export type HomeProps = {
  prop: propsHome;
};
export const Home = ({prop}: HomeProps) => {
  const {
    type = "text",
    placeholder = "",
    required = false,
    para = "",
  } = prop;
  return (
    <div>
      <input type={type} placeholder={placeholder} required={required} />
      <p>{para}</p>
    </div>
  );
};
