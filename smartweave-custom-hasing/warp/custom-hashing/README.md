## Instructions

In this subdirectory I will be creating a solution to a domain-specific problem related to a WIP project referred to as the ('super-shadowy-slky') from here on out...when complete it should allow 'lessons' (beyond the range of this subject) to be done in 32 bytes (on-chain).

E.g: https://github.com/makerdao/dss-chain-log

For more information on hash storage, look here: https://github.com/The-Arbiter/Hash-Storage-Example

Note: some of the contents below refer to project(s) external from this repository, once that is brought to production this repository may make more contextual sense.

With ARWeave the goal is to get the CID as short as possible using a custom hashing algorithm (in development within this directory). 

The idea is to use a smartweave contract to redirect one 'bitly style' link to the full CID, and then pack those in a struct. Once again referring to 'super-shadowy-slky'...

Another option is to run a custom IPFS node using blake2B (hashes down to ~24 bits) which lets you store characters and it corresponds to a URL...which corresponds to the markdown of (prototype specific state)...

## Goals

Complete smartweave contract that takes in a 7 character string and returns the CID of the corresponding ARWeave content.

                                                                                                                                                   