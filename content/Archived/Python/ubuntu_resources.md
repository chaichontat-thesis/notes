---
title: "Ubuntu Resources"
section: "Python"
author: "Chaichontat Sriworarat"
date: 2019-10-26
tags: ["ubuntu", "links"]
---

# Sound

* Install [PulseEffects](https://github.com/wwmm/pulseeffects)
* Set [config](https://forum.manjaro.org/t/solved-terrible-sound-in-linux-much-better-in-windows/8203/4)

> Edit your daemon conf to have these settings
> default-sample-format = float32ne
> default-sample-rate = 48000
> alternate-sample-rate = 44100
> default-sample-channels = 2
> default-channel-map = front-left,front-right
>
> default-fragments = 2
> default-fragment-size-msec = 125
> resample-method = soxr-vhq or if you want less latency speex-float-10 or speex-fixed-10
> enable-lfe-remixing = no
> high-priority = yes
> nice-level = -11
> realtime-scheduling = yes
> realtime-priority = 9
> rlimit-rtprio = 9
> rlimit-rttime = -1
> daemonize = no
> and then put this after vim in asound.conf in etc
> pcm.!default {
> type plug
> slave.pcm hw
> }
> This piece of code I had you put in your asound.conf bypasses dmix for pulseaudio increasing sound quality by a lot because we can’t have more then one resampler because if we do it gets resampled twice and some sound quality is lost

# Developer

* Install `zsh`, `zsh-autosuggestions`, and `zsh-syntax-highlighting`
* Use `FiraCode` for ligatures.

# Keyboard

* Ubuntu has `ComposeKey`.
* In Mac, use `Ukelele`.
