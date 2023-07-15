const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const cors = require('cors');

// ...

// Enable CORS


const app = express();
//app.use(cors());

// Enable CORS with specific origin and support for credentials
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

// Configure session middleware
app.use(session({
  secret: 'Tabletennis123',
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Configure Google Strategy
//refer readme.md for details
passport.use(new GoogleStrategy({
  clientID: '519132576502-6f3j94tidg0ok5nkvo77ahrhmmshvpnt.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // This callback will be executed when a user successfully authenticates with Google
  // You can save the user's profile data or perform additional operations here
  return done(null, profile);
}));

// Configure Passport.js serialization/deserialization
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes
app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Login with Google</a>');
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Redirect to a success page or handle the authenticated user as needed
  res.redirect('http://localhost:3000/profile');
});

app.get('/profile', (req, res) => {
    //const abc = {"id":"103442128414469390251","displayName":"Sourav Jyoti Barman","name":{"familyName":"Barman","givenName":"Sourav Jyoti"},"photos":[{"value":"https://lh3.googleusercontent.com/a/AAcHTtcTAiVIEWR8BWSr2RM3DR3IVTJeJ-vwZPlS4_kOhu6e=s96-c"}],"provider":"google","_raw":"{\n  \"sub\": \"103442128414469390251\",\n  \"name\": \"Sourav Jyoti Barman\",\n  \"given_name\": \"Sourav Jyoti\",\n  \"family_name\": \"Barman\",\n  \"picture\": \"https://lh3.googleusercontent.com/a/AAcHTtcTAiVIEWR8BWSr2RM3DR3IVTJeJ-vwZPlS4_kOhu6e\\u003ds96-c\",\n  \"locale\": \"en\"\n}","_json":{"sub":"103442128414469390251","name":"Sourav Jyoti Barman","given_name":"Sourav Jyoti","family_name":"Barman","picture":"https://lh3.googleusercontent.com/a/AAcHTtcTAiVIEWR8BWSr2RM3DR3IVTJeJ-vwZPlS4_kOhu6e=s96-c","locale":"en"}};
    res.json(req.user);

});



app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });


  

// Start the server
app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});
