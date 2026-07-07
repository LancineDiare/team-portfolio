/**
 * Error Boundary Component
 *
 * Catches rendering errors and prevents the entire app from crashing.
 */

import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="page">
          <div className="container error-boundary">
            <h1>Something went wrong</h1>

            <p>
              The application encountered an unexpected error. Please refresh
              the page or return home.
            </p>

            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;