//Inserts in db.movies
db.movies.insert({ 'title': 'Star Wars', 'writer': 'George Lucas', 'year': 1977, 'actors': ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Peter Chushing', 'James Earl Jones'] });

db.movies.insert({ 'title': 'Raiders of the Lost Ark', 'writer': 'George Lucas', 'year': 1981, 'actors': ['Harrison Ford'] });

db.movies.insert({ 'title': 'Fight Club', 'writer': 'Chuck Palahniuk', 'year': 1999, 'actors': ['Brad Pitt', 'Edward Norton'] });

db.movies.insert({ 'title': 'Pulp Fiction', 'writer': 'Quentin Tarantino', 'year': 1994, 'actors': ['John Travolta', 'Uma Thurman'] });

db.movies.insert({ 'title': 'Inglorious Basterds', 'writer': 'Quentin Tarantino', 'year': 2009, 'actors': ['Brad Pitt', 'Diane Kruger', 'Eli Roth'] });

db.movies.insert({ 'title': 'The Hobbit: An Unexpected Journey', 'writer': 'J.R.R. Tolkein', 'year': 2012, 'franchise': 'The Hobbit' });

db.movies.insert({ 'title': 'The Hobbit: The Desolation of Smaug', 'writer': 'J.R.R. Tolkein', 'year': 2013, 'franchise': 'The Hobbit' });

db.movies.insert({ 'title': 'The Hobbit: The Battle of the Five Armies', 'writer': 'J.R.R. Tolkein', 'year': 2012, 'franchise': 'The Hobbit', 'synopsis': 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.' });

db.movies.insert({ 'title': 'Pee Wee Herman\'s Big Adventure', 'writer': 'Phil Hartman', 'year': 1985 });

db.movies.insert({ 'title': 'Avatar' });

//Finds in db.movies
db.movies.find({});

db.movies.find({ 'writer': 'Quentin Tarantino' });

db.movies.find({ 'actors': 'Brad Pitt' });

db.movies.find({ 'franchise': 'The Hobbit' });

db.movies.find({ 'year': { $gte: 1990, $lt: 2000 } });

db.movies.find({ $or: [{ 'year': { $lt: 2000 } }, { 'year': { $gt: 2010 } }] });

//Updates in db.movies
db.movies.update({ 'title': 'The Hobbit: An Unexpected Journey' }, { $set: { 'synopsis': 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.' } });

db.movies.update({ 'title': 'The Hobbit: The Desolation of Smaug' }, { $set: { 'synopsis': 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.' } });

db.movies.update({ 'title': 'Pulp Fiction' }, { $addToSet: { 'actors': 'Samuel L. Jackson' } });

//Text searches in db.movies
db.movies.find({ 'synopsis': { $regex: /Bilbo/ } });

db.movies.find({ 'synopsis': { $regex: /Gandalf/ } });

db.movies.find({ $and: [{ 'synopsis': { $regex: /Bilbo/ } }, { 'synopsis': { $not: /Gandalf/ } }] });

db.movies.find({ 'synopsis': { $regex: /dwarves|hobbit/i } });

db.movies.find({ $and: [{ 'synopsis': { $regex: /gold/i } }, { 'synopsis': { $regex: /dragon/i } }] });

//Deletes in db.movies
db.movies.remove({ 'title': 'Pee Wee Herman\'s Big Adventure' });

db.movies.remove({ 'title': 'Avatar' });

//Inserts in db.users

db.users.insert({ 'username': 'SallySmith', 'first_name': 'Sally', 'last_name': 'Smith' });

db.users.insert({ 'username': 'JimmyHagen', 'full_name': { 'first': 'Jimmy', 'last': 'Hagen' } });

//Inserts in db.posts
db.posts.insert({ 'username': 'SallySmith', 'title': 'Passes out at party', 'body': 'Wakes up early and cleans house' });

db.posts.insert({ 'username': 'SallySmith', 'title': 'Buys a House', 'body': 'Living in a new neighborhood now' });

db.posts.insert({ 'username': 'SallySmith', 'title': 'Reports a bug in your code', 'body': 'Sends you a Pull Request' });

db.posts.insert({ 'username': 'JimmyHagen', 'title': 'Borrows something', 'body': 'Returns it when he is done' });

db.posts.insert({ 'username': 'JimmyHagen', 'title': 'Borrows everything', 'body': 'The end' });

db.posts.insert({ 'username': 'JimmyHagen', 'title': 'Forks your repo on github', 'body': 'Sets to private' });

//Inserts in db.comments
borrow_some_id = db.posts.find({ 'title': 'Borrows something' }, { _id: 1 })[0]._id
borrow_every_id = db.posts.find({ 'title': 'Borrows everything' }, { _id: 1 })[0]._id
forks_id = db.posts.find({ 'title': 'Forks your repo on github' }, { _id: 1 })[0]._id
passes_id = db.posts.find({ 'title': 'Passes out at party' }, { _id: 1 })[0]._id
reports_id = db.posts.find({ 'title': 'Reports a bug in your code' }, { _id: 1 })[0]._id

db.comments.insert({ 'username': 'SallySmith', 'comment': 'Hope you got a good deal!', 'post': borrow_some_id })

db.comments.insert({ 'username': 'SallySmith', 'comment': 'What\'s mine is yours!', 'post': borrow_every_id })

db.comments.insert({ 'username': 'SallySmith', 'comment': 'Don\'t violate the licensing agreement!', 'post': forks_id })

db.comments.insert({ 'username': 'JimmyHagen', 'comment': 'It still isn\'t clean', 'post': passes_id })

db.comments.insert({ 'username': 'JimmyHagen', 'comment': 'Denied your PR cause I found a hack', 'post': reports_id });

//Finds for the three new collections
db.users.find({});

db.posts.find({});

db.posts.find({ 'username': 'SallySmith' });

db.posts.find({ 'username': 'JimmyHagen' });

db.comments.find({});

db.comments.find({ 'username': 'SallySmith' });

db.comments.find({ 'username': 'JimmyHagen' });

db.comments.find({ 'post': db.posts.find({ 'title': 'Reports a bug in your code' }, { _id: 1 })[0]._id });