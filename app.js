const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

const {getHomePage,getLoginPage,getBackPage,getJobStatusdrop,getbusinessunit,getexpdropdown,getsalesregionunit,getsalesrepunit,getcustomers,gettechlevel,addjd,
    joblistingdetails,joblisting,updatejoblisting,getJobreqIDbyProfiles,getcurrentlocation,getsalutation,gethighestqual,getprofilestatus,getprofilecountry,
    getprofilestatebycountry,addprofile,profilelistingdetails,profilelisting,updateprofile,addvendor,vendorlistingdetails,vendorlisting,updatevendor,
    getjobreqID,getvendorjobreqID,jobstatusnew,getvendornamedropdown,getprofilejobtitlebyreqId,getprofilevendordropdown,createinterviewpage,interviewlisting,interviewlistingbyid,
    getinterviewmode,getinterviewtype,updateinterview,Adserachjobs,adsearchvendor,adsearchprofile,adsearchinterview,getinterviewstatus,profileonloaddropdown,

    interviewschedulemsg,validateLogin,userroledropdown,getprofilestatusfovendor,getviewrequirments,rolebasevendor,avanirequirementisting,viewinterviews,
    disablevendor,getprofilesbyvendorrole} = require('./routes/index');
const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');

const port = 2000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'HYTSP00031',
    user: 'root',
    password: 'root@123',
    database: 'jobtracker'
});

// connect to database
db.connect((err) => {
    if (err) {
        console.log(err);
        throw err;
        
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app

// app.get('/viewrequirments',getviewrequirments)
// app.get('/viewinterviews',viewinterviews)

app.get('/home', getHomePage);
// app.get('/login', getLoginPage);
// app.post('/validatelogin', validateLogin);
// app.get('/logout', getBackPage);

// app.get('/add', addPlayerPage);
// app.get('/edit/:id', editPlayerPage);
// app.get('/delete/:id', deletePlayer);
// app.post('/add', addPlayer);
// app.post('/edit/:id', editPlayer);
// app.get('/bu', getbusinessunit);
// app.get('/sales', getsalesregionunit);
// app.get('/salesrep', getsalesrepunit);
// app.get('/customer', getcustomers);
// app.get('/techlevel', gettechlevel);
// app.post('/jdescription', addjd);

// app.get('/experince', getexpdropdown);
// app.get('/jobstatus', getJobStatusdrop);
// app.get('/jobreqid',getjobreqID); 
// app.get('/profilevendor',getprofilevendordropdown); 
// app.get('/joblistingdetails', joblistingdetails);
// app.get('/joblisting/:i', joblisting);
// app.post('/updatejoblisting/:id',updatejoblisting);

// app.get('/jobreqidbyprofiles',getJobreqIDbyProfiles);

// app.post('/addprofiles', addprofile);
// app.get('/profileslistingdetails', profilelistingdetails);
// app.get('/profilelisting/:i', profilelisting);
// app.post('/updateprofile/:id',updateprofile);

// app.post('/addvendor', addvendor);

// app.get('/vendorlistingdetails', vendorlistingdetails);
// app.get('/vendorlisting/:i', vendorlisting);
// app.post('/updatevendor/:id', updatevendor);

// //profileTab lookup's
// app.get('/curentlocation', getcurrentlocation);
// app.get('/salutation', getsalutation);
// app.get('/highestqual', gethighestqual);
// app.get('/profilestatus', getprofilestatus);
// app.get('/profilecountry', getprofilecountry);
// //app.get('/profilecountry', getprofilecountry);
// app.get('/statebycountry/:profilecountry', getprofilestatebycountry);
// app.get('/jobtitlebyreqid/:reqId', getprofilejobtitlebyreqId);
// app.get('/jobstatusnew', jobstatusnew);
// app.get('/vendornamedropdown', getvendornamedropdown);

// app.post('/createinterview',createinterviewpage);
// app.get('/interviewlisting',interviewlisting);
// app.get('/interviewdisplaybyid/:i',interviewlistingbyid);
// app.get('/interviewmode', getinterviewmode);
// app.get('/interviewtype', getinterviewtype);

// app.post('/updateinterview/:editinterviewID',updateinterview);

// app.post('/Adserachjobs',Adserachjobs);
// app.post('/adsearchvendor',adsearchvendor);
// app.post('/adsearchprofile',adsearchprofile);
// app.post('/adsearchinterview',adsearchinterview);
// app.get('/interviewstatus', getinterviewstatus);
// //app.post('/sendemail',sendemail);
// app.get('/profileonloaddropdown', profileonloaddropdown);
// app.get('/interviewschedulemsg/:editprofileID', interviewschedulemsg);
// app.post('/rolebasevendor', rolebasevendor);
// app.get('/avanirequirementisting/:vendorhiddenid', avanirequirementisting);
// app.get('/userrole', userroledropdown);

// app.get('/profilestatusforvendor', getprofilestatusfovendor);
// app.get('/vendorjobreqid/:addreqbyvendorid',getvendorjobreqID)

// app.get('/disablevendor/:jobreqid',disablevendor);

// app.get('/profileslistingbyvendorrole/:profilevendorroleid',getprofilesbyvendorrole);
// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
