import React, { useState } from "react";
import { propsHome, HomeProps } from "./Home";
type WrapperProps = {
  component: React.ComponentType<HomeProps>;
  options?: propsHome[];
  reqObj: any;
};

/*
type?: string;
  placeholder?: string;
  required?: boolean;
  para: string;

*/

export const Wrapper = ({
  component: Component,
  options,
  reqObj,
}: WrapperProps) => {
  const [para, setPara] = useState(reqObj);
  console.log(options);
  return (
    <div>
      <h1>Title</h1>
      {options?.map((elm) => {
        return <div onClick={() => setPara(elm)}>{elm.para} q</div>;
      })}
      <div>
        <Component prop={para} />
        <code></code>
      </div>
    </div>
  );
};
