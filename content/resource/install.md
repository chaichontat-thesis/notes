---
title: "Installations"
section: "Python"
author: "Chaichontat Sriworarat"
date: 2020-07-10
tags: ["python"]
---

# What to install

```shell
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install build-essential
```

## Install miniconda

```bash
conda config --add channels conda-forge
conda install jupyter jupyterlab nb_conda_kernels
```

```python
import numpy as np
```


### Environment

```bash
conda create -n name ipykernel matplotlib seaborn altair bqplot datashader scipy scikit-learn scikit-image
```



### CLI

- https://switowski.com/blog/favorite-cli-tools
- https://tldr.sh/