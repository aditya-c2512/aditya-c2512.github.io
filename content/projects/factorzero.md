---
title: FactorZero
description: Fault-tolerant distributed file system and parallel workload engine.
period: November 2025
category: Distributed systems
tags: [C++, gRPC, Replication]
---

## Overview

FactorZero is a fault-tolerant distributed file system paired with a parallel workload engine. The project focuses on maintaining correctness and availability when nodes or network communication fail.

## What I built

- A distributed file system with whole-file caching, primary-backup replication, and heartbeat-based failover.
- A coordinator-worker engine for distributing large-scale primality-testing tasks with recovery.
- Idempotent gRPC retry semantics and Lamport clocks for ordered result aggregation in unreliable network conditions.

## Validation

I verified global-state consistency with Chandy-Lamport snapshots and benchmarked throughput under varied failure scenarios.