---
title: Optimising Network Packet Processing on Low-Power ARM Single-Board Computers
description: MSc dissertation evaluating DPDK and XDP networking paths on Raspberry Pi 5 hardware.
period: 2026
category: MSc dissertation
tags: [C, Linux, XDP, AF_XDP, DPDK, Raspberry Pi 5]
---

## Overview

This University of Edinburgh MSc dissertation examines whether kernel-bypass networking can reduce communication overhead on low-power ARM single-board computers used in edge-computing clusters. The work uses the Raspberry Pi 5 as its evaluation platform.

## Primary contribution

The Raspberry Pi 5's onboard Cadence GEM Ethernet controller lacked native XDP support and a DPDK poll-mode driver. I extended its Linux network driver with native XDP and AF_XDP support, enabling an accelerated packet-processing path on the platform.

## Evaluation

I developed a network benchmarking suite to compare DPDK-over-AF_XDP with conventional TCP and UDP sockets. The evaluation measured round-trip latency, driver overhead, throughput, and packet-processing rate across varying payload sizes.

- Median RTT fell by 9.41% relative to TCP and 6.74% relative to UDP.
- Tail latency at p99.9 improved by 13.25% relative to TCP and 9.46% relative to UDP.
- Driver-level tracing measured 24.1% lower transmit cost than TCP and approximately 52% lower receive cost than both socket baselines.

## Secondary exploration

I also developed a prototype native DPDK driver and a cache-synchronisation mechanism for non-coherent ARM memory architectures. This established groundwork for complete kernel bypass on similar ARM platforms.

## Findings and limits

The accelerated path consistently improved latency, tail latency, and driver overhead, with its strongest combined result at larger payloads. It did not improve small-packet throughput or packet rate over conventional UDP, showing that the benefit is workload-dependent rather than a blanket throughput improvement.