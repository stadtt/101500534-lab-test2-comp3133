# 101500534 Lab Test 2 (COMP 3133)

Harry Potter themed Angular application for listing characters, filtering by house, and viewing character details using the HP API.

## Features

- View full Harry Potter character list
- Filter characters by house
- View character details by name
- Deployable with Docker and Vercel

## API Endpoints Used

- Character list: https://hp-api.onrender.com/api/characters
- Characters by house: https://hp-api.onrender.com/api/characters/house/
- Character details by name: https://hp-api.onrender.com/api/characters/name/

## Run Locally

1. Open a terminal in the project root.
2. Move into the Angular app folder:
   ```bash
   cd 101500534-labtest2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   ng serve
   ```
5. Open http://localhost:4200

## Docker

```bash
cd 101500534-labtest2
docker build -t hp .
docker run -d -p 4200:4200 hp
```

## Vercel Deployment

https://101500534-lab-test2-comp3133-cj79.vercel.app/

## Screenshots

### Main Character List

![Main Character List](Screenshot%202026-04-08%20141257.png)

### Character List (Filter By Gryffindor)

![Character List Alternate](Screenshot%202026-04-08%20141307.png)

### Character Details


![Additional View](Screenshot%202026-04-08%20141335.png)
