import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import sendGrid from '@sendgrid/mail';
const app = express();
const router = express.Router();
import * as path from 'path';


app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

router.get('/api', (req,res,next) => {
    res.send('API Status: Running')
});

router.post('.api/email',(req,res,next) =>{ sendGrid.setApiKey('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');
  const msg = {
      to: 'broganmatt11@gmail.com',
      from: req.body.email,
      subject: 'Website Contact',
      text: req.body.message
  }
  sendGrid.send(msg)
      .then(result=>{
          res.status(200).json({
              success: true
          });
      })
      .catch(err => {
          res.status(401).json({
              success: false
          });
      })

});

app.get("*", (req,res,next) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//app.use((err ,req,next))

app.listen(3000, '0.0.0.0')