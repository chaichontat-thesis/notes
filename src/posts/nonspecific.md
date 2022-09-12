---
title: EdU-Seq
---

## EdU

5-Ethynyl-2′-deoxyuridine (EdU) is a nucleoside analogue of thymine (T).
Basically, it's a thymine whose methyl group is replaced by an ethynyl (alkyne) group.
This change opens us to the world of bioorthogonal labeling as an alkyne is virtually absent in biological systems.
In the presence of copper, an alkyne can react with an azide group to form a ring, "clicking" two molecules together.
This is called Copper-Catalyzed Azide-Alkyne Cycloaddition (CuAAC).
Typically, cells that are labelled with EdU are visualized with an azide fluorophore.
However, this tracing information cannot be retrieved in a single-cell sequencing system.
Therefore, we propose labeling EdU with an azide-tagged barcoding oligonucleotide.
The principle is similar to that of CITE-Seq.


## CFSE

EdU can capture cells that are in their S-phase.
However, the high variability in incorporation does not permit robust counting across multiple generations.
There is, however, another system that can label cells.
CFSE is a fluorescein that is coupled with a diacetate group with a cleavable ester bond.
Upon cellular entry, fluorescein is cleaved by intracellular esterase, binding it stably to an amine group in proteins.
By monitoring dye dilution, we can trace up to 6 divisions using flow cytometry.
The sensitivity is mainly limited by intrinsic cellular fluorescence that overlaps with the fluorescein signal.
Other dyes, such as CellTrace Violet and Yellow have purported better sensitivity.

We plan to perform a CITE-Seq-like experiment in which an oligo-labelled polyclonal antibody against FITC is used to label fluorescein.
