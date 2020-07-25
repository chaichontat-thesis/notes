## Factor Analysis
[YouTube](https://www.youtube.com/watch?v=KaTnWP1SVpk)

* $p$: number of factors.
* $q$: number of observations.

#### Assumptions
* Only keeps variations that are shared across neurons (correlation).

$$
\begin{align}
  \bz &∼ \normal{\mb{0}, \mb{I}} \\
  \bx ∣ \bz &∼ \normal{\mb{Cz+d}, \underbrace{\mb{R}}_\mathrm{diagonal}} \\
  ~\\
  \bx &∼\normal{\mb{d}, \mb{CC^\T+R}}
\end{align}
$$

Try to approximate $\mb{XX^T}$ with low-rank $\mb{CC^\T+R}$ where
* $\mb{CC^T}$ is the shared variance, captured by the low-$d$ space.
* $\mb{R}$ is the independent variance, which is the residual.

Typical method is the EM algorithm.
