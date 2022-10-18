<h1 align="center">The Registry</h1>

![The Registry](https://user-images.githubusercontent.com/107587452/196089579-04c183a2-0800-41ca-895b-f03dee36b280.jpeg)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Issues](#issues)
- [User Story](#user_story)
- [Acceptance Criteria](#acceptance_criteria)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Github](#github)
- [Deployed Links](#deployed_links)
- [Credits](#name#github#email)

## Description

Our task is to create a simple application that allows the Recipient to provide friends and family members with a gift registry that provides the opportunity for the Gifter to give a dollar amount gift with a credit card.  The Gifter gives their gift along with their name, email, and a message for the Receiver.   

This application will use custom databases to provide updated Gifter data, and a secure credit card processing service.

## Installation

npm install

## Issues

There are no issues at this time.

## User Story

AS an average Joe with an important upcoming event
<br/>
I WANT to share my gift registry with my friends and family members
<br/>
SO THAT I can provide a list of gift ideas and links to the retailers
<br/>
I WANT to also add the option to just give a dollar amount with a credit card
<br/>
SO THAT my friends and family members have both options

## Acceptance Criteria: Recipient

GIVEN I am using the application "The Registry"
<br/>
WHEN I open the application
<br/>
THEN the webpage is displayed in the browser
<br/>
WHEN I click on the Login/register button
<br/>
THEN I am presented with a Login/Register form
<br/>
WHEN I enter my username and password in the Register form
<br/>
THEN I am logged in and directed back to the Homepage
<br/>
WHEN I click on Setup New Registry
<br/>
THEN I can choose the type of Registry and make it available to my friends and family members
<br/>

## Acceptance Criteria: Gifter

GIVEN I am using the application "The Registry"
<br/>
WHEN I open the application
<br/>
THEN the webpage is displayed in the browser
<br/>
WHEN I type the "Registry Name" in the Search for Registry field and click the Search button
<br/>
THEN I am presented with the Registry page
<br/>
WHEN I click on the "Give Money" button
<br/>
THEN I am presented with the "Give Money" input form
<br/>
WHEN I enter my name
<br/>
THEN I am directed to the next line
<br/>
WHEN I enter my Email
<br/>
THEN I am directed to the next line
<br/>
WHEN I enter a Message
<br/>
THEN I am directed to the next line
<br/>
WHEN I enter my credit card information via "Stripe"
<br/>
Then I can enter a dollar amount to give

## Usage

The Recipient can login/register on "The Registry" webpage.  During the login/register process, the Recipient will select a Wedding Registry, a Graduation Registry, or a New Baby Registry.  The Recipient can include links to retailers that they have already registered at on the Registry page of their choice.  The Recipient can then include their Registry information in the traditional announcements or invitations. 

The Gifters can search for the Registry on the webpage.  When the Gifters reach the Registry page for their friend or family member, they can click on the links to the retailers and/or they can give a dollar amount gift with a credit card.  If the Gifter chooses to give a dollar amonut gift, they can enter the following information: Name, Email, add a Message, and enter their credit card information via "Stripe".

The Gifters information is then available to the Recipient.  The Recipient can use this information to help with writting thank you cards.

The Gifters information is then available to the Receiver. The Receiver can use this information to help with writting thank you cards.

## License

![badge](https://img.shields.io/badge/license-Apache-blue)
<br />
This application is covered by the Apache license.

## Contribution

Contact any of us, by email, with any thoughts or questions.

## Tests

npm test

## Github

Link to our Github repository:
<br/>
https://github.com/kaelinpsalazar/The-Registry

## Deployed Links:

https://whispering-coast-62095.herokuapp.com/


## Credits

Sophie Lebron&emsp;&emsp;&emsp;github.com/sclebron&emsp;&emsp;&emsp;&emsp;&emsp;sophieclebron@gmail.com
<br/>
Thomas Boileau&nbsp;&emsp;&emsp;github.com/tommybspeed&nbsp;&emsp;&emsp;TommyBspeed@gmail.com
<br/>
Dylan Griess&emsp;&emsp;&emsp;&emsp;github.com/dylangriess&nbsp;&nbsp;&emsp;&emsp;&emsp;dylangriess@gmail.com
<br/>
Matthew Flug&nbsp;&nbsp;&emsp;&emsp;&emsp;github.com/mattflug&emsp;&emsp;&emsp;&emsp;&emsp;mbflug@gmail.com
<br/>
Trystan Button&emsp;&emsp;&emsp;github.com/trystan333&emsp;&emsp;&emsp;&emsp;trystan@hey.com
<br/>
Kaelin Salazar&nbsp;&emsp;&emsp;&emsp;github.com/kaelinpsalazar&nbsp;&nbsp;&emsp;&emsp;kaelinpsalazar@gmail.com
<br/>
Christopher Boyle&nbsp;&nbsp;&emsp;github.com/timberhead&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;timberhead1121@gmail.com
<br/>
<br/>
<br/>

<h3 align="center">This README was generated with ❤️ by fine folks at the-registry</h3>
