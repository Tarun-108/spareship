# Spareship (Ode2Code 3.0)
Developed an automated Spare Part Planning, Visibility, and Assignment tool (Mobile and PC) for aftersales
stakeholders which include Planning, Warehouse, Service Centres, and Customer Support teams. The tool
will help capture the spare parts requirements for each service center and prepare a summarized material
dispatch plan for the spare part planning team, warehouse team, and customer support team.
## User types and their use-cases
1) Service centers
   - Create Job Sheets for customer
   - Diagnosed the device and identify the parts requirements
   - If a part is available, consume the part and complete the repair
   - If a part is not available, send a part request and wait for the parts to be delivered
3) Planning Team
   - Identify daily part requirements from service centers across India
   - Check part availability across WHs in India
   - Prepare a material dispatch plan and share it with the Warehouse team
4) Warehouse Team
   - Dispatch material to service centers across India based on the material dispatch plan shared
by the Planning team
5) Customer support
   - Address customer queries about device repair orders
  
## Tech Stack used
- For Backend: Java with Spring Boot Framework
- For Frontend: ReactJs, HTML, Tailwind CSS


## Presentation

### Requirement Analysis (ER Diagram)
![Untitled Diagram drawio](https://github.com/Tarun-108/spareship/assets/79051562/724f61f0-77c7-416f-97a8-af1eb23a6875)

### Data of the Database
DB Data (https://github.com/Tarun-108/spareship/tree/ecbf1d83e9fbdf7bdb48e8fe26ec18ffb4e70cbe/dbData)

### EER Model of the Database
![eer_spareship](https://github.com/Tarun-108/spareship/assets/76252839/95dfbaca-34ff-453b-9a12-6b5f5083d1a8)


### Detailed PPT
I've attached additional details about the implementation of the solution. The presentation contains the ER diagram describing the relations in the database and the workflow diagram of the web app:

https://www.canva.com/design/DAFwqZaIGkc/_BlJEoLrc2h5HgzoInWBCw/view


## Working Demo


https://github.com/Tarun-108/spareship/assets/76252839/11bf29cf-0ac1-4140-9b95-4e233fa3bd31



# Installation

- Clone the GitHub repository.
- Launch the MySQL Console
- Import the data from the **dbData** folder using the MySQL Console
- Open the folder **spareship_backend** using IntelliJ or any preferred IDE
- Make sure you have the appropriate JDK present on the machine to launch the project
- After launching the project, paste the following in resources/application.properties
````
   app.name=SpareShip
   app.version=v1
   server.port=5000
   spring.datasource.url=<your-db-link>
   spring.datasource.username=<your-username>
   spring.datasource.password=<your-password>
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
````
- Build and launch the project; On successfull execution the server is listening to **localhost:5000/**
- Now Open **spareship_frontend** in Webstrom or VsCode or any other preferred IDE of your choice. 
- Finally, getting started with Create React App
    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Open the terminal inside the project folder.
- Run `npm install` to install the desired packages.
- Run `npm start`.

It runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Test Credentials

- Service Center
````
   email: servicecenter1@spareship.in
   password: password1
````
- Warehouse
````
   email: warehouse1@spareship.in
   password: passwordw1
````
- Planning Team
````
   email: planningteam@spareship.in
   password: passwordp1
````
- Customer Support
````
   email: customersupport@spareship.in
   password: passwordc1
````




