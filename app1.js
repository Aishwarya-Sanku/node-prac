const express = require('express');
const port = 3000;
const app = express();
// crud operations

app.use(express.json());

const items = [
  { id: 1, name: 'aishu', age: 23 },
];
// get all
app.get('/all/items', (req, res) => {
  res.json(items);
});
// get by id
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'item not found' });
  }
});
// post by id 
app.post('/item', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Mandatory fields are name and age' });
  }

  const newItem = {
    id: items.length + 1,
    name: name,
    age: parseInt(age),
  };

  items.push(newItem);

  res.status(201).json(newItem);
});

// put 
app.put('/items/:id',(req,res) =>{
const itemId = parseInt(req.params.id);
const {name,age} = req.body;
const  itemIndex = items.findIndex(item => item.id === itemId);


if(itemIndex !== -1){
  items[itemIndex].name = name || items[itemIndex].name;
  items[itemIndex].age = age? parseInt(age) : items[itemIndex].age;
res.json(items[itemIndex]);
}
else{
  res.status(400).json({error:'item not found'});
}
});


// delete 

app.delete('/deleteItem/:id',(req,res) =>{
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex(item =>item.id === itemId);


  if(itemIndex!== -1){
    items.splice(itemIndex,1);
    res.json({message:'deleted succesfully'});
  
  }

  else{
    res.status(400).json({error:'not found'});
  }


});
//port 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

