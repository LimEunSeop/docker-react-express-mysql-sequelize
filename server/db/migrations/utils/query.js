const { sequelize } = require('../../models')
const { getCurrent } = require('./time')

module.exports = {
  backupTable: async (table) => {
    const backupTable = `${table}_BACKUP${getCurrent()}`

    await sequelize.query(`CREATE TABLE ${backupTable} LIKE ${table}`)
    await sequelize.query(`INSERT INTO ${backupTable} SELECT * FROM ${table}`)

    return backupTable
  },
}
