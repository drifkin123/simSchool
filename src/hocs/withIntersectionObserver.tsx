import React from 'react';

interface WithIntersectionObserverState {
  isVisible: boolean;
  hasBeenVisible: boolean; // New state to track first-time visibility
}

const withIntersectionObserver = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithIntersectionObserverState>,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  return class extends React.Component<P, WithIntersectionObserverState> {
    private containerRef: React.RefObject<HTMLDivElement>;
    private observer: IntersectionObserver | null = null;

    constructor(props: P) {
      super(props);
      this.state = { isVisible: false, hasBeenVisible: false };
      this.containerRef = React.createRef();
    }

    componentDidMount() {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !this.state.hasBeenVisible) {
          this.setState({ isVisible: true, hasBeenVisible: true });
        }
      }, options);

      if (this.containerRef.current) {
        this.observer.observe(this.containerRef.current);
      }
    }

    componentWillUnmount() {
      if (this.observer && this.containerRef.current) {
        this.observer.unobserve(this.containerRef.current);
      }
    }

    render() {
      return (
        <div ref={this.containerRef}>
          <WrappedComponent {...this.props} isVisible={this.state.isVisible} hasBeenVisible={this.state.hasBeenVisible} />
        </div>
      );
    }
  };
};

export default withIntersectionObserver;
