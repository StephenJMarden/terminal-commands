const   terminalCommands = require('./terminal-commands');

terminalCommands.ls();
terminalCommands.mkdir('TestDir');
terminalCommands.touch('Testfile.txt');
terminalCommands.ls();
