# Setup

- npm install
- npm run start:testapp (localhost:4400)

The goal is to generate the "master-lib" library that exposes all the other libraries.

I might be using the wrong approach here... I do not know honestly.
If there is a way to create one package and expose the libs like:

@my-lib/lib1
@my-lib?lib2

That would be great as well, but I have no idea how to do this.

I also noticed that setting up: `implicitDependencies` in `nx.json` file also has an effect.

Currently we run `npm run build:local` to do a local build and on our jenkins `npm run build:jenkins` is being executed. 

If you could give some advice on how to deal with this kind of approach that would be super awesome!
