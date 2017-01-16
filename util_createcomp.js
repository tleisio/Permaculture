// This is a utility script that automates new component creation.
// 1. Creates new folder in "public\js\components" called [component-name]
// 2. Copies "component-boilerplate" files into the new folder and renames with [component-name]
// 3. Edits "component-boilerplate.js" to reference appropriate [component-name]
// 4. Inserts new KO component registration; insertion point based on [isPageComponent]
/*
	USAGE
	node util_createcomp.js [component-name] [isPageComponent]

	EXAMPLES
	node util-createcomp.js page-mynewpage true
	node util-createcomp.js list-plants false
*/
const fs = require('fs');

var hasComponentName = false;
var isValidPageComponentArg = false;
var isPageComponent = false;
var localDir = process.argv[1];
var componentName = process.argv[2];

console.log(localDir);

if (process.argv[3] == 'true' || process.argv[3] == 'false') {
  isValidPageComponentArg = true;
  isPageComponent = Boolean(process.argv[3]);
} else if (process.argv[3] == null) {
  isValidPageComponentArg = true;
} else {
	console.log('Error: Must enter "true" or "false" for specifying page component. Try again.');
}

// Check for component name
if (componentName && isValidPageComponentArg == true) {
	if (componentName == "-h" || componentName == "-help") {
		console.log('---');
		console.log('This is a utility script that automates new component creation.');
		console.log('1. Creates new folder in "public/\js/\components" called [component-name]');
		console.log('2. Copies "component-boilerplate" files into the new folder and renames with [component-name]');
		console.log('3. Edits "component-boilerplate.js" to reference appropriate [component-name]');
		console.log('4. Inserts new KO component registration; insertion point based on [isPageComponent]');
		console.log('---');
		console.log('USAGE');
		console.log('node util_createcomp.js [component-name] [isPageComponent]');
		console.log('');
		console.log('EXAMPLES');
		console.log('node util-createcomp.js page-mynewpage true');
		console.log('node util-createcomp.js list-plants false');
		console.log('---');
	} else {
		console.log("Creating new component with the name of: " + process.argv[2]);
		createNewFolders();
	}
} else {
	console.log("Error: Must specify new component name or invalid page component specification. Try again.");
}

function createNewFolders() {
	console.log("creating new folders...");
	fs.mkdir('./public/js/components/'+componentName, function(err) {
    if (err) throw err;
    copyAndRenameBoilerplateHtml();
  });
}
function copyAndRenameBoilerplateHtml() {
	console.log("copying and renaming boilerplate html...");
	
  fs.readFile('./public/js/components/component-boilerplate.html', 'utf8', function(err1,data1) {
    if (err1) throw err1;
    fs.writeFile('./public/js/components/'+componentName+'/'+componentName+'.html', data1, function(err2) {
      if (err2) throw err2;
      copyAndRenameBoilerplateJs();
    });
  });
}
function copyAndRenameBoilerplateJs(_data) {
  console.log("copying and renaming boilerplate js...");

  fs.readFile('./public/js/components/component-boilerplate.js', 'utf8', function(err1,data1) {
    if (err1) throw err1;
    fs.writeFile('./public/js/components/'+componentName+'/'+componentName+'.js', data1, function(err2) {
      if (err2) throw err2;
      editNewComponentJs();
    });
  });
}

function editNewComponentJs() {
	console.log("editing new component js file with appropriate name...");
	
  fs.readFile('./public/js/components/'+componentName+'/'+componentName+'.js', 'utf8', function(err1,data1) {
    if (err1) throw err1;
    var editedData = data1;
    var re1 = /component-boilerplate/gi;

    // Find "component-boilerplate" and change to componentName
    editedData = data1.replace(re1, componentName);

    // Rename all instances of ComponentBoilerPlateVM with similar formatted name for componentName
    var arrViewModelName = componentName.split('-');
    var capitalizedWord1 = arrViewModelName[0].charAt(0).toUpperCase() + arrViewModelName[0].substr(1,arrViewModelName[0].length);
    var capitalizedWord2 = arrViewModelName[1].charAt(0).toUpperCase() + arrViewModelName[1].substr(1,arrViewModelName[1].length);
    var viewModelName = capitalizedWord1 + capitalizedWord2 + 'VM';
    var re2 = /ComponentBoilerPlateVM/gi;
    editedData = editedData.replace(re2, viewModelName);

    // Write the file
    fs.writeFile('./public/js/components/'+componentName+'/'+componentName+'.js', editedData, function(err2) {
      if (err2) throw err2;

      // Move along... move along.
      insertNewKoComponentRegistration();
    });

  });
}
function insertNewKoComponentRegistration() {
	console.log("inserting new KO component registration...");
	
  var insertionPoint, strInsertionPoint;
  if (isPageComponent == true) {
    insertionPoint = /\/\/ !#page-insertion-point-above/;
    strInsertionPoint = '// !#page-insertion-point-above';
  } else {
    insertionPoint = /\/\/ !#component-insertion-point-above/;
    strInsertionPoint = '// !#component-insertion-point-above';
  }

  fs.readFile('./public/js/app.js', 'utf8', function(err1,data1) {
    if (err1) throw err1;
    var editedData = data1;
    var replaceString = "ko.components.register('" + componentName + "', {require: 'components/" + componentName + "/" + componentName + "' });" + "\n\t" + strInsertionPoint;

    editedData = data1.replace(insertionPoint, replaceString);

    fs.writeFile('./public/js/app.js', editedData, function(err2) {
      if (err2) throw err2;
      console.log("New component created!");
    });
  });
}
