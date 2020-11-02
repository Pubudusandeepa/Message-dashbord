import monk from 'monk'

const connectionString = 'localhost/messagebord'

const db = monk(connectionString)

export default db