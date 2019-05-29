# HOW TO (Developer) :
* Good links explaining how library works:
https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5
https://medium.com/@faxemaxee/building-and-publishing-angular-libraries-using-angular-cli-140057d21101
https://github.com/angular/angular-cli/wiki/stories-create-library
https://medium.com/consonance/building-an-angular-library-with-the-angular-cli-version-6-384ee85933ad
https://github.com/angular/angular-cli/issues/10869

* How to create a new library in SBNG:
  * Open terminal
  **ng generate library sb-components --prefix=sb**
  In package.json add private = true to avoid publish in npm
  Prefix will be used for every component created later
  * To create a new component in the library
  **ng generate component workbench/footer --project=sb-components --styleext=scss**
  Prefix will make the component to use sb-footer instead of default lib-footer
		
* To build the library in SBNG and test locally
**npm run sb_components_build**
This run will :
	- Build the component
	- Copy the global styles in the dist folder
	- Copy the assets in the dist folder
	
* To package the library and to test it in the sample project
**npm run sb_components_package**
This run will :
	- Make the build steps
	- Package the library in a tgz file
In sample, when generating several times the same tgz, cache will return always the old object. To force th euse of the new generated tgz, use this:
**npm install --force sb-components**
	

# TODO:
* When DMSI creates the repo in JFROG look at this:
https://www.jfrog.com/confluence/display/RTF/Npm+Registry
Helps to create a Virtual respository that can search packages in several repos (not possible otherwise)

	
# HOW TO (End user) :
When using the sb-components library, the project must follow and respect the following pre-requisites :

* Pre-requisite:
	- Define a material palette as explained by Google
	TODO: Add URL

* Install:
	- **npm install sb-components** (to review when Jfrog is ready)
	- In "**app.module.ts**", import "**SbComponentsModule**"
	- In "**style.scss**", add these after the material theme initialization:
```xml
// import Sopra Banking scss
@import 'sb-components/style/sb-theme.scss';
@include sb-theme($sb-theme);
```
Where "$sb-theme" is the variable representing the generated material theme (ex: 
$sb-theme: mat-light-theme($sb-theme-primary, $sb-theme-accent, $sb-theme-warn);)
