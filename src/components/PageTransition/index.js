import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";

const timeout = 1000;

const getTransitionStyles = {
  entering: {
    transition: `opacity ${timeout}ms ease-in-out`,

    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,

    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
  exited: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
};

export default ({ children, location }) => {
  return (
    <TransitionGroup>
      <Transition
        key={location.pathname}
        timeout={{
          enter: 0,
          exit: timeout,
        }}
      >
        {status => {
          console.log(`${location.pathname} status: ${status}`);
          return (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          );
        }}
      </Transition>
    </TransitionGroup>
  );
};
