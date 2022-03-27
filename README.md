# med-guide-record

**Med Guide Record II (beta) is a new app that acts as a search engine for locating Optum Specialty Pharmacy medication specs and instructions for correct call routing and handling. It is an effective workaround to use when the primary tool (Macro Express Pro) does not function.

This app serves as the capstone project for the Code Louisville Front End Web Development 2: JavaScript course.**

##BACKGROUND

This project was conceived as a potential solution to routine issues encountered in accessing the current Med Guide Record that is generated through the Macro Express Pro macro.

![alt text](https://github.com/American-Tahiti/med-guide-record/blob/main/MacroExpress.PNG)

.Enumerated below are the two main issues we routinely encounter in using the current tool for accessing the Med Guide Record, along with an explanation of how these issues impact workflow:

1. Offshore Patient Care Coordinators (PCCs) somehow have a different (outdated) version of the Med Guide Record.

- Because Offshore PCCs are using an older version, their handling of calls for Rx refill requests is frequently incorrect for certain medications.

- Offshore PCCs have informed our team that they are using the same Macro Express Pro version (v1.5), although they have shared screenshots of the Med Guide Record contained therein that do not match the information we see when generating the Meg Guide Record for the same medication.

- The consequence of these misrouted calls includes unnecessary (sometimes multiple) call transfers that oftentimes confuse and sometimes annoy patients/customers.

2. Getting Macro Express Pro to load is hit-or-miss and time consuming. To get it function, the macro must be terminated and relaunched a second time. It loads extremely slowly, going through a multi-step process to get to the needed information.

- Oftentimes, a patient/customer, medical office representative or third party payer is waiting on the line while the person receiving the call is trying to get Macro Express Pro to launch.

- The same macro is used to look up medication allergies inside the IRIS SP Info portal, and the same problem of inability to generate information in a timely manner is encountered therein.

- Team members on our team (Multiple Sclerosis Therapy Solutions) routinely use team chat to ask if someone can check on which department handles a particular drug (in order to properly re-route a misrouted call). Everyone is supposed to have access to this information, but because the macro is unreliable, many team members oftentimes have to rely on others whose macro may be working.
 

##TECHNICAL DETAILS

Med Guide Record (beta) as a capstone project for the Front End Web Development 2: JavaScript course fulfills the following technical requirements:

- [ ] demonstrates a good understanding of JavaScript, its methods and implementation
- [ ] uses responsive web design, to include:
- media queries
- CSS Flexbox
- [ ] is uploaded to GitHub repo with a minimum of five (5) unique commits
- [x] contains a .README file
- [ ] reads and parses an external file into my app and displays data in my app from the external (.csv) file
- [ ] contains a form with a submit button that saves input to an external file (and shows where the info is stored)
- [ ] contains an array, dictionary or list that is populated with multiple values, retrieves at least one value and displays it in the application
- [ ] implements a log that records invalid inputs and writes them to a text file 
