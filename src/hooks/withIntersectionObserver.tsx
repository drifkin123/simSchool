import React, { Component, ComponentType, createRef } from 'react';

interface WithIntersectionObserverProps {
    sections: {
        [key: string]: {
            isVisible: boolean;
            elementRef: React.RefObject<HTMLElement>;
        };
    };
}

interface WithIntersectionObserverState {
    sections: {
        [key: string]: {
            isVisible: boolean;
            elementRef: React.RefObject<HTMLElement>;
        };
    };
}

export const withIntersectionObserver = <P extends object>(
    WrappedComponent: ComponentType<P & WithIntersectionObserverProps>
) => {
    return class WithIntersectionObserver extends Component<P, WithIntersectionObserverState> {
        private sectionRefs: Map<string, React.RefObject<HTMLElement>> = new Map();

        constructor(props: P) {
            super(props);
            this.state = {
                sections: {}
            };
            // Initialize refs and state for each section
            ['visionMission', 'history', 'whatUsersDo', 'howUsersImprove'].forEach(section => {
                const ref = createRef<HTMLElement>();
                this.sectionRefs.set(section, ref);
                this.state.sections[section] = {
                    isVisible: false,
                    elementRef: ref
                };
            });
        }

        componentDidMount() {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        const section = Array.from(this.sectionRefs.entries()).find(
                            ([_, ref]) => ref.current === entry.target
                        )?.[0];
                        if (section) {
                            this.setState(prevState => ({
                                sections: {
                                    ...prevState.sections,
                                    [section]: {
                                        ...prevState.sections[section],
                                        isVisible: entry.isIntersecting
                                    }
                                }
                            }));
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1,
                }
            );

            this.sectionRefs.forEach(ref => {
                if (ref.current) {
                    observer.observe(ref.current);
                }
            });

            return () => {
                this.sectionRefs.forEach(ref => {
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                });
            };
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    sections={this.state.sections}
                />
            );
        }
    };
}; 