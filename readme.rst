Weir
====

What is it?
-----------

Weir is a simple, self-hosted RSS reader written in Node. It is written
via the principle of *do the least amount necessary*, which means that
it works very well for my priorities. Your own mileage may vary.

What does it do?
----------------

I have a lot of feeds, but I read very few of them in depth, and I never
share or store any of them. My RSS workflow is almost exclusively
limited to skimming through a list of items, reading a few, marking
everything as read, and moving on. Weir is optimized for this workflow.
It's also intended to work equally well on mobile and desktop.

What doesn't it do?
-------------------

Weir is intentionally stripped down. It will (probably) never support
these features.

-  Retain extensive archives
-  Provide social features, like sharing or commenting
-  Filtering on tags or categories
-  Offline mode

What's still missing?
---------------------

At this stage, Weir is sufficient, but not fully fleshed out. There are
still plans to add the following features:

-  Multiple database support
-  Visual coloring based on tags

Also, a number of the features are intentionally built with the minimum
degree of functionality (see also: worse is better). These will need to
be rebuilt at some point, but they are fine for what it does now.

-  The router accepts only strings and matches them precisely, because
   JavaScript's regex model is a wasteland lacking named groups and I
   haven't gotten around to copying in my routing code from Grue.
-  The Database layer executes SQL directly, instead of going through a
   builder like it probably should.
-  There is no migration plan, because Weir stores almost nothing that's
   not ephemeral or able to be recreated given fifteen minutes and a
   decent Internet connection.
-  Everything gets hosted at the root of the server, using a
   user-selected port to keep from colliding with regular web services.
   This is because I personally run all my sites from a single VM. You
   may need to reverse-proxy Weir in production.

Requirements
------------

-  NodeJS
-  PostgreSQL (other DB types coming)

Installation Instructions
-------------------------

1. Clone this repository into a directory. It can be anywhere--Weir
   hosts its own server on a unique port, so it doesn't need to be
   available to your Apache or Nginx installation.

2. Install Weir's dependencies using NPM. If you have Node installed,
   you should already have NPM, so navigate to the Weir directory and
   type the following command:

   ::

       npm install

3. Create a Postgres database, using the createdb command.

4. Copy the cfg-example.json file to cfg.json, and edit it to fill in
   your database information (type should be "postgres"), as well as
   some other configuration options. I recommend having an
   updateInterval of 15 (it's in minutes) and a expirationDate of 30
   (it's in days).

5. Kick off the Weir process with the following command, which will
   build the client-side files and start the HTTP server. Just leave it
   running--you may want to do this from a tmux window or as a bash job.

   ::

       npm start

6. Open a browser to the server/port combination where you're running
   Weir. For example, if my cfg.json set the port to 8080, I would visit
   "http://example.com:8080". Click the & icon on the right to open the
   options menu, and upload an OPML file to import your subscriptions
   (Google Takeout delivers this as "subscriptions.xml"). Then just
   start reading! It will take Weir a little time to pull all your
   subscriptions, but it'll be done by the amount of time you set in the
   configuration as updateInterval.

7. File bugs, issues, and patches here to make Weir better! Thanks for
   your help!

What's with the name?
---------------------

A weir is a type of dam intended to direct streams of water. They
prevent flooding and allow engineers to measure the flow of water, and
they are smaller than other dam types. Considering that this program is
intended to direct the flow of information with the minimum amount of
construction, it seemed appropriate.

Why Weir instead of other services?
-----------------------------------

If you're happy using a subscription or free service, go for it. In the
wake of the Reader shutdown, I'm personally wary about relying on other
people's servers.

License
-------

Weir is licensed under the GPL because I'm a filthy socialist. Make
yourself at home.
