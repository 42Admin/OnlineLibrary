const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use('/users', require('./routes/users.route'))
app.use('./admin', require('./routes/admins.route'))
app.use('./books', require('./routes/books.route'))
app.use('./genres', require('./routes/genres.route'))
app.use('./reviews', require('./routes/reviews.route'))

mongoose.connect('mongodb+srv://Denn:usupov_06.12.2004@cluster0.85wpugk.mongodb.net/')

.then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
    console.log('Сервер запущен успешно http://localhost:4000')
})
