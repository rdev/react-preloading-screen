/* @flow */
import * as React from 'react';

type PreloaderProps = {
	fadeDuration?: number,
	className?: string,
	children?: React.Node,
	style: {
		[string]: mixed
	}
};

type PreloaderState = {
	loaded: boolean
};

type PlaceholderProps = {
	children?: React.Node
};

const defaultStyle = {
	opacity: 1,
	zIndex: 999,
	backgroundColor: 'white',
	height: '100vh',
	width: '100vw',
	position: 'fixed',
	top: 0,
	left: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

class Preloader extends React.Component<PreloaderProps, PreloaderState> {
	state = { loaded: false };

	ref: ?HTMLDivElement;

	componentDidMount = () => {
		window.requestAnimationFrame(this.checkReadyState);
	};

	checkReadyState = () => {
		if (document.readyState === 'complete' && this.ref) {
			this.ref.style.opacity = '0';
			setTimeout(() => {
				this.setState({ loaded: true });
				this.ref = null;
			}, this.props.fadeDuration || 200);
		} else {
			window.requestAnimationFrame(this.checkReadyState);
		}
	};

	render() {
		const { style, className, children, fadeDuration } = this.props;
		const PlaceholderComponent = React.Children.toArray(children)
			.find(({ type }) => type.displayName === 'PreloadingPlaceholder');

		if (!PlaceholderComponent) {
			console.warn('react-preloading-screen:', 'No <Placeholder> component found in children of <Preloader>. Preloader is not in effect.');
			return children;
		}

		const cleanChildren = React.Children.map(
			children,
			(child) =>
				(child.type.displayName === 'PreloadingPlaceholder' ? null : child)
		);

		return (
			<React.Fragment>
				{cleanChildren}
				{
					this.state.loaded
						? null
						: (
							<div
								style={{
									...defaultStyle,
									transition: `opacity ${fadeDuration || 200 / 1000}s ease`,
									...style,
								}}
								className={className}
								ref={(ref) => {
									this.ref = ref;
								}}
							>
								{PlaceholderComponent}
							</div>
						)}
			</React.Fragment>
		);
	}
}

const Placeholder = ({ children }: PlaceholderProps) => (
	<React.Fragment>{children}</React.Fragment>
);

Placeholder.displayName = 'PreloadingPlaceholder';

export { Preloader, Placeholder };
