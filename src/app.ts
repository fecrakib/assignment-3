import express,{Application, Request,Response} from 'express'

import cors from 'cors'
import router from './app/routes';
import notFound from './app/middlewares/notFound';



const app :Application = express()


// parsers
app.use(express.json())
app.use(cors());

app.use('/api',router)

const getAController=(req:Request, res:Response) => {
    res.send('Hello World!')
  
  
  }
  

 // Not Found
app.use(notFound);

export default app;