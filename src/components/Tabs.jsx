import React from 'react';

export default function Tabs(props) {
  const handleClick = () => {
    if (props.hello) {
      props.hello();
    }
  };

  return <li onClick={() => props.hello()}>{props.title}</li>;
}