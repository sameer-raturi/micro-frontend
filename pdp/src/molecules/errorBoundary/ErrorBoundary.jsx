import React from "react";
import PropTypes from "prop-types";

import _noop from "lodash/noop";
import _isFunction from "lodash/isFunction";

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    onError: PropTypes.func,
  };

  static defaultProps = {
    onError: _noop,
  };

  state = { hasError: false };

  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    if (error) {
      const { onError } = this.props;
      this.setState(
        {
          hasError: true,
        },
        () => onError(error)
      );
    }
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;
    if (hasError) {
      if (_isFunction(fallback)) {
        return fallback();
      }
      // You can render any custom fallback UI
      return (
        <h1 className="text-center text-white-50">Something went wrong :(</h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
