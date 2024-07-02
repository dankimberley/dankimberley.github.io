( () => {
	let theme = 'light';

	const onToggleTheme = ( { currentTarget } ) => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		theme = newTheme;
        console.log(theme)

		document.documentElement.setAttribute( 'data-theme', newTheme );
		currentTarget.setAttribute( 'aria-pressed', newTheme === 'dark' );
	};

	// Get switch button and add click event
	const btn = document.querySelector( `.theme-switch` );
	if ( ! btn ) return;
	btn.addEventListener( 'click', onToggleTheme, false );
  
  
} )();