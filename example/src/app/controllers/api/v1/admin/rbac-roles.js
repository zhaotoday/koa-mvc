module.exports = app => {
  return class extends require('./base')(app) {
    constructor () {
      super()

      this.service = app.$services.rbacRoles
      this.addMethods(['get', 'post', 'put', 'del'])
    }
  }
}
