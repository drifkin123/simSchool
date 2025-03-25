import React from 'react';

interface WithIntersectionObserverState {
  isVisible: boolean;
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
      this.state = { isVisible: false };
      this.containerRef = React.createRef();
    }

    componentDidMount() {
      this.observer = new IntersectionObserver(([entry]) => {
        this.setState({ isVisible: entry.isIntersecting });
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
          <WrappedComponent {...this.props} isVisible={this.state.isVisible} />
        </div>
      );
    }
  };
};

export default withIntersectionObserver;
