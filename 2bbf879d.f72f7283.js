(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(1),o=n(9),i=(n(0),n(307)),r={id:"configuration",title:"Configuration Options"},p={id:"configuration",title:"Configuration Options",description:"Our tooling supports the following types of configuration:",source:"@site/../docs/configuration.md",permalink:"/docs/configuration",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/configuration.md",lastUpdatedBy:"delenius",lastUpdatedAt:1615027206,sidebar:"docs",previous:{title:"Global Properties",permalink:"/docs/globals"},next:{title:"File post-processing",permalink:"/docs/file-post-processing"}},l=[{value:"Tool-specific Declarations",id:"tool-specific-declarations",children:[]},{value:"Discovering Options",id:"discovering-options",children:[]}],s={rightToc:l};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Our tooling supports the following types of configuration:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/globals"}),"global properties"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"properties with cross-cutting concerns which control generation, but  ",Object(i.b)("em",{parentName:"li"},"don't")," belong to individual generators"),Object(i.b)("li",{parentName:"ul"},"Example: ",Object(i.b)("inlineCode",{parentName:"li"},"debugSupportingFiles")," prints the contents of template data bound to supporting files"))),Object(i.b)("li",{parentName:"ul"},"config options",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"configuration specific to each individual ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/generators/README"}),"generator")),Object(i.b)("li",{parentName:"ul"},"these options are susceptible to validation within the defining generator; a config option of the same name across multiple generators may be validated differently in each"),Object(i.b)("li",{parentName:"ul"},'NOTE: The CLI accepts config options as "additional properties"'))),Object(i.b)("li",{parentName:"ul"},"additional properties",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"these are the properties which will be passed to templates"),Object(i.b)("li",{parentName:"ul"},"generally used to pass user-defined properties to custom templates"),Object(i.b)("li",{parentName:"ul"},"many config options may also be passed as additional properties, however generators will read/modify/rewrite config options"),Object(i.b)("li",{parentName:"ul"},"users may pass custom additional properties and use these within templates (e.g. a custom ",Object(i.b)("inlineCode",{parentName:"li"},"generatedBy")," key with a value of ",Object(i.b)("inlineCode",{parentName:"li"},"Jim Schubert")," for inclusion in a custom CVS-like header)"))),Object(i.b)("li",{parentName:"ul"},"top-level properties specific to individual tools/plugins used to bootstrap our tooling")),Object(i.b)("h2",{id:"tool-specific-declarations"},"Tool-specific Declarations"),Object(i.b)("p",null,"The READMEs for the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://openapi-generator.tech/docs/usage#generate"}),"CLI"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-gradle-plugin"}),"Gradle Plugin"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-maven-plugin"}),"Maven Plugin"),", and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/sbt-openapi-generator/blob/master/README.md"}),"SBT Plugin")," may have top-level or tooling specific options which appear to duplicate 'config options' or 'global properties'. Each may also expose user-facing properties slightly differently from the other tools. This may occur due to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Conventions used by the underlying tooling"),Object(i.b)("li",{parentName:"ul"},"Limitations in underlying frameworks which define how properties must be declared"),Object(i.b)("li",{parentName:"ul"},'Continuation of support for "legacy" invocation patterns'),Object(i.b)("li",{parentName:"ul"},"Mistakes in documentation and/or contributions (please do ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/OpenAPITools/openapi-generator/issues/new?assignees=&labels=Issue%3A+Bug&template=bug_report.md&title=%5BBUG%5D+Issue+with+options"}),"file a bug"),")")),Object(i.b)("p",null,"Take, for example, the CLI option of ",Object(i.b)("inlineCode",{parentName:"p"},"--skip-validate-spec"),". This flag sets the value to true with no option to set it to false (the default internally). The maven and gradle plugins allow for the top-level option ",Object(i.b)("inlineCode",{parentName:"p"},"skipValidateSpec")," to have a value of true or false. The SBT plugin, on the other hand, follows community convention and this property is ",Object(i.b)("inlineCode",{parentName:"p"},"openApiSkipValidateSpec"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"How")," you provide values to options also depends on the tool. OpenAPI Generator supports global properties for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://openapi-generator.tech/docs/customization/#selective-generation"}),"selective generation")," -- such as ",Object(i.b)("inlineCode",{parentName:"p"},"apis")," -- to have either a blank value or a comma-separated list of selected values. We would define this in CLI as ",Object(i.b)("inlineCode",{parentName:"p"},"--global-property apis")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--global-property apis=Equipment"),". In the Gradle Plugin, these properties are set directly as strings:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'openApiGenerate {\n    globalProperties = [\n        apis: "",\n        models: "User,Pet"\n    ]\n}\n')),Object(i.b)("p",null,"In the Maven plugin, we're limited by XML syntax where ",Object(i.b)("inlineCode",{parentName:"p"},"<apis/>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<apis></apis>")," are treated the same as if the ",Object(i.b)("inlineCode",{parentName:"p"},"apis"),' node was undefined; there\'s no way to provide an empty string as a default. Instead, we have to extract the global property into its own properties which maintain the two states supported elsewhere (i.e. "all apis" or "select apis"). We have ',Object(i.b)("inlineCode",{parentName:"p"},"generateApis")," which accepts a boolean and ",Object(i.b)("inlineCode",{parentName:"p"},"apisToGenerate")," which accepts a comma-separated selection list."),Object(i.b)("h2",{id:"discovering-options"},"Discovering Options"),Object(i.b)("p",null,"Refer to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/globals"}),"global properties")," for a list of available global properties and their usage."),Object(i.b)("p",null,"Top-level tooling options are defined in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://openapi-generator.tech/docs/usage/#generate"}),"CLI usage"),". Many of these options directly map to camel case options in other tools, but do refer to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://openapi-generator.tech/docs/plugins"}),"plugin documentation")," for full details or plugin-specific differences."),Object(i.b)("p",null,"Config options for generators are available in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://openapi-generator.tech/docs/generators"}),"documentation online"),". You may also use the CLI to query config options for a target generator using ",Object(i.b)("inlineCode",{parentName:"p"},"openapi-generator config-help -g <generator-name>"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ openapi-generator config-help -g mysql-schema\n\nCONFIG OPTIONS\n\n    defaultDatabaseName\n        Default database name for all MySQL queries (Default: )\n\n    identifierNamingConvention\n        Naming convention of MySQL identifiers(table names and column names). This is not related to database name which is defined by defaultDatabaseName option (Default: original)\n            original - Do not transform original names\n            snake_case - Use snake_case names\n\n    jsonDataTypeEnabled\n        Use special JSON MySQL data type for complex model properties. Requires MySQL version 5.7.8. Generates TEXT data type when disabled (Default: true)\n\n    namedParametersEnabled\n        Generates model prepared SQLs with named parameters, eg. :petName. Question mark placeholder used when option disabled. (Default: false)\n")),Object(i.b)("p",null,"This output provides the name of the configuration option. A set of acceptable values for any constrained values will print as an indented list (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"identifierNamingConvention")," above)."),Object(i.b)("p",null,"Suppose you want to apply snake case naming to mysql schema outputs. Your configuration might resemble the following examples."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"CLI")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"openapi-generator -g mysql-schema -o out -i spec.yaml --additional-properties=identifierNamingConvention=snake_case\n")),Object(i.b)("p",null,"It may seem like a typo but there are two ",Object(i.b)("inlineCode",{parentName:"p"},"=")," signs in the above example."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Maven Plugin")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<execution>\n    <id>mysql-schema</id>\n    <phase>generate-sources</phase>\n    <goals>\n        <goal>generate</goal>\n    </goals>\n    <configuration>\n        <inputSpec>spec.yaml</inputSpec>\n        <generatorName>mysql-schema</generatorName>\n        <configOptions>\n            <identifierNamingConvention>snake_case</identifierNamingConvention>\n        </configOptions>\n        <output>${project.build.directory}/generated-sources/mysql</output>\n    </configuration>\n</execution>\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Gradle Plugin")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'openApiGenerate {\n    generatorName = "mysql-schema"\n    inputSpec = "$rootDir/spec.yaml".toString()\n    outputDir = "$buildDir/mysql".toString()\n    configOptions = [\n            identifierNamingConvention: "snake_case"\n    ]\n}\n')))}c.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},b=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?o.a.createElement(m,p({ref:t},s,{components:n})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);