const nodemailer = require('nodemailer');

module.exports = {
  
    viewinterviews:(req, res) => {

        res.render('viewinterviews.ejs', {
           
    
        });
    },

    getviewrequirments:(req, res) => {

res.render('viewrequirments.ejs', {
   
});
    },
  getLoginPage:(req, res) => {

        res.render('login.ejs', {
            title: "Welcome to CRM Application"
            , message: ''
    
        });
    },
   validateLogin:(req, res) => {
     
        let psno = req.body.username;
        let pwd = req.body.password;
        let role = req.body.role;
        let query = "CALL procLoginAuthenticationWithoutLDAP('" +psno + "', '" + pwd + "','"+role+"',@output,@output1)";

        db.query(query, (err, result2) => {
            if (err) {
                return res.status(500).send(err);
            }
            let query1="SELECT @output as outputmsg,@output1 as vendoridoutmsg";
            db.query(query1, (err, result3) => {
                if (err) {
                  
                    return res.status(500).send(err);
                }
            //   else if (result3.outputmsg=='Invalidlogin'){
            //       return result3.outputmsg;
            //   }
            //   else{
               // res.redirect('/home');
              
                   res.status(200).json(result3);
                   
               
            });
           
        });
    
    },
    getHomePage: (req, res) => {
      
        res.render('index.ejs', {
            title: "Welcome to JobTracker"
            , message: ''
        })
    },
   getBackPage: (req, res) => {
        res.render('login.ejs', {
            title: "Welcome to JobTracker"
            , message: ''
        });
    },
    getJobStatusdrop: (req, res) => {
        let query = "CALL proclookupstatus()"; // query database to get all the status
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/home');
            }
            else {
                res.status(200).json(result);
            }
        });
    },
    getexpdropdown: (req, res) => {
        let buquery = "CALL proclookupexperince()";
        db.query(buquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },
    getbusinessunit: (req, res) => {
        let buquery = "CALL proclookupbu()";
        db.query(buquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },
    getsalesregionunit: (req, res) => {
        let salesquery = "CALL proclookupsalesregion()";
        db.query(salesquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    getsalesrepunit: (req, res) => {
        let salesrepquery = "CALL proclookupsalesrep()";
        db.query(salesrepquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },
    getcustomers: (req, res) => {
        let customerquery = "CALL proclookupcustomer()";
        db.query(customerquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },
    gettechlevel: (req, res) => {
        let techlevelquery = "CALL proclookuptechlevel()";
        db.query(techlevelquery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },

    // profileTab lookup's
    getsalutation: (req, res) => {
        let query = "CALL proclookupsalutation()";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    getprofilecountry: (req, res) => {
        let query = "CALL proclookupjcountry()";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    getprofilestatebycountry: (req, res) => {

        let countryid = req.params.profilecountry;

        let query = "CALL proclookupjstatebycountry('" + countryid + "')";
      

        db.query(query, (err, result) => {
            if (err) {
          
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    getprofilejobtitlebyreqId: (req, res) => {

        let reqId = req.params.reqId;

        let query = "CALL proclookupjobtitlebyreqid('" + reqId + "')";

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    gethighestqual: (req, res) => {
        let query = "CALL proclookuphighestqualification()";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    getcurrentlocation: (req, res) => {
        let query = "CALL proclookuplocation()";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    getprofilestatus: (req, res) => {
        let query = "CALL proclookupstatus()";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    getprofilestatusfovendor: (req, res) => {
        let query = "CALL proclookupprofilestatusforvendorlogin()";

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },

    joblistingdetails: (req, res) => {
       
        let customerquery = "CALL proclistjobdescription()";
     

        db.query(customerquery, (err, result) => {
            if (err) {
                
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },

    joblisting: (req, res) => {

        let jdid = req.params.i;


        let query = "CALL proclistjobdescriptionbyid('" + jdid + "')";

        db.query(query, (err, result) => {
            if (err) {
               
                return res.status(500).send(err);
            }
            res.status(200).json(result);
          
        });
    },
    jobstatusnew: (req, res) => {
        let query = "CALL proclookupjdstatus()";
        db.query(query, (err, result) => {
            if (err) {              
                return res.status(500).send(err);
            }
            res.status(200).json(result);       
        });
    },
    getvendornamedropdown: (req, res) => {

        let query = "CALL proclookupvendorname()"; // query database to get all the status

        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/home');
            }
            else {
                res.status(200).json(result);
            }
        });
    },

    addjd: (req, res) => {
        
        let Requirement = req.body.Requirement;
        let Role = req.body.Role;
        let rolelevel = req.body.rolelevel;
        let jobtitle = req.body.jobtitle;
        let Position = req.body.Position;
        let closedate = req.body.closedate;
        let dateofreq = req.body.dateofreq;
        let jdduration = req.body.jdduration;
        let experince = req.body.Exp;
        let PSkill = req.body.PSkill;
        let SSkill = req.body.SSkill;
        let locationflex = req.body.locationflex;
        let customerid = req.body.customerid;
        let jdstatus = req.body.jdstatus;
        let buid = req.body.buid;
        let industry = req.body.industry;
        let domain = req.body.domain;
        let onsite = req.body.onsite;
        let information = req.body.information; 
        let salesregionid = req.body.salesregionid;
        let salesrepid = req.body.salesrepid;
        let joblocationid = req.body.joblocationid;
        let joblocation = req.body.joblocation;
        let jDescription = req.body.jDescription;
        let buComments = req.body.buComments;
        let jdComments = req.body.jdComments;
        let createdby =  req.body.createdby;
        let isactive =req.body.isactive;
       
        
        let query = "call procinsertjobdescription('" + buid + "','" + salesregionid + "','" + salesrepid + "','" + customerid + "','" +
        Requirement + "', '" + Role + "','" + rolelevel + "','" + jobtitle + "','" + closedate + "','" + dateofreq + "','" + PSkill +
        "',  '" + SSkill + "','" + joblocationid + "','" + joblocation + "','" + locationflex + "', '" + jdstatus + "','" + jdduration + "','" + experince + "','" +
         Position + "','" + industry + "','" + domain + "', '" + onsite + "', '" + information + "',  '" + jDescription + "','" + buComments + "','" + jdComments + "', '" + createdby + "',now(),'" + isactive + "',@output)";
 
  
        db.query(query, (err, result) => {
            if (err) {
           
                return res.status(500).send(err);
            }
   let query1="SELECT @output as outputmsg";

   db.query(query1, (err, result3) => {
    if (err) {
       
        return res.status(500).send(err);
    }
  
        res.status(200).json(result3);
  
   
    });

        });
    },

    updatejoblisting: (req, res) => {

        let jobdescriptionid = req.body.jobdescriptionId;
        let reqID = req.body.reqid;
        let jdtitle=req.body.jdtitle;
        let role = req.body.role;
        let rolelevel=req.body.rolelevel;
        let noofpositions = req.body.noofpos;
        let industry = req.body.industry;
        let domain = req.body.domain;
        let site = req.body.site;
        let duration = req.body.duration;
        let dateofreq = req.body.dateofreq;    
        let experience = req.body.experince;
        let primaryskill = req.body.primaryskill;
        let secondaryskill = req.body.secondaryskill;
        let closedate = req.body.closedate;
        let locationfelx = req.body.locaflex;
        let customers = req.body.customer;
        let status = req.body.status;
        let bussinessunit = req.body.bussinessunit;
        let salesregion = req.body.salesregion;
        let salesrep = req.body.salerep;
        let joblocationid = req.body.joblocationid;
        let joblocation = req.body.joblocation;
        let jobdescription = req.body.jobdescription;       
         let createdby = req.body.createdby;
        let updateby = req.body.updateby;
        // let createddate = req.body.cbydate_edit;
        let updatedtime = req.body.updatedate;
        let jdcomments = req.body.jdcomments;
        let bucomments = req.body.bucomments;
        let isactive=req.body.isactive;
       
        let query = "CALL procUpdatejobdescription('" + jobdescriptionid + "','" + bussinessunit + "','" + salesregion +
        "','" + salesrep + "','" + customers + "','" + status + "','" + reqID + "','" + role + "','" + rolelevel + "','" + jdtitle + "','" + closedate + "','" + dateofreq + "','" + primaryskill + "','" + secondaryskill + 
        "','" + joblocationid + "','" + joblocation + "','" + locationfelx + "','" + duration + "','" + experience +
        "','" + noofpositions + "','" + industry + "','" + domain + "','" + site + "','" + jobdescription + "','" + bucomments + "','" + jdcomments + "','" + createdby + "',now(),'" + updateby + "',now(),'" + isactive + "')";

       
        db.query(query, (err, result) => {
            if (err) {
               
                return res.status(500).send(err);
                
            }
            res.status(200).json(result);
            

        });
    },

    addprofile: (req, res) => {
      
        //  let Profileid = req.body.Profileid;
        let Jobrecid = req.body.Jobrecid;
        let jobreqcode = req.body.jobreqcode;
        let Firstname = req.body.Firstname;
        let Lastname = req.body.Lastname;
        let Email = req.body.Email;
        let Mobile = req.body.Mobile;
        let Dob = req.body.Dob;
        let City = req.body.City;
        let State = req.body.State;
        let Country = req.body.Country;
        let Experience = req.body.Experience;
        let Highestquali = req.body.Highestquali;
        let Currentjobtitle = req.body.Currentjobtitle;
        let Currentsalary = req.body.Currentsalary;
        let Expectedsalary = req.body.Expectedsalary;
        let Skillset = req.body.Skillset;
        let Skypeid = req.body.Skypeid;
        let Noticeperiod = req.body.Noticeperiod;
        let Currentlocation =  req.body.Currentlocation;
        let Desiredlocation =  req.body.Desiredlocation;
        let Status =  req.body.Status;
        let Resume =  req.body.Resume;
        let Vendorid =  req.body.Vendorid;
        let Pjobtitle= req.body.Pjobtitle;
        let Psecondskill= req.body.Psecondskill;
        let Resigned= req.body.Resigned;
        let Vendorname= req.body.Vendorname;
        let Createdby =  req.body.Createdby;
        let isactive=req.body.isactive;

        let query = "call procinsertprofile('" + Jobrecid + "', '"+jobreqcode+"','" + Firstname + "','" + Lastname + "','" + 
                    Email + "',  '" + Mobile + "','" + Dob + "','" + City + "','" + State + "','" + Country + "','" + 
                    Experience + "','" + Highestquali + "','" + Currentjobtitle + "','" + Currentsalary + "','" + 
                    Expectedsalary + "','" + Skillset + "','" + Skypeid + "','" + Noticeperiod + "','" + Currentlocation + "','" + 
                    Desiredlocation + "','" + Status + "','" + Resume + "','" + Vendorid + "','" + Createdby + "',now(),'" + Pjobtitle + "','" +
                     Psecondskill + "','" + Resigned + "','" + Vendorname + "','"+isactive+"')";
           
       
        
        db.query(query, (err, result) => {
            if (err) {
            
                return res.status(500).send(err);
            }
            res.status(200).json(result);
          
        });
    },

    profilelistingdetails: (req, res) => {

        let query = "CALL proclistprofiles()";
        
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    getprofilesbyvendorrole: (req, res) => {
let profilevendorid=req.params.profilevendorroleid;
        let query = "CALL proclistprofilesbyvendorrole('"+profilevendorid+"')";
        
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    updateprofile: (req, res) => {
        let peditprofileId = req.body.peditprofileId;
       // let peditjobdescriptionId = req.body.peditjobdescriptionId;
       let Jobrecid = req.body.peditjobrecid;
       let jobreqcode = req.body.peditjobreqcode;
        let peditfirstname = req.body.peditfirstname;
        let peditlastname = req.body.peditlastname;
        let peditemail = req.body.peditemail;
        let peditmobile = req.body.peditmobile;
        let peditdob = req.body.peditdob;     
        let peditcity = req.body.peditcity;
        let peditstate = req.body.peditstate;
        let peditcountry = req.body.peditcountry;      
        let peditexperience = req.body.peditexperience;
        let pedithighestquali = req.body.pedithighestquali;
        let peditcurrentjobtitle = req.body.peditcurrentjobtitle;
        let peditcurrentsalary = req.body.peditcurrentsalary;
        let peditexpectedsalary = req.body.peditexpectedsalary;
        let peditskillset = req.body.peditskillset;
        let peditskypeid = req.body.peditskypeid;
        let peditnoticeperiod = req.body.peditnoticeperiod;
        let peditcurrentlocation = req.body.peditcurrentlocation;
        let peditdesiredlocation = req.body.peditdesiredlocation;
        let peditstatus = req.body.peditstatus;
        let peditresumename = req.body.peditresumename;
        let peditvendorid = req.body.peditvendorid;
        let Psecondskill = req.body.seditskillset;
        let peditresignation = req.body.peditresignation;
        let peditvendorname = req.body.peditvendorname;
        let peditupdatedby = req.body.peditupdatedby;
        let peditpjobtitle = req.body.peditpjobtitle;
        let Createdby = req.body.Createdby;
        let isactive=req.body.isactive;

        let query = "CALL procUpdateprofile('" + peditprofileId + "','" + Jobrecid + "','" + jobreqcode + "','" + peditfirstname + "','" + peditlastname + "','" + peditemail + "','" + 
                     peditmobile + "','" + peditdob + "','" + peditcity + "','" + peditstate + "','" + peditcountry + "','" + peditexperience + "','" + 
                     pedithighestquali + "','" + peditcurrentjobtitle + "','" + peditcurrentsalary + "','" + peditexpectedsalary + "','" + peditskillset + "','" + 
                     peditskypeid + "','" + peditnoticeperiod + "','" + peditcurrentlocation + "','" + peditdesiredlocation + "','" + peditstatus + "','" + 
                     peditresumename + "','" + peditvendorid + "','" + Createdby + "',now(),'" + peditpjobtitle + "','" + peditupdatedby + "',now(),'" + Psecondskill + "','" + peditresignation + "','" + peditvendorname + "','"+isactive+"')";

      
        db.query(query, (err, result) => {
            if (err) {
              
                return res.status(500).send(err);
            }
            res.status(200).json(result);
          
        });
    },

    profilelisting: (req, res) => {

        let prid = req.params.i;

        let query = "CALL proclistprofilesbyid('" + prid + "')";
        
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },

    addvendor: (req, res) => {

        let Vendorcode = req.body.Vendorid;
        let Vendorname = req.body.Vendorname;
        let Vendorpriloc = req.body.Vendorpriloc;
        let Vendorspec = req.body.Vendorspec;
        let Vendoremail = req.body.Vendoremail;
       // let Recruiterid = req.body.Recruiterid;
        let Recruitername = req.body.Recruitername;
        let Recruitercontno = req.body.Recruitercontno;
        let Recruiteremail = req.body.Recruiteremail;
        let Accountmanager = req.body.Accountmanager;
        let Accmanageremail = req.body.Accmanageremail;
        let Accmanagercontno = req.body.Accmanagercontno;
        let Vendorcomments = req.body.Vendorcomments;
        let Createdby = req.body.Createdby;
        let isactive=req.body.isactive;

        let query = "call procinsertvendor('" + Vendorcode + "', '" + Vendorname + "', '" + Vendorpriloc + "','" + Vendorspec + "','" +
            Vendoremail + "', '" + Recruitername + "', '" + Recruitercontno + "','" + Recruiteremail + "','" + Accountmanager + "','"
             + Accmanageremail + "','" + Accmanagercontno + "','" + Vendorcomments + "','" + Createdby + "',now(),'" + isactive + "',@output)";
      
        db.query(query, (err, result2) => {
            if (err) {
               
                return res.status(500).send(err);
            }
            let query1="SELECT @output as outputmsg";
            db.query(query1, (err, result3) => {
                if (err) {
                  
                    return res.status(500).send(err);
                }
              
                    res.status(200).json(result3);
              
               
                
            });
           
        });
    },
    getprofilevendordropdown: (req, res) => {
       
        let query = "CALL procprofilevendor()";
       
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    profileonloaddropdown: (req, res) => {
       
        let query = "CALL proclookupjstate()";
       
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },

    vendorlistingdetails: (req, res) => {
       
        let query = "CALL proclistvendors()";
       
        db.query(query, (err, result) => {
            if (err) {
               
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },

    disablevendor: (req, res) => {
       let vendorreqid=req.params.jobreqid;
        let query = "CALL procdisablevendor('"+vendorreqid+"')";
       console.log(query);
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            console.log(result);
        });
    },
    vendorlisting: (req, res) => {
       
        let ivid = req.params.i;
       
        let query = "CALL proclistvendorsbyid('" + ivid + "')";
        
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },
   
    updatevendor: (req, res) => {
       
        let vendorid = req.body.vendorid;
        let Vendorcode = req.body.Vendorcode;
        let Vendorname = req.body.Vendorname;
        let Vendorpriloc = req.body.Vendorpriloc;
        let Vendorspec = req.body.Vendorspec;
        let Vendoremail = req.body.Vendoremail;
       // let Recruiterid = req.body.Recruiterid;
        let Recruitername = req.body.Recruitername;
        let Recruitercontno = req.body.Recruitercontno;
        let Recruiteremail = req.body.Recruiteremail;
        let Accountmanager = req.body.Accountmanager;
        let Accmanageremail = req.body.Accmanageremail;
        let Accmanagercontno = req.body.Accmanagercontno;
        let Vendorcomments = req.body.Vendorcomments;
        let Updateby = req.body.Updateby;
        let Createdby = req.body.Createdby;
        let isactive=req.body.isactive;
       
        let query = "CALL procUpdatevendor('" + vendorid + "','" + Vendorcode + "','" + Vendorname + "','" + Vendorpriloc +
            "','" + Vendorspec + "','" + Vendoremail + "','" + Recruitername + "','" + Recruitercontno + "','" + Recruiteremail + "','"
             + Accountmanager + "','" + Accmanageremail + "','" + Accmanagercontno + "','" + Vendorcomments + "','" + Createdby + "',now(),'" + Updateby + "', now(),'" + isactive + "' )";
     

            db.query(query, (err, result) => {
            if (err) {
               console.log(err);

                return res.status(500).send(err);
            }
            res.status(200).json(result);
           
        });
    },

    getjobreqID: (req, res) => {
        let query = "CALL proclookupreqid()";
       
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
           
        });
    },

    getvendorjobreqID: (req, res) => {
        let addreqbyvendorid = req.params.addreqbyvendorid;
        console.log(addreqbyvendorid);
        let query = "CALL proclookupreqidbyvendor('"+ addreqbyvendorid +"')";
       console.log(query);
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            res.status(200).json(result);
            console.log(result);
           
        });
    },

    getJobreqIDbyProfiles: (req, res) => {
        let ireqid = req.params.i;
        let query = "CALL proclookupreqidbyprofiles('" + ireqid + "')"; 
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/home');
            }
            else {
                res.status(200).json(result);
            }
        });
    },

    createinterviewpage: (req, res) => {

        let interviewID = req.body.interviewID; 
        
        let interviewprofileID = req.body.interviewprofileID;
        let interviewjobId = req.body.interviewjobId;
       
        let interviewjobcode = req.body.interviewjobcode;
        let interviewjobtitle = req.body.interviewjobtitle;
        let interviewername = req.body.interviewername;
        let candidatename = req.body.candidatename;
        let interviewtypeId = req.body.interviewtypeId;
        let interviewmodeId = req.body.interviewmodeId;
        let interviewlocationid = req.body.interviewlocationid;
        let interviewdatetime = req.body.interviewdatetime;
        let noofrounds = req.body.noofrounds;
        let interviewstatus = req.body.interviewstatus;
        let Createdby = req.body.createdby;

        let isactive = req.body.isactive;
        let editintcustomerid=req.body.editintcustomerid;
        let skypeid=req.body.skypeid; 
        let contactnum=req.body.contactnum; 
        let schedulenxtlvldate=req.body.schedulenxtlvldate;
if(schedulenxtlvldate==undefined){
    schedulenxtlvldate='0000-00-00 00:00:00'
}

        let query = "call procinsertlttsinterview('"+interviewID+"','" + interviewprofileID + "', '" + interviewjobtitle + "', '" + interviewjobId +
         "','" + interviewjobcode + "','" +interviewername + "', '" + candidatename + "','" + interviewtypeId + "', '" + interviewmodeId + 
         "','" + interviewlocationid + "', '" + interviewdatetime + "', '" + noofrounds + "','" + Createdby + "',now(),'"+isactive+"','"+
         editintcustomerid+"','"+interviewstatus+"','"+skypeid+"','"+contactnum+"','"+schedulenxtlvldate+"',@output)";


db.query(query, (err, result2) => {
    if (err) {
       
        return res.status(500).send(err);
    }
    let query1="SELECT @output as outputmsg";
    db.query(query1, (err, result3) => {
        if (err) {
           
            return res.status(500).send(err);
        }
      
            res.status(200).json(result3);
      
       
        
    });
   
});
    },


    interviewlisting: (req, res) => {
       
        
       
        let query = "call proclistinterview()";
        
        db.query(query, (err, result) => {
            if (err) {
                
                return res.status(500).send(err);
            }
          
            res.status(200).json(result);
        
        });
    },
    interviewlistingbyid: (req, res) => {
       
        let Inid = req.params.i;

        let query = "CALL proclistinterviewbyid('" + Inid + "')";
       
       
        
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json(result);
        });
    },


 getinterviewmode: (req, res) => {
        let query = "CALL `proclookupinterviewmode`()";
        db.query(query, (err, result) => {
            if (err) {
              
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    getinterviewtype: (req, res) => {
        let query = "CALL `proclookupinterviewtype`()";
        db.query(query, (err, result) => {
            if (err) {
               
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },
    updateinterview: (req, res) => {
 

        let editinterviewID = req.body.editinterviewID;
        let interviewhiddenID = req.body.interviewhiddenID;
        let editinterviewjobId = req.body.editinterviewjobId;
        let editinterviewjobcode = req.body.editinterviewjobcode;
        let editinterviewjobtitle = req.body.editinterviewjobtitle;
        let editinterviewername = req.body.editinterviewername;
        let editcandidatename = req.body.editcandidatename;
        let editinterviewtypeId = req.body.editinterviewtypeId;
        let editinterviewmodeId = req.body.editinterviewmodeId;
        let editinterviewlocationid = req.body.editinterviewlocationid;
       //let editinterviewdatetime = req.body.editinterviewdatetime;
        let editReasonforrescheduling = req.body.editReasonforrescheduling;
       // let editnoofrounds = req.body.editnoofrounds;
        let updatedby = req.body.updatedby;
        let Createdby = req.body.Createdby;
        let isactive=req.body.isactive;
        let editintcustomerid=req.body.editintcustomerid;
     let rescheduledate=req.body.rescheduledate;
     let reschedulestatus=req.body.reschedulestatus;
    

       
        let query = "CALL procupdateinterview2('" + editinterviewID + "','" + editinterviewername + "','" + editcandidatename + "','" 
        + editinterviewtypeId + "','" + editinterviewmodeId + "','" + editinterviewlocationid + "','" + isactive + "','" 
        + reschedulestatus + "','" + rescheduledate + "','" + editReasonforrescheduling +"','"+ updatedby + "',now(),'"+ interviewhiddenID + "' )";
     

db.query(query, (err, result2) => {
    if (err) {
       
        return res.status(500).send(err);
    
    }
    res.status(200).json(result2);

   
   
});
    },


    
    Adserachjobs: (req, res) => {
        
        let Requirementsearch = req.body.Requirementsearch;
       let Accountsearch = req.body.Accountsearch;
        let Rolesearch = req.body.Rolesearch;
      //  let rolelevel = req.body.rolelevel;
        let jobtitlesearch = req.body.jobtitlesearch;
        let Positionsearch = req.body.Positionsearch;
        let closedatesearch = req.body.closedatesearch;
        let dateofreqsearch = req.body.dateofreqsearch;

        let jddurationsearch = req.body.jddurationsearch;
        let Expsearch = req.body.Expsearch;
        let PSkillsearch = req.body.PSkillsearch;
        let SSkillsearch = req.body.SSkillsearch;
        let locationflexsearch = req.body.locationflexsearch;
    
        let jdstatussearch = req.body.jdstatussearch;
        let buidsearch = req.body.buidsearch;
        let salesregionsearch = req.body.salesregionsearch;
        let salesrepidsearch = req.body.salesrepidsearch;
      //  let joblocationidsearch = req.body.joblocationidsearch;
        let joblocationsearch = req.body.joblocationsearch;
    
        let jDescriptionsearch = req.body.jDescriptionsearch;
       // let buComments = req.body.buComments;
      //  let jdComments = req.body.jdComments;
      //  let createdbysearch =  req.body.createdbysearch;
        let isactivesearch =req.body.isactivesearch;
       

                //let query="select * from jobdescription where 1=1 and isactive='Y'  ";
                let query="select jd.jobdescriptionid,jd.jobdescription,jd.bussinessunitid,jd.salesrepid,jd.salesregionsid,jd.customersid,jd.jobstatusid,jd.requirmentid,jd.role,jd.techlevelid,jd.techlevel,jd.jdtitle,jd.closedate,jd.dateofreq,jd.primaryskills,jd.secondaryskills,jd.joblocationid,jd.joblocation,jd.locationflexibility,jd.duration,jd.experience,jd.noofpositions,jd.createdby,jd.createddate,jd.jobdescription,jd.isactive,bu.bussinessunit,sp.salesrep,sr.salesregions,c.customers,jst.jobstatus from jobdescription jd left join bussinessunit bu on bu.bussinessunitid=jd.bussinessunitid left join salesrep sp on sp.salesrepid=jd.salesrepid left join salesregions sr on sr.salesregionsid=jd.salesregionsid left join customers c on c.customersid=jd.customersid left join jobstatus jst on jst.jobstatusid=jd.jobstatusid  where 1=1 and isactive='Y'";
               
                if (Requirementsearch!='')
                {  
                    query+=" and requirmentid like '%"+Requirementsearch+"%'" ;
                }
                if (Accountsearch!='')
                {  
                    query+=" and customers like '%"+Accountsearch+"%'" ;
                }

                if (Rolesearch!='')
                { 
                    query+=" and role like '%"+Rolesearch+"%'" ;
                }
            
                if (jobtitlesearch!='')
                { 
                    query+=" and jdtitle like '%"+jobtitlesearch+"%'" ;
                }
                if (Positionsearch!='')
                { 
                    query+=" and noofpositions like '%"+Positionsearch+"%'" ;
                }
                if (closedatesearch!='')
                { 
                    query+=" and closedate like '%"+closedatesearch+"%'" ;
                }
                if (dateofreqsearch!='')
                { 
                    query+=" and dateofreq like '%"+dateofreqsearch+"%'" ;
                }
                if (jddurationsearch!='')
                { 
                    query+=" and duration like '%"+jddurationsearch+"%'" ;
                }
                if (Expsearch!='')
                { 
                    query+=" and experience like '%"+Expsearch+"%'" ;
                }
                if (PSkillsearch!='')
                { 
                    query+=" and primaryskills like '%"+PSkillsearch+"%'" ;
                }
                if (SSkillsearch!='')
                { 
                    query+=" and secondaryskills like '%"+SSkillsearch+"%'" ;
                }
                if (locationflexsearch!='')
                { 
                    query+=" and locationflexibility like '%"+locationflexsearch+"%'" ;
                }
                if (jdstatussearch!='')
                { 
                    query+=" and jobstatus like '%"+jdstatussearch+"%'" ;
                }
                if (buidsearch!='')
                { 
                    query+=" and bussinessunit like '%"+buidsearch+"%'" ;
                }
                if (salesregionsearch!='')
                { 
                    query+=" and salesregions like '%"+salesregionsearch+"%'" ;
                } 
                if (salesrepidsearch!='')
                { 
                    query+=" and salesrep like '%"+salesrepidsearch+"%'" ;
                }
                 if (joblocationsearch!='')
                { 
                    query+=" and joblocation like '%"+joblocationsearch+"%' " ;
                }
                if ( jDescriptionsearch!='')
                { 
                    query+=" and jobdescription like '%"+ jDescriptionsearch+"%' " ;
                }
                jDescriptionsearch
      
  
        db.query(query, (err, result) => {
            if (err) {
            
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },

    adsearchvendor: (req, res) => {


        let Vendoridsearch = req.body.Vendoridsearch;
        
        let Vendornamesearch = req.body.Vendornamesearch;
      //  let Vendorpriloc = req.body.Vendorpriloc;
        let Vendorspecsearch = req.body.Vendorspecsearch;
        let Vendoremailsearch = req.body.Vendoremailsearch;
       // let Recruiteridsearch = req.body.Recruiteridsearch;
        let Recruiternamesearch = req.body.Recruiternamesearch;
        let Recruitercontnosearch = req.body.Recruitercontnosearch;
      //  let isactivesearch =req.body.isactivesearch;

        let query="select * from vendor where 1=1 and isactive='Y'";

        if (Vendoridsearch!='')
        {  
            query+=" and vendorcode like '%"+Vendoridsearch+"%'"
            //query+=" and vendorcode='"+Vendoridsearch+"'";
        }

        if (Vendornamesearch!='')
        { 
            query+=" and vendorname like '%"+Vendornamesearch+"%'"  ;
        }

         if (Vendorspecsearch!='')
        { 
            query+=" and vendorspecification like '%"+Vendorspecsearch+"%'" ;
        }
   
        if (Vendoremailsearch!='')
        { 
            query+=" and vendoremail like '%"+Vendoremailsearch+"%' " ;
        }
        if (Recruiternamesearch!='')
        { 
            query+=" and recruitername like '%"+Recruiternamesearch+"%'" ;
        }
        if (Recruitercontnosearch!='')
        { 
            query+=" and recruitercontactno like '%"+Recruitercontnosearch+"%' " ;
        }
     
       
        

        db.query(query, (err, result) => {
            if (err) {
            
                return res.status(500).send(err);
               
            }
            res.status(200).json(result);
          
        });
    },

    getinterviewstatus: (req, res) => {
        let query = "CALL `proclookupinterviewstatus`()";
        db.query(query, (err, result) => {
            if (err) {
               
                return res.status(500).send(err);
            }
            res.status(200).json(result);

        });
    },



    adsearchinterview: (req, res) => {
        
        
                let reqidsearchinter = req.body.reqidsearchinter;
                let jobtitlesearchinter = req.body.jobtitlesearchinter;
                 let intviewernamesearchinter = req.body.intviewernamesearchinter;
                let candinamesearchinter = req.body.candinamesearchinter;
                
                let typeofintserachinter = req.body.typeofintserachinter;
                let modeofintsearchinter = req.body.modeofintsearchinter;
                let interviewelocasearchinter = req.body.interviewelocasearchinter;
                let interlevelsearchinter = req.body.interlevelsearchinter;
                let scheduledinteronseint = req.body.scheduledinteronseint;
                let statusintersearchinter = req.body.statusintersearchinter;
                let rescheduledinteronseint = req.body.rescheduledinteronseint;
                let rearecheduledinterseint = req.body.rearecheduledinterseint;
                let schedulenextinteronseint = req.body.schedulenextinteronseint;
                let isactivesearchinter =req.body.isactivesearchinter;
           

                let query="select l.lttsinterviewid,l.interviewprofileid,l.interviewjobtitle,l.interveiwjobrequrimentid,l.interviewjobcode,l.ltts_interviewername,l.candidatename,l.lttsinterviewtypeid,l.lttsinterviewmodeid,l.lttsinterviewlocationid,l.lttsinterviewdateandtime,l.interviewlevel,l.reschedulereason,l.interviewcustomerid,l.interviewrescheduledate,l.interviewnextleveldate,l.interviewstatusid,l.rescheduleintstatusid,l.nxtlevelintstatusid,l.contactnumber,l.skypeid,l.createdby,l.createddate,l.isactive,im.interviewmode,it.interviewtype,iloc.location,ist.interviewprofilestatus,c.customers from lttsinterview l left join interviewmode im on im.interviewmodeid=l.lttsinterviewmodeid left join interviewtype it on it.interviewtypeid=l.lttsinterviewtypeid left join location iloc on iloc.locationid=l.lttsinterviewlocationid left join interviewprofilestatus ist on ist.interviewprofilestatusid=l.interviewstatusid left join customers c on c.customersid=l.interviewcustomerid where 1=1 and isactive='Y'";
                if (reqidsearchinter!='')
                { 
                    query+=" and interviewjobcode like '%"+reqidsearchinter+"%'" ;
                }
        
                if (jobtitlesearchinter!='')
                { 
                    query+=" and interviewjobtitle like '%"+jobtitlesearchinter+"%'" ;
                }
        
                 if (intviewernamesearchinter!='')
                { 
                    query+=" and ltts_interviewername like '%"+intviewernamesearchinter+"%'" ;
                }
                if (candinamesearchinter!='')
                { 
                    query+=" and candidatename like '%"+candinamesearchinter+"%'" ;
                }
                if (typeofintserachinter!='')
                { 
                     query+=" and interviewtype like '%"+typeofintserachinter+"%'" ;
                }
                if (modeofintsearchinter!='')
                { 
                    query+=" and interviewmode like '"+modeofintsearchinter+"%' " ;
                }
                if (interviewelocasearchinter!='')
                { 
                    query+=" and location like '%"+interviewelocasearchinter+"%' " ;
                }
             
                if (interlevelsearchinter!='')
                { 
                    query+=" and interviewlevel like '%"+interlevelsearchinter+"'" ;
                }
                if (scheduledinteronseint!='')
                { 
                    query+=" and lttsinterviewdateandtime like '%"+scheduledinteronseint+"%'" ;
                }
                if (statusintersearchinter!='')
                { 
                    query+=" and interviewprofilestatus like '%"+statusintersearchinter+"%' " ;
                }
                if (rescheduledinteronseint!='')
                { 
                    query+=" and interviewrescheduledate like '%"+rescheduledinteronseint+"%' " ;
                }
                if (rearecheduledinterseint!='')
                { 
                    query+=" and reschedulereason like '%"+rearecheduledinterseint+"%' " ;
                }
                if (schedulenextinteronseint!='')
                { 
                    query+=" and interviewnextleveldate like '%"+schedulenextinteronseint+"%'" ;
                }
             
               
        
             
                db.query(query, (err, result) => {
                    if (err) {
                      
                        return res.status(500).send(err);
                       
                    }
                    res.status(200).json(result);
                
                });
            },
        
  
    adsearchprofile: (req, res) => {
       
        //  let Profileid = req.body.Profileid;
      //  let Jobrecidproserach = req.body.Jobrecidproserach;
        let jobreqcodeproserach = req.body.jobreqcodeproserach;
        let Firstnameproserach = req.body.Firstnameproserach;
        let Lastnameproserach = req.body.Lastnameproserach;
        let Emailproserach = req.body.Emailproserach;
        let Mobileproserach = req.body.Mobileproserach;
        let Dobproserach = req.body.Dobproserach;
        let Cityproserach = req.body.Cityproserach;
      //  let Stateproserach = req.body.Stateproserach;
      //  let Countryproserach = req.body.Countryproserach;
        let Experienceproserach = req.body.Experienceproserach;
      //  let Highestqualiproserach = req.body.Highestqualiproserach;
        let Currentjobtitleproserach = req.body.Currentjobtitleproserach;
        let Currentsalaryproserach = req.body.Currentsalaryproserach;
        let Expectedsalaryproserach = req.body.Expectedsalaryproserach;
        let Skillsetproserach = req.body.Skillsetproserach;
     //   let Skypeidproserach = req.body.Skypeidproserach;
        let Noticeperiodproserach = req.body.Noticeperiodproserach;
       // let Currentlocationproserach =  req.body.Currentlocationproserach;
      //  let Desiredlocationproserach =  req.body.Desiredlocationproserach;
        let Statusproserach =  req.body.Statusproserach;
      //  let Resumeproserach =  req.body.Resumeproserach;
     //   let Vendoridproserach =  req.body.Vendoridproserach;
        let Pjobtitleproserach = req.body.Pjobtitleproserach;
        let Psecondskillproserach = req.body.Psecondskillproserach;
      //  let Resignedproserach = req.body.Resignedproserach;
        let Vendornameproserach = req.body.Vendornameproserach;
       // let Createdbyproserach =  req.body.Createdbyproserach;
        let isactiveproserach =req.body.isactiveproserach;



        let query="select p.profileid,p.jobrecid,p.stateid,p.statusid,p.jobreqcode,p.firstname,p.lastname,p.email,p.mobile,p.dob,p.city,p.countryid,p.experince,p.highestqualificationid,p.currentjobtitle,p.currentsalary,p.expectedsalary,p.skillset,p.skypeid,p.noticeperiod,p.currentlocationid,p.desiredlocationid,p.resumename,p.vendorid,p.pjobtitle,p.psecondaryskill,p.Resignation,p.pvendorname,p.createdby,p.createddate,p.isactive,s.status from profiledetails p left join status s on s.statusid=p.statusid where 1=1 and isactive='Y' ";
        //let query="select * from profiledetails p inner join status s on p.statusid=s.statusid  and isactive='Y'";
        // if (Jobrecidproserach!='')
        // { 
        //     query+=" and jobrecid='"+Jobrecidproserach+"'" ;
        // }

        if (jobreqcodeproserach!='')
        { 
            query+=" and jobreqcode like '%"+jobreqcodeproserach+"%'" ;
        }

        if (Vendornameproserach!='')
        { 
            query+=" and pvendorname like '%"+Vendornameproserach+"%'" ;
        }

        if (Firstnameproserach!='')
        { 
          
            query+=" and firstname like '%"+Firstnameproserach+"%' or lastname like '%"+Lastnameproserach+"%' " ;
        }
        if (Lastnameproserach!='')
        { 
         

              query+=" and firstname like '%"+Firstnameproserach+"%' or lastname like '%"+Lastnameproserach+"%' " ;

        }
        if (Emailproserach!='')
        { 
            query+=" and email like '%"+Emailproserach+"%'" ;
        }
        if (Mobileproserach!='')
        { 
            query+=" and mobile like '%"+Mobileproserach+"%'" ;
        }
        if (Dobproserach!='')
        { 
            query+=" and dob like '%"+Dobproserach+"%'" ;
        }
        if (Cityproserach!='')
        { 
            query+=" and city like '%"+Cityproserach+"%'" ;
        }
        if (Experienceproserach!='')
        { 
            query+=" and experince like '%"+Experienceproserach+"%'" ;
        }
        if (Currentjobtitleproserach!='')
        { 
            query+=" and currentjobtitle like '%"+Currentjobtitleproserach+"%'" ;
        }
        if (Currentsalaryproserach!='')
        { 
            query+=" and currentsalary like '%"+Currentsalaryproserach+"%'" ;
        }
        if (Expectedsalaryproserach!='')
        { 
            query+=" and expectedsalary like '%"+Expectedsalaryproserach+"%'" ;
        }
        if (Skillsetproserach!='')
        { 
            query+=" and skillset like '%"+Skillsetproserach+"%'" ;
        }
        if (Noticeperiodproserach!='')
        { 
            query+=" and noticeperiod like '%"+Noticeperiodproserach+"%'" ;
        } 
        if(Statusproserach!='')
        {
            query+=" and status like '%"+Statusproserach+"%'" ;

    }
         if (Pjobtitleproserach!='')
        { 
            query+=" and pjobtitle like '%"+Pjobtitleproserach+"%'" ;
        }
        if (Psecondskillproserach!='')
        { 
            query+=" and psecondaryskill like '%"+Psecondskillproserach+"%'" ;
        }
       
      
       
    
        
        db.query(query, (err, result) => {
            if (err) {
              
                return res.status(500).send(err);
            }
            res.status(200).json(result);
           
        });
    },

    interviewschedulemsg: (req, res) => {

        let editprofileID = req.params.editprofileID; 
        
    
        let query = "call procinterviewschedulemessage('" + editprofileID + "',@output)";
   
    
    db.query(query, (err, result2) => {
    if (err) {
        
        return res.status(500).send(err);
    }
    let query1="SELECT @output as outputmsg";
    db.query(query1, (err, result3) => {
        if (err) {
           
            return res.status(500).send(err);
        }
      
            res.status(200).json(result3);
      
       
        
    });
    
    });
    },


    sendemail: (req, res) => {
        var transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            requireTLS: true,
            
            auth: {
              user: 'indranikaikala@outlook.com',
              pass: 'houston@9900',
            },
            connectionTimeout: 5 * 60 * 1000,
          });
          
          var mailOptions = {
            from: 'indranikaikala@outlook.com',
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text,
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    },

    userroledropdown: (req, res) => {

        let query = "CALL proclookupuserrole()"; // query database to get all the status

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            else {
               
                res.status(200).json(result);
            }
        });
    },

    rolebasevendor: (req, res) => {
       
        //  let Profileid = req.body.Profileid;
        let vendorid = req.body.vendorid;
        let vendorrequirmentid = req.body.vendorrequirmentid;
        
       

        let query = "call procinsertreqbyvendor('" + vendorid + "', '"+vendorrequirmentid+"',@output)";
           
       
        
        db.query(query, (err, result2) => {
            if (err) {
               
                return res.status(500).send(err);
            }
            let query1="SELECT @output as outputmsg";
            db.query(query1, (err, result3) => {
                if (err) {
               
                    return res.status(500).send(err);
                }
              
                    res.status(200).json(result3);
              
               
                
            });
            
            });
    },


    avanirequirementisting: (req, res) => {
       
        //  let Profileid = req.body.Profileid;
       let vendorroleid = req.params.vendorhiddenid;
     
        let query = "call proclistrequirementsbyvendorrole('"+vendorroleid+"')";
           
      
        
        db.query(query, (err, result) => {
            if (err) {
              
                return res.status(500).send(err);
            }
            res.status(200).json(result);
           
        });
    },


}







