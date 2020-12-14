import env from './configs/environment'
import app from './app'

const PORT = env.PORT || 3333

app.listen(PORT, () => console.log(`Listening through ${PORT}`))
