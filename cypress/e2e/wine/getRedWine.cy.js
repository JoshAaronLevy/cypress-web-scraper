describe('navigate to red wine page', () => {

	it('should visit red wines page', () => {
		cy.visit('https://www.wine.com/list/wine/red-wine/7155-124')
	})

	it('should check for any initial popups and close them', () => {
		cy.url().then((url) => {
			if (url.includes('Modal')) cy.get('.promoBarModal_cancelIcon').click()
		})
	})

	it('should be on red wines page', () => {
		cy.get('h1').should('contain', 'Red Wine')
	})

	it('finds list of wines', () => {
		let wineList = [];
		cy.get('.prodItem').each(($el, index, $list) => {
			console.log('$el:', $el);
			let wineId = $el[0].children[0].content;
			let wineContent = $el[0].children[1];
			console.log('wineContent:', wineContent);
			let newWine = {
				id: wineId,
			}
			// $el is a wrapped jQuery element
			if ($el) {
				// wrap this element so we can
				// use cypress commands on it
				cy.wrap($el);
				wineList.push(newWine);
			} else {
				// do something else
			}
		})
		console.log('wineList:', wineList);
	})
})
