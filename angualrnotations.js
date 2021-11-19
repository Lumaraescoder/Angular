To make request in angular is interesting create a service to serve our app instead of fetch on the component
Services cam be connected beetweem them

Angular only binds to public component properties.

use routers in app module is a best pratices
add by adding a Add the AppRoutingModule

like
ng generate module app-routing --flat --module=app
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.
// and imports router outlet
Remmember app.component.html will server as  a spa :D
