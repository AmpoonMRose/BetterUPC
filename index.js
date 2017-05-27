const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const consolidate = require('consolidate');
const Blog = require('./models').Blog;


const app = express();

app.engine('html', consolidate.nunjucks);
app.set('views', './views');



//Body Parder MiddleWare
app.use(bodyparser.urlencoded({ extended: true }));

//Set Static Path
app.use(express.static('./static'))

app.use(express.static('./views'))


app.get('/', function(req, res) {
	res.render('index.html',
	{
	name: 'myname'
});
});




app.get('/lost', function(req, res) {
	res.render('lost.html');
});

app.get('/found', function(req, res) {
	res.render('found.html');
});


app.post('/writeentry', function(req, res) {
	const title = req.body.title;
	const content = req.body.content;
	const picture = 'pic 1';
	const author = req.body.author;
	const contact_details = '914198741894712';
	const tag = 'lost';


	console.log(req.body);



	Blog.create({ title: title, content: content, picture: picture, author: author, contact_details: contact_details, tag: tag }).then(task => {
		res.redirect('/blog1');

});

});


app.listen(3111, function() {
	console.log('Server started on Port 3111');
});

