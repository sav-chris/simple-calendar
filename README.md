
# Very Simple Program to display a calendar

Using FullCalendar 

## Dependencies 

[Docker](https://www.docker.com/)

On Windows
```powershell
winget install -e --id Docker.DockerDesktop
```

## Install and run

```powershell
git clone https://github.com/sav-chris/simple-calendar.git
```

Copy your calender [ics file](https://en.wikipedia.org/wiki/ICalendar) to the folder `./public/data/calendar.ics`

To Run 

```powershell
docker compose up
```

Navigate your browser to [http://localhost:3000](http://localhost:3000)

