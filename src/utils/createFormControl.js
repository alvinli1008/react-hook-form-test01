import createSubject from "./createSubject";

const isString = value => typeof value === "string";

const createFormControl = () => {
  let _fields = {};

  const _subjects = {
    values: createSubject(),
  };

  const onChange = e => {
    const { name, value } = e.target;
    _fields[name] = value;

    _subjects.values.next({ name, value });
  };

  const getValues = name => {
    if (isString(name)) return _fields[name];

    return _fields;
  };

  const register = (name, options = {}) => {
    return {
      name,
      onChange,
    };
  };

  return {
    control: {
      register,
      _subjects,
      getValues,
    },
    get _fields() {
      return _fields;
    },
    register,
    onChange,
    getValues,
  };
};

export default createFormControl;
