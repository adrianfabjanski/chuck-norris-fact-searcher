beforeEach(() => {
    cy.visit('/')
})


it('should check page fully loaded', () => {
        cy.get('.header-cnt').should('be.visible');
                    cy.get('.choice-cnt').should('be.visible');
                    cy.get('.home-description').should('be.visible');
                    cy.get('#absolute-btn').should('be.visible')
});

it('should check searching functionality', () => {
    cy.get('#choice-item-1').click()
    cy.get('.fact-searcher-cnt').should('be.visible');
    cy.get('#search-input').type('car');
    cy.get('#search-input').type('{enter}').then(() => {
        cy.request('https://api.chucknorris.io/jokes/search?query=car').then((res) => {
            expect(res.status).to.eq(200)
        })
        cy.get('.total-results').should('contain', '308 results');
        
    })
    cy.get('#search-input').clear();
    cy.get('#search-input').type('chuck');
    cy.get('#search-input').type('{enter}').then(() => {
        cy.request('https://api.chucknorris.io/jokes/search?query=chuck').then((res) => {
            expect(res.status).to.eq(200)
        })
        cy.get('.total-results').should('contain', '9667 results');
        
    })
})

it('should check rtl button functionality', () => {
    cy.get('#absolute-btn').should('be.visible')
    cy.get('body').should('not.have.class', 'rtl')
    cy.get('#absolute-btn').click()
    cy.get('body').should('have.class', 'rtl')
})

it('should check random fact functionality', () => {
    cy.get('#choice-item-2').click();
    cy.request('https://api.chucknorris.io/jokes/random').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.get('.random-btn').should('be.visible')
    cy.get('.random-btn').click()
    cy.get('.random-fact').should('be.visible')
})

it('should check categories loaded correctly', () => {
    cy.get('#choice-item-3').click();
    cy.get('.categories').should('be.visible')
    cy.get('.categories-cnt').should('be.visible')
    cy.get('.categories-cnt').children().should('have.length', 16)
})

it('should check if all categories work properly', () => {
    cy.get('#choice-item-3').click();
    cy.get('.categories-item').eq(0).click().then(() => {
        cy.get('.categories-btn').should('contain', 'Get random fact from animal category').click().then(() => {
            cy.get('.random-fact').should('be.visible')
        })
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=animal').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=career').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=celebrity').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=dev').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=explicit').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=fashion').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=food').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=history').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=money').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=movie').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=music').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=political').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=religion').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=science').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=sport').then((response) => {
        expect(response.status).to.eq(200)
    })
    cy.request('https://api.chucknorris.io/jokes/random?category=travel').then((response) => {
        expect(response.status).to.eq(200)
    })
})

it('should check if banner link leads to the home page', () => {
    cy.get('.header-cnt').children('a').click()
    cy.url().should('eq', 'http://localhost:3000/')
})