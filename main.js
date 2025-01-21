const express = require( 'express' );
const axios = require( 'axios' );
require( 'dotenv' ).config();
const OpenAI = require( "openai" );
const AI = new OpenAI();

const app = express();
const PORT = process.env.PORT || 5000;

app.use( express.json() );


app.post( '/api/chat', async ( req, res ) => {

  return res.json( { response: req.body.message } );
} );

app.listen( PORT, () => console.log( `Server running on http://localhost:${PORT}` ) );
