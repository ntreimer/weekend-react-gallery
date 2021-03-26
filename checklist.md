### PHASE 1 SETUP
- [ ] npm init
- [ ] install nodemon globally with "npm install nodemon --global"
    -will automatically spin back up both client and server side when using
- [ ] npm
    -install
    -run server
    -in a new terminal run client
- [ ] add photos to /public/images
    - [ ] modify server/modules/data to include id, title, description, and path for each image
- [ ] create and source components
    - [ ] App (overall application)
    - [ ] GalleryList (represents gallery of images)
    - [ ] GalleryItem (represents single image in gallery, gives ability to toggle image description
    and ability to like the image)
- [ ] setup DOM skeleton with fake elements
- [ ] 
- [ ]


### PHASE 2 PATHING/DATA TRANSFER
- [ ] use axios to retrieve GET data from /gallery and store it in App
- [ ] pass gallery data from App to GalleryList via props
    - [ ] iterate (map) the list of gallery data
    - [ ] pass gallery to Items via props
- [ ] images should be same dimensions
- [ ] images should show description instead on click
    - [ ] conditional rendering
- [ ] display number of likes for each item and include a like button
    - [ ] on like click, update number of likes (PUT)
    - [ ] update gallery upon like
- [ ] 
- [ ]


### PHASE 3 STRETCH
- [ ]
- [ ]


### DEPLOYING/COMMENTING/POLISHING
- [ ] deploy to heroku
- [ ] update readme
    - include screenshot(s)
    - where it is deployed
- [ ] add comments
- [ ] check indentation, semi-colons, commas etc.