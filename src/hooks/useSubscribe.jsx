import React from "react";

export default function useSubscribe(props) {
  const _props = React.useRef(props);
  _props.current = props;

  React.useEffect(() => {
    const subscription =
      _props.current.subject &&
      _props.current.subject.subscribe({
        next: _props.current.next,
      });

    return () => {
      subscription && subscription.unsubscribe();
    };
  }, []);
}
