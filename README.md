# Dependency Management

Install all build dependencies and front-end assets of the project:

    npm install

# Start the application

    npm start
    
Then go to `http://localhost:5678`

# Create the production build (linting, asset processing)

    npm run build
    npm run serve:prod
    
Then go to `http://localhost:5679`.  
Inspect the result in `dist`.
    
# Run the Unit Tests

    npm run test

or:

    npm run test:jest
    
or:

    npm run test:karma


# Run the End-to-End Tests

Install selenium locally in your project:

	npm run selenium:install
	
This runs the command `webdriver-manager update` from within your `node_modules/.bin` which downloads the Selenium server and Chrome driver into `node_modules/protractor/selenium`.

Now open three terminals:


### 1. Run the selenium server

	npm run selenium:run 
	
This calls the command `webdriver-manager start` from within your `node_modules/.bin`, which starts the Selenium server.


### 2. Serve the app run the protractor test

	npm serve
	

### 3. Run the protractor tests

	npm run e2e
	
This  runs the command `protractor src/e2e/protractor.conf.js` from within your `node_modules/.bin`.
