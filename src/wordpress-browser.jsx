import * as React from 'react';
import { useEffect } from 'react';

if ( ! navigator.serviceWorker ) {
	alert( 'Service workers are not supported by your browser' );
}
const workerRegistered = navigator.serviceWorker.register( `/worker.js` );

export const WordPressBrowser = React.forwardRef(
	function WordPressBrowserComponent( { initialUrl, ...props }, iframeElRef ) {
		useEffect( () => {
			async function init() {
				await workerRegistered;
				iframeElRef.current.src = initialUrl;
			}
			init();
		}, [] );

		return (
			<div { ...props }>
				<iframe ref={ iframeElRef } title="WordPress" width="100%" height="100%" className="border-solid border-1 border-indigo-600" />
				{ /* <input
				id="url_bar"
				type="text"
			/> */ }
			</div>
		);
	},
);

export default WordPressBrowser;
