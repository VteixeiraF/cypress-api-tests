describe('Testes de API - Reqres', () => {

  it('Deve listar usuários (GET)', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data).to.have.length.greaterThan(0)
      })
  })

  it('Deve criar usuário (POST)', () => {
    cy.request('POST', 'https://reqres.in/api/users', {
      name: 'Victor',
      job: 'QA Engineer'
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq('Victor')
    })
  })

  it('Deve atualizar usuário (PUT)', () => {
    cy.request('PUT', 'https://reqres.in/api/users/2', {
      name: 'Victor',
      job: 'Senior QA'
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Deve deletar usuário (DELETE)', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/2')
      .then((response) => {
        expect(response.status).to.eq(204)
      })
  })

})
