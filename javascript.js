( () => {
	let theme = localStorage.getItem('theme') || 'light';
    if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
    }

    if (theme === 'dark') {
        const btn = document.querySelector( `.theme-switch` );
        btn.setAttribute( 'aria-pressed', true );
    }

	const onToggleTheme = ( { currentTarget } ) => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		theme = newTheme;
        localStorage.setItem('theme', newTheme);
        console.log(`Writing ${theme} to local storage`)
        console.log(theme)

		document.documentElement.setAttribute( 'data-theme', newTheme );
		currentTarget.setAttribute( 'aria-pressed', newTheme === 'dark' );
	};

	// Get switch button and add click event
	const btn = document.querySelector( `.theme-switch` );
	if ( ! btn ) return;
	btn.addEventListener( 'click', onToggleTheme, false );

    const x = document.getElementById('myLinks')
    x.style.display = "none";
  
  
} )();

const handleBurger = () => {
    const x = document.getElementById('myLinks')
    const head = document.querySelector('header')
    if (x.style.display === "flex") {
        setTimeout(() => x.style.display = "none", 300)
        setTimeout(() => head.style.zIndex = "0", 300)
        x.classList.remove('appear')
        x.classList.add('disappear')
      } else {
        console.log('loading now')
        x.style.display = "flex";
        head.style.zIndex = "1000"
        x.classList.add('appear')
        x.classList.remove('disappear')
      }
}