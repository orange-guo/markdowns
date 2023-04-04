"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[7595],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var i=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=i.createContext({}),p=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=p(n.components);return i.createElement(l.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,l=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?i.createElement(g,s(s({ref:e},c),{},{components:t})):i.createElement(g,s({ref:e},c))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,s=new Array(r);s[0]=m;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[d]="string"==typeof n?n:o,s[1]=a;for(var p=2;p<r;p++)s[p]=t[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},524:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=t(7462),o=(t(7294),t(3905));const r={},s="Company",a={unversionedId:"note/fastone/company",id:"note/fastone/company",title:"Company",description:"raw_command",source:"@site/docs/note/fastone/company.md",sourceDirName:"note/fastone",slug:"/note/fastone/company",permalink:"/markdowns/docs/note/fastone/company",draft:!1,editUrl:"https://github.com/orange-guo/markdowns/tree/master/docs/note/fastone/company.md",tags:[],version:"current",lastUpdatedBy:"xiangcheng.kuo",lastUpdatedAt:1680622034,formattedLastUpdatedAt:"Apr 4, 2023",frontMatter:{},sidebar:"note",previous:{title:"PyPI",permalink:"/markdowns/docs/note/python/Pypi"},next:{title:"Nginx",permalink:"/markdowns/docs/note/middleware/nginx"}},l={},p=[{value:"raw_command",id:"raw_command",level:2},{value:"fluent",id:"fluent",level:2},{value:"deltavina",id:"deltavina",level:2},{value:"Autodock Vina",id:"autodock-vina",level:2}],c={toc:p},d="wrapper";function u(n){let{components:e,...t}=n;return(0,o.kt)(d,(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"company"},"Company"),(0,o.kt)("h2",{id:"raw_command"},"raw_command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: CommandLineTool\ncwlVersion: v1.0\n$namespaces:\n  sbg: 'https://www.sevenbridges.com/'\nid: raw_command_windows_pbs\nbaseCommand: [ localhost ]\ninputs:\n  - id: command\n    type: string\n    inputBinding:\n      position: 0\n      shellQuote: false\noutputs:\n  - id: output\n    type: File?\n    outputBinding:\n      glob: 'result.txt'\nlabel: raw-command\nstdout: result.txt\nstderr: error.txt\nhints:\n  SchedulerRequirement: { scheduler: PBS_PRO_WINDOWS }\n")),(0,o.kt)("h2",{id:"fluent"},"fluent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: CommandLineTool\ncwlVersion: v1.0\n$namespaces:\n  sbg: 'https://www.sevenbridges.com/'\nid: ansys__fluent\nbaseCommand:\n  - salloc\ninputs:\n  - id: input_file\n    type: File\n    inputBinding:\n      position: 27\n      prefix: '-i'\n    label: Input File\n    doc: Input file for analysis\n  - id: np\n    type: int\n    inputBinding:\n      position: 0\n      prefix: '-n'\n      separate: false\n      shellQuote: false\n    label: CPU\u7684\u6570\u91cf\n  - id: input\n    type:\n      type: enum\n      symbols:\n        - 2d\n        - 3d\n        - 2ddp\n        - 3ddp\n    inputBinding:\n      position: 30\n      prefix: '-s'\n      shellQuote: false\n    label: \u6c42\u89e3\u5668\n    doc: '\u5176\u4e2d\u6c42\u89e3\u5668\u4e3a 2d, 3d, 2ddp, 3ddp\u4e2d\u7684\u4e00\u4e2a\u3002'\noutputs:\n  - id: output\n    type: 'Directory[]?'\n    outputBinding:\n      glob: .\nlabel: ANSYS Fluent\narguments:\n  - position: 21\n    prefix: ''\n    separate: false\n    shellQuote: false\n    valueFrom: /opt/fastone/softwares/ansys-2020/run_fluent-2020.sh\n  - position: 2\n    prefix: srun\n    shellQuote: false\n    valueFrom: '-n1'\n  - position: 4\n    prefix: ''\n    shellQuote: false\n    valueFrom: '--pty'\n  - position: 3\n    prefix: ''\n    shellQuote: false\n    valueFrom: '-N1'\nrequirements:\n  - class: ShellCommandRequirement\n  - class: InlineJavascriptRequirement\nhints:\n  - class: IconRequirement\n    iconUrl: ansys.21b49d1efac9.svg\n  - class: CloudRequirement\n    image: centos@fs-centos-7.5\nstdout: stdout.txt\nstderr: stderr.txt\n\n")),(0,o.kt)("h2",{id:"deltavina"},"deltavina"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"class: CommandLineTool\ncwlVersion: v1.0\n$namespaces:\n  sbg: 'https://www.sevenbridges.com/'\nid: run_dxgb_py\nbaseCommand:\n  - /opt/fastone/softwares/deltavina/run_DXGB-py.sh\ninputs:\n  - id: ligand\n    type: File\n    inputBinding:\n      position: 1\n    label: \u914d\u4f53\u7ed3\u6784\u6587\u4ef6\n  - id: protain\n    type: File\n    inputBinding:\n      position: 2\n    label: \u86cb\u767d\u5206\u5b50\u7ed3\u6784\u6587\u4ef6\n  - id: water_protain\n    type: File\n    inputBinding:\n      position: 3\n    label: \u5e26\u6c34\u86cb\u767d\u5206\u5b50\u7ed3\u6784\u6587\u4ef6\n  - id: pdbid\n    type: string\n    inputBinding:\n      position: 4\n    label: PDBID\n    doc: \u5206\u5b50\u6587\u4ef6PDBID\noutputs:\n  - id: output\n    type: Directory?\n    outputBinding:\n      glob: .\nlabel: run_DXGB.py\n")),(0,o.kt)("h2",{id:"autodock-vina"},"Autodock Vina"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ncwlVersion: v1.0\n"$graph":\n  - class: CommandLineTool\n    id: "#ligands_conversion.cwl"\n    baseCommand: [ ]\n    inputs:\n      - id: "#ligands_conversion.cwl/ligands"\n        type: File\n        inputBinding:\n          position: 0\n          prefix: "-isd"\n    outputs:\n      - id: "#ligands_conversion.cwl/ligands_converted"\n        type: File\n        outputBinding:\n          glob: "*.mol2"\n    label: ligands_conversion\n    arguments:\n      - "-omol2"\n      - position: 0\n        prefix: "-O"\n        valueFrom: "$(inputs[\'ligands\'][\'                     \']).mol2"\n    requirements:\n      - class: DockerRequirement\n        dockerPull: r.fastonetech.com:5000/openbabel\n      - class: InlineJavascriptRequirement\n  - class: CommandLineTool\n    id: "#ligands_split.cwl"\n    baseCommand: [ ]\n    inputs:\n      - id: "#ligands_split.cwl/ligands"\n        type: File\n        inputBinding:\n          position: 0\n    outputs:\n      - id: "#ligands_split.cwl/ligands_segments"\n        type:\n          type: array\n          items: File\n        outputBinding:\n          glob: "*.mol2"\n    label: ligands_split\n    arguments:\n      - "-m"\n      - position: 1\n        prefix: "-O"\n        valueFrom: vs.mol2\n    requirements:\n      - class: DockerRequirement\n        dockerPull: r.fastonetech.com:5000/openbabel\n  - class: CommandLineTool\n    id: "#receptors_conversion.cwl"\n    baseCommand:\n      - prepare_receptor4.py\n    inputs:\n      - id: "#receptors_conversion.cwl/receptors"\n        type: File\n        inputBinding:\n          position: 0\n          prefix: "-r"\n    outputs:\n      - id: "#receptors_conversion.cwl/receptors_converted"\n        type: File\n        outputBinding:\n          glob: "*.pdbqt"\n    label: receptors_conversion\n    arguments:\n      - "-e"\n      - position: 0\n        prefix: "-o"\n        valueFrom: "$(inputs[\'receptors\'][\'nameroot\']).pdbqt"\n    requirements:\n      - class: DockerRequirement\n        dockerPull: r.fastonetech.com:5000/mgltools\n      - class: InlineJavascriptRequirement\n  - class: CommandLineTool\n    id: "#super_screening.cwl"\n    baseCommand: [ ]\n    inputs:\n      - id: "#super_screening.cwl/ligand"\n        type: File\n        inputBinding:\n          position: 1\n          prefix: \'\'\n          separate: false\n      - id: "#super_screening.cwl/receptors"\n        type: File\n        inputBinding:\n          position: 2\n          prefix: \'\'\n          separate: false\n      - id: "#super_screening.cwl/config"\n        type: File\n        inputBinding:\n          position: 0\n          prefix: \'\'\n          separate: false\n    outputs:\n      - id: "#super_screening.cwl/match"\n        type: File?\n        outputBinding:\n          glob: "*.sdf"\n    label: super_screening\n    requirements:\n      - class: ResourceRequirement\n        ramMin: 512\n      - class: DockerRequirement\n        dockerPull: r.fastonetech.com:5000/supervina\n    temporaryFailCodes:\n      - 99\n  - class: Workflow\n    id: "#main"\n    label: vina\n    inputs:\n      - id: "#main/receptors"\n        type: File\n        label: Receptors\n        doc: Receptors file (*.pdb)\n      - id: "#main/ligands"\n        type: File\n        label: Ligands\n        doc: Ligands file (*.sdf)\n      - id: "#main/config"\n        type: File\n        label: Config\n        doc: config file (*.conf)\n    outputs:\n      - id: "#main/match"\n        outputSource:\n          - "#main/super_screening/match"\n        type:\n          type: array\n          items: File\n    steps:\n      - id: "#main/receptors_conversion"\n        in:\n          - id: "#main/receptors_conversion/receptors"\n            source: "#main/receptors"\n        out:\n          - id: "#main/receptors_conversion/receptors_converted"\n        run: "#receptors_conversion.cwl"\n        label: receptors_conversion\n      - id: "#main/ligands_conversion"\n        in:\n          - id: "#main/ligands_conversion/ligands"\n            source: "#main/ligands"\n        out:\n          - id: "#main/ligands_conversion/ligands_converted"\n        run: "#ligands_conversion.cwl"\n        label: ligands_conversion\n      - id: "#main/ligands_split"\n        in:\n          - id: "#main/ligands_split/ligands"\n            source: "#main/ligands_conversion/ligands_converted"\n        out:\n          - id: "#main/ligands_split/ligands_segments"\n        run: "#ligands_split.cwl"\n        label: ligands_split\n      - id: "#main/super_screening"\n        in:\n          - id: "#main/super_screening/ligand"\n            source: "#main/ligands_split/ligands_segments"\n          - id: "#main/super_screening/receptors"\n            source: "#main/receptors_conversion/receptors_converted"\n          - id: "#main/super_screening/config"\n            source: "#main/config"\n        out:\n          - id: "#main/super_screening/match"\n        run: "#super_screening.cwl"\n        label: super_screening\n        scatter:\n          - "#main/super_screening/ligand"\n    requirements:\n      - class: ScatterFeatureRequirement\n    hints:\n      CloudRequirement: { image: ubuntu@fs-compute-vina }\n      IconRequirement: { iconUrl: autodock.11b3d3045c5b.png }\n')))}u.isMDXComponent=!0}}]);