# GROUP PROJECT 2
_Project "Take Off" - Airline Data Dashboard_
_James Bruhns, Jason Peterson, Patrick Rodeman, Michelle Trujillo_

## Table of contents

-  File Guide
-  Proposal
-  Data
    - Extract
    - Transform
    - Load
-  Dashboard Creation
-  Post Mortem
    -  Lessons Learned
    -  Further Exploration


## File Guide

- README.md  >  Project proposal and project report.
- Dashboard_mockup.jpg  >  The intended final dashboard layout.
- csv_cleanup.ipynb  >  Notebook used to merge airline CSVs and clean data.
- flight_db_sql.ipynb  >  Notebook used to merge all CSV files.
- flights.sqlite  >  SQLITE database.
- index.html  >  HTML for final dashboard.
- Resources
    - CSV  >  All CSV files for individual airlines and airports.
    - JSON  >  JSON files for flight data and geography data.
- Static
    - CSS  >  Style for final dashboard.
    - JS > JavaScript files for final dashboard components and logic.

## Proposal

Our goal was to build an analytical tool for travel/departure time with variable/selectable airports/airlines.

_Rationale_ 

Nobody likes long flights or unreliable airlines, so we wanted to build a tool that quickly displays data related to travel time that allows users to gain an overview of how each stacks up. We want our tool to do the following:
    - Display duration of travel(air) time per airline from one given airport to another
    - Display historical trends of travel time by selectable airline/airport
    - Display summary statistics of relevant metrics

_Data Sets_

We planned to use CSVs available from the United States Department of Transportation's website (https://transtats.bts.gov/ONTIME/Index.aspx).

_Project Track & Stack_

Our final result will fall into the creative D3 visualization category. We plan to use libraries such as plotly or leaflet to build multiple views of the data. We intend to build a dynamic dashboard that builds multiple views from the same data. We will also be using a Python server, sqlite database, html, css, js, and our dashboard will be deployed in GitHub pages.
    * See "Dashboard_mockup.jpg"

_List of Airlines_
American
Alaska
Delta
Southwest
United

_List of Airports_
ATL  /  LAX  /  ORD  /  DFW  /  DEN  /  JFK	
SFO  /  SEA  /  LAS  /  MCO  /  PDX

## Extract, Transform, Load

_Extract_
The United States Department of Transportation does not have an API available to developers. Because of this, we had to extract the data manually by downloading individual spreadsheets for each airline and aiport. We also decided to extract a five year period of data. At the end of the extraction phase, we had 52 CSV files.

_Transform_
We merged each airline into it's own larger file. We also added missing Origin Airport data. We then merged the CSVs into a larger CSV for each airline using the Pandas concatenate function. After this, we created another Jupyter notebook that would consolidate the larger files, add and index, and clean the data further. Because of reasons explained in the "Load" portion of the ETL process, we decided to limit our scope to one year and drop uneeded columns. Because the date was stored as text, to drop all years except 2019 we had to use the "LIKE" fuction in SQL on the date column. We also dropped all columns except for carrier code, date, destintion airport, departure delay, and origin airport.

_Load_
To load the data, we decided to use a sqlite database. Because of our original scope of data for five airlines, across five years, and for eleven airports, our database contained 2.4 million rows of data and resulted in a file size of 217MB, far above the maximum limit of 100MB per GitHub. After condensing the data to only 2018 (full year) data and removing unneeded columns, the database ended up at 496 thousand rows of data and resulted in a file size of 38KB. We then jsonified the data.

## Dashboard Creation

_HTML/CSS/etc._ 

_Calendar View_

_Graphs_

## Post Mortem

_Lessons Learned_

_Further Exploration_
If we had more time on this project, we would have liked to add a delay classification to display the percent of delays due to weather, late aircraft arrival, etc. We would also have like to explore flights over multiple years to observe trends and identify seasonality.
