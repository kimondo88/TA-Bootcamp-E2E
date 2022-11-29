# TA-Bootcamp-E2E

Developed E2E automated JS tests for https://www.newegg.com

# HOW TO INSTALL PROJECT

Ensure that you have node, git, npm or yarn installed.

Type in command line, or terminal

in windows search cmd or powershell in search bar, in linux use terminal

> node --version
>
> git --version
>
> npm --version
>or
> yarn --version

If one of those conditions aren't meet then:

#1 Install [Node](https://nodejs.org/en/download/) from here

#2 Install [Git](https://git-scm.com/downloads) from here

#3 Npm comes with node, but yarn need to be enabled for use.

for installing yarn check above command node --version

>for node.js >=16.10
>
>Corepack is included by default with all Node.js installs, but is >currently opt-in. To enable it, run the following command in terminal or cmd:
>
>corepack enable


> for Node.js <16.10
>
>Corepack isn't included with Node.js in versions before the 16.10; to address that, run:
>
>npm i -g corepack

Now you should have prerequisites installed.

## **Installation**

Open terminal or cmd. Navigate to folder where you want to install.

#1 run in cmd or terminal
>git clone https://github.com/kimondo88/TA-Bootcamp-E2E.git

when using ssh keys
>git clone [git@github.com:kimondo88/TA-Bootcamp-E2E.git](git@github.com:kimondo88/TA-Bootcamp-E2E.git)

if you have no ssh keys: check
[adding ssh keys to agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

after running git clone from above.

#2 run in cmd or terminal
>npm install 

or 

>yarn install 

## **Running tests:**

And now you can run tests with the following command in cmd or terminal when in project folder path

>yarn test 

or 

>npm test

## That's it, you have project installed! 

