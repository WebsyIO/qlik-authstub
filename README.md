# Qlik Authstub example for Authenticating Users

### Setup
Upload the `authstub.html` file into your Qlik Content Library in the QMC. Ideally to the `Default` folder. If you upload to a different folder you will need to modify the code in the `index.html` file accordingly (line 40)

Update the `config` object in the `index.html` file on line 28 to point to your Qlik server, app and Virtual Proxy. The proxy values should be preceded by a `/`. If connecting via the default virtual proxy then the value should be `'/'`.

Install the project dependencies
```
npm install
```

Run the project
```
node index
```

Open a browser and navigate to http://localhost:4000