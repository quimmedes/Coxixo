import express from 'express'
import  {query} from  './connection.js'


const app = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Show all users 
app.get('/users', async (req, res) => {


  var result = await query('SELECT * FROM user');
  res.json(result);


});


//Show user by Phone Number
app.get('/user/:number', async (req, res) => {

  if(!isNaN(req.params.number)) {

  var result = await query('SELECT * FROM user as u where u.number =' + req.params.number );
  res.json(result);
  }
  else
  res.json([]);

});

//Show contact by Id
app.get('/contact/:id', async (req, res) => {

  if(!isNaN(req.params.id)) {

  var result = await query('SELECT uc.id,us.name,us.picture,us.number FROM user_contact AS uc INNER JOIN user AS u ON uc.user_id = u.id INNER JOIN user us ON uc.contact_id = us.id WHERE uc.user_id = ' + req.params.id );
  res.json(result);
  }
  else
  res.json([]);

});



app.get('/', async (req, res) => {


  var result = await query('SELECT * FROM user');
  res.json(result);


})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})