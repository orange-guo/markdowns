# Company

## raw_command

```yaml
class: CommandLineTool
cwlVersion: v1.0
$namespaces:
  sbg: 'https://www.sevenbridges.com/'
id: raw_command_windows_pbs
baseCommand: [ localhost ]
inputs:
  - id: command
    type: string
    inputBinding:
      position: 0
      shellQuote: false
outputs:
  - id: output
    type: File?
    outputBinding:
      glob: 'result.txt'
label: raw-command
stdout: result.txt
stderr: error.txt
hints:
  SchedulerRequirement: { scheduler: PBS_PRO_WINDOWS }
```

## fluent

```yaml
class: CommandLineTool
cwlVersion: v1.0
$namespaces:
  sbg: 'https://www.sevenbridges.com/'
id: ansys__fluent
baseCommand:
  - salloc
inputs:
  - id: input_file
    type: File
    inputBinding:
      position: 27
      prefix: '-i'
    label: Input File
    doc: Input file for analysis
  - id: np
    type: int
    inputBinding:
      position: 0
      prefix: '-n'
      separate: false
      shellQuote: false
    label: CPU的数量
  - id: input
    type:
      type: enum
      symbols:
        - 2d
        - 3d
        - 2ddp
        - 3ddp
    inputBinding:
      position: 30
      prefix: '-s'
      shellQuote: false
    label: 求解器
    doc: '其中求解器为 2d, 3d, 2ddp, 3ddp中的一个。'
outputs:
  - id: output
    type: 'Directory[]?'
    outputBinding:
      glob: .
label: ANSYS Fluent
arguments:
  - position: 21
    prefix: ''
    separate: false
    shellQuote: false
    valueFrom: /opt/fastone/softwares/ansys-2020/run_fluent-2020.sh
  - position: 2
    prefix: srun
    shellQuote: false
    valueFrom: '-n1'
  - position: 4
    prefix: ''
    shellQuote: false
    valueFrom: '--pty'
  - position: 3
    prefix: ''
    shellQuote: false
    valueFrom: '-N1'
requirements:
  - class: ShellCommandRequirement
  - class: InlineJavascriptRequirement
hints:
  - class: IconRequirement
    iconUrl: ansys.21b49d1efac9.svg
  - class: CloudRequirement
    image: centos@fs-centos-7.5
stdout: stdout.txt
stderr: stderr.txt

```

## deltavina

```yaml
class: CommandLineTool
cwlVersion: v1.0
$namespaces:
  sbg: 'https://www.sevenbridges.com/'
id: run_dxgb_py
baseCommand:
  - /opt/fastone/softwares/deltavina/run_DXGB-py.sh
inputs:
  - id: ligand
    type: File
    inputBinding:
      position: 1
    label: 配体结构文件
  - id: protain
    type: File
    inputBinding:
      position: 2
    label: 蛋白分子结构文件
  - id: water_protain
    type: File
    inputBinding:
      position: 3
    label: 带水蛋白分子结构文件
  - id: pdbid
    type: string
    inputBinding:
      position: 4
    label: PDBID
    doc: 分子文件PDBID
outputs:
  - id: output
    type: Directory?
    outputBinding:
      glob: .
label: run_DXGB.py
```

## Autodock Vina

```yaml
---
cwlVersion: v1.0
"$graph":
  - class: CommandLineTool
    id: "#ligands_conversion.cwl"
    baseCommand: [ ]
    inputs:
      - id: "#ligands_conversion.cwl/ligands"
        type: File
        inputBinding:
          position: 0
          prefix: "-isd"
    outputs:
      - id: "#ligands_conversion.cwl/ligands_converted"
        type: File
        outputBinding:
          glob: "*.mol2"
    label: ligands_conversion
    arguments:
      - "-omol2"
      - position: 0
        prefix: "-O"
        valueFrom: "$(inputs['ligands']['                     ']).mol2"
    requirements:
      - class: DockerRequirement
        dockerPull: r.fastonetech.com:5000/openbabel
      - class: InlineJavascriptRequirement
  - class: CommandLineTool
    id: "#ligands_split.cwl"
    baseCommand: [ ]
    inputs:
      - id: "#ligands_split.cwl/ligands"
        type: File
        inputBinding:
          position: 0
    outputs:
      - id: "#ligands_split.cwl/ligands_segments"
        type:
          type: array
          items: File
        outputBinding:
          glob: "*.mol2"
    label: ligands_split
    arguments:
      - "-m"
      - position: 1
        prefix: "-O"
        valueFrom: vs.mol2
    requirements:
      - class: DockerRequirement
        dockerPull: r.fastonetech.com:5000/openbabel
  - class: CommandLineTool
    id: "#receptors_conversion.cwl"
    baseCommand:
      - prepare_receptor4.py
    inputs:
      - id: "#receptors_conversion.cwl/receptors"
        type: File
        inputBinding:
          position: 0
          prefix: "-r"
    outputs:
      - id: "#receptors_conversion.cwl/receptors_converted"
        type: File
        outputBinding:
          glob: "*.pdbqt"
    label: receptors_conversion
    arguments:
      - "-e"
      - position: 0
        prefix: "-o"
        valueFrom: "$(inputs['receptors']['nameroot']).pdbqt"
    requirements:
      - class: DockerRequirement
        dockerPull: r.fastonetech.com:5000/mgltools
      - class: InlineJavascriptRequirement
  - class: CommandLineTool
    id: "#super_screening.cwl"
    baseCommand: [ ]
    inputs:
      - id: "#super_screening.cwl/ligand"
        type: File
        inputBinding:
          position: 1
          prefix: ''
          separate: false
      - id: "#super_screening.cwl/receptors"
        type: File
        inputBinding:
          position: 2
          prefix: ''
          separate: false
      - id: "#super_screening.cwl/config"
        type: File
        inputBinding:
          position: 0
          prefix: ''
          separate: false
    outputs:
      - id: "#super_screening.cwl/match"
        type: File?
        outputBinding:
          glob: "*.sdf"
    label: super_screening
    requirements:
      - class: ResourceRequirement
        ramMin: 512
      - class: DockerRequirement
        dockerPull: r.fastonetech.com:5000/supervina
    temporaryFailCodes:
      - 99
  - class: Workflow
    id: "#main"
    label: vina
    inputs:
      - id: "#main/receptors"
        type: File
        label: Receptors
        doc: Receptors file (*.pdb)
      - id: "#main/ligands"
        type: File
        label: Ligands
        doc: Ligands file (*.sdf)
      - id: "#main/config"
        type: File
        label: Config
        doc: config file (*.conf)
    outputs:
      - id: "#main/match"
        outputSource:
          - "#main/super_screening/match"
        type:
          type: array
          items: File
    steps:
      - id: "#main/receptors_conversion"
        in:
          - id: "#main/receptors_conversion/receptors"
            source: "#main/receptors"
        out:
          - id: "#main/receptors_conversion/receptors_converted"
        run: "#receptors_conversion.cwl"
        label: receptors_conversion
      - id: "#main/ligands_conversion"
        in:
          - id: "#main/ligands_conversion/ligands"
            source: "#main/ligands"
        out:
          - id: "#main/ligands_conversion/ligands_converted"
        run: "#ligands_conversion.cwl"
        label: ligands_conversion
      - id: "#main/ligands_split"
        in:
          - id: "#main/ligands_split/ligands"
            source: "#main/ligands_conversion/ligands_converted"
        out:
          - id: "#main/ligands_split/ligands_segments"
        run: "#ligands_split.cwl"
        label: ligands_split
      - id: "#main/super_screening"
        in:
          - id: "#main/super_screening/ligand"
            source: "#main/ligands_split/ligands_segments"
          - id: "#main/super_screening/receptors"
            source: "#main/receptors_conversion/receptors_converted"
          - id: "#main/super_screening/config"
            source: "#main/config"
        out:
          - id: "#main/super_screening/match"
        run: "#super_screening.cwl"
        label: super_screening
        scatter:
          - "#main/super_screening/ligand"
    requirements:
      - class: ScatterFeatureRequirement
    hints:
      CloudRequirement: { image: ubuntu@fs-compute-vina }
      IconRequirement: { iconUrl: autodock.11b3d3045c5b.png }
```