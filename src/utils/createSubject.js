export default function createSubject() {
  let _observers = [];

  const next = value => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };

  const subscribe = observer => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter(o => o !== observer);
      },
    };
  };

  const unsubscribe = () => {
    _observers = [];
  };

  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe,
  };
}
